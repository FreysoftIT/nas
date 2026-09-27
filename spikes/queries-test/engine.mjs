// PROPOSALS: every rule in this file is proposed, not ratified — see /PROPOSALS.md.
// The build: files → fresh derived index → every view → structural checks.
// One PGlite instance is kept warm; each build wipes and rebuilds the schema,
// so nothing survives between builds except the engine itself (ENGINE §5).
import { PGlite } from '@electric-sql/pglite';
import { btree_gist } from '@electric-sql/pglite/contrib/btree_gist';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { load } from './load.mjs';
import { queries } from './queries.mjs';

const here = dirname(fileURLToPath(import.meta.url));

export async function createEngine(root) {
  const db = await PGlite.create({ extensions: { btree_gist } });

  async function build() {
    const t0 = performance.now();
    await db.exec(`DROP SCHEMA IF EXISTS public CASCADE; CREATE SCHEMA public;
                   CREATE EXTENSION IF NOT EXISTS btree_gist;`);
    // Re-read each build: an edit to the schema is picked up like any other.
    await db.exec(readFileSync(join(here, 'schema.sql'), 'utf8'));
    const log = await load(db, root);
    const tLoad = performance.now() - t0;

    const views = [];
    for (const q of queries) {
      const t = performance.now();
      try {
        const { rows, fields } = await db.query(q.sql, q.params ?? ['pillar_01']);
        views.push({ ...q, rows, columns: fields.map((f) => f.name), ms: performance.now() - t });
      } catch (e) {
        views.push({ ...q, rows: [], columns: [], error: e.message, ms: performance.now() - t });
      }
    }

    return {
      log, views,
      structural: [await time2(db)],
      ms: { load: tLoad, total: performance.now() - t0 },
      builtAt: new Date(),
    };
  }

  return { build, close: () => db.close() };
}

// ── TIME-2: no entity in two overlapping intervals ──
// Enforced by an exclusion constraint. Each presence row goes in on its own, so
// every conflict is reported instead of the first one aborting the rest.
// P-21: a scene occupies one hour from its start (the corpus gives start times,
// not durations, for most scenes).
async function time2(db) {
  await db.exec(`CREATE TABLE presence (entity text, scene text, span numrange,
    EXCLUDE USING gist (entity WITH =, span WITH &&))`);
  const { rows } = await db.query(`
    SELECT unnest(characters_present) AS entity, id AS scene, story_day
    FROM scene WHERE story_day IS NOT NULL ORDER BY story_day, id`);
  const violations = [];
  for (const r of rows) {
    try {
      await db.query(`INSERT INTO presence VALUES ($1, $2, numrange($3::numeric, $3::numeric + 1.0/24))`,
        [r.entity, r.scene, r.story_day]);
    } catch {
      const { rows: clash } = await db.query(
        `SELECT scene FROM presence WHERE entity = $1 AND span && numrange($2::numeric, $2::numeric + 1.0/24)`,
        [r.entity, r.story_day]);
      violations.push({ entity: r.entity, scene: r.scene, clashes_with: clash.map((c) => c.scene).join(', ') });
    }
  }
  return {
    rule: 'TIME-2', proposals: ['P-01', 'P-21'],
    statement: 'No entity is in two overlapping intervals (bilocation).',
    enforcedBy: 'exclusion constraint — EXCLUDE USING gist (entity WITH =, span WITH &&)',
    checked: rows.length, violations,
  };
}
