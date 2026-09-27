-- PROPOSALS: every rule in this file is proposed, not ratified — see /PROPOSALS.md.
-- NAS derived index — spike schema (ENGINE.md §6.3).
-- Derived and deletable: every row is rebuilt from the Markdown corpus on each
-- run (ENGINE.md §5 — the tool never owns storage). Nothing here is authored.

-- ── The graph ──────────────────────────────────────────────────────────────

CREATE TABLE node (
  id            text PRIMARY KEY,
  family        text,                 -- world | character (collectives are agents)
  layer         text,
  modality      text,
  content       text,
  status        text,
  canonised_in  text,
  member_of     text[] NOT NULL DEFAULT '{}',
  file          text NOT NULL
);

-- GRAPH-5: the edge vocabulary is frozen, in two namespaces. An enum can gain a
-- value but not lose one — "retired names stay retired" is the type's behaviour.
CREATE TYPE causal_edge AS ENUM ('derives_from', 'constrains', 'tensions_with');

CREATE TABLE edge (
  src   text NOT NULL,
  kind  causal_edge NOT NULL,
  dst   text NOT NULL,
  PRIMARY KEY (src, kind, dst)
);

CREATE TABLE valence (
  id          text PRIMARY KEY,
  owner       text NOT NULL,
  lack        text,
  kind        text,
  pressure    numeric,
  candidates  text[] NOT NULL DEFAULT '{}',
  successor   text,
  bound_by    text[] NOT NULL DEFAULT '{}'
);

CREATE TABLE forecloses (
  src  text NOT NULL,   -- valence id
  dst  text NOT NULL,   -- valence id
  PRIMARY KEY (src, dst)
);

CREATE TABLE facet (
  id            text PRIMARY KEY,
  owner         text NOT NULL,
  presented_to  text[] NOT NULL DEFAULT '{}',
  authenticity  text,
  granted_in    text[] NOT NULL DEFAULT '{}'
);

-- ── The delta stream ───────────────────────────────────────────────────────

CREATE TABLE scene (
  id                  text PRIMARY KEY,
  pov                 text,
  characters_present  text[] NOT NULL DEFAULT '{}',
  active_field        text[] NOT NULL DEFAULT '{}',
  story_time_raw      text,
  story_day           numeric,        -- days relative to ch07; NULL = unparsed cloud
  render_phase        text,
  pillar_binding      text,
  file                text NOT NULL
);

-- NAS §10: telling order lives in the Cut, never in the scene.
CREATE TABLE cut (
  position  int PRIMARY KEY,
  scene     text                      -- NULL = an unwritten position
);

CREATE TABLE move (
  scene   text NOT NULL,
  seq     int  NOT NULL,
  on_val  text NOT NULL,
  type    text NOT NULL CHECK (type IN ('open', 'alter', 'close')),   -- frozen (§8.5)
  kind    text NOT NULL,
  by      text NOT NULL,              -- VAL-1: nothing happens without an agent
  beat    text,
  PRIMARY KEY (scene, seq)
);

CREATE TABLE attempt (
  scene    text NOT NULL,
  seq      int  NOT NULL,
  by       text NOT NULL,
  on_val   text NOT NULL,
  via      text,
  intent   text,
  outcome  text,
  PRIMARY KEY (scene, seq)
);

CREATE TABLE modifier (
  scene        text NOT NULL,
  attempt_seq  int  NOT NULL,
  seq          int  NOT NULL,
  source       text,
  class        text CHECK (class IN ('ambient', 'internal', 'epistemic', 'external')),
  stage        text CHECK (stage IN ('selection', 'resolution')),
  bearing      text,
  note         text,
  PRIMARY KEY (scene, attempt_seq, seq)
);

CREATE TABLE info_op (
  scene     text NOT NULL,
  seq       int  NOT NULL,
  observer  text NOT NULL,
  op        text NOT NULL,
  fact      text NOT NULL,
  beat      text,
  PRIMARY KEY (scene, seq)
);

-- Relationship-edge deltas, one row per exit_delta that names an edge.
CREATE TABLE edge_delta (
  scene  text NOT NULL,
  seq    int  NOT NULL,
  src    text NOT NULL,
  dst    text NOT NULL,
  trust  numeric,          -- a change, not a value
  kind   text,
  PRIMARY KEY (scene, seq)
);

-- entry_state is an authored snapshot (SCENE-3 forbids those). Loaded only so
-- the fold can be compared against it.
CREATE TABLE edge_snapshot (
  scene  text NOT NULL,
  src    text NOT NULL,
  dst    text NOT NULL,
  trust  numeric,
  PRIMARY KEY (scene, src, dst)
);

CREATE TABLE facet_event (
  scene  text NOT NULL,
  seq    int  NOT NULL,
  of     text NOT NULL,
  facet  text NOT NULL,
  event  text NOT NULL,
  "to"   text,
  beat   text,
  PRIMARY KEY (scene, seq)
);

CREATE TABLE pillar (
  id        text PRIMARY KEY,
  bound_to  text,
  status    text
);

-- ── Derived orderings ─────────────────────────────────────────────────────

-- Telling position per scene.
CREATE VIEW scene_cut AS
  SELECT s.*, c.position AS cut_position
  FROM scene s LEFT JOIN cut c ON c.scene = s.id;

-- An agent is whatever owns a valence or a facet, or appears in member_of.
CREATE VIEW agent AS
  SELECT DISTINCT owner AS id FROM valence
  UNION SELECT DISTINCT owner FROM facet;
