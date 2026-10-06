// Minimal .docx reader: a .docx is a zip; the body is word/document.xml.
// No dependencies beyond node:zlib — the tool reads the author's documents
// where they are and never writes to them (GRAPH-9).
import { readFileSync } from 'node:fs';
import { inflateRawSync } from 'node:zlib';

function entry(buf, name) {
  // End of Central Directory: signature 0x06054b50, within the last 64 KiB.
  let eocd = -1;
  for (let i = buf.length - 22; i >= Math.max(0, buf.length - 65557); i--)
    if (buf.readUInt32LE(i) === 0x06054b50) { eocd = i; break; }
  if (eocd < 0) throw new Error('not a zip file');
  const count = buf.readUInt16LE(eocd + 10);
  let p = buf.readUInt32LE(eocd + 16);
  for (let n = 0; n < count; n++) {
    if (buf.readUInt32LE(p) !== 0x02014b50) throw new Error('bad central directory');
    const method = buf.readUInt16LE(p + 10);
    const size = buf.readUInt32LE(p + 20);
    const nameLen = buf.readUInt16LE(p + 28), extraLen = buf.readUInt16LE(p + 30), commentLen = buf.readUInt16LE(p + 32);
    const local = buf.readUInt32LE(p + 42);
    const fname = buf.toString('utf8', p + 46, p + 46 + nameLen);
    if (fname === name) {
      const lNameLen = buf.readUInt16LE(local + 26), lExtraLen = buf.readUInt16LE(local + 28);
      const data = buf.subarray(local + 30 + lNameLen + lExtraLen, local + 30 + lNameLen + lExtraLen + size);
      return method === 0 ? data : inflateRawSync(data);
    }
    p += 46 + nameLen + extraLen + commentLen;
  }
  throw new Error(`${name} not found`);
}

const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'" };

/** Paragraphs of a .docx, as plain text, in order. Empty paragraphs dropped
 *  but numbering kept, so `n` is stable against the document's own layout. */
export function paragraphs(path) {
  const xml = entry(readFileSync(path), 'word/document.xml').toString('utf8');
  return xml.split('</w:p>').map((p, i) => ({
    n: i + 1,
    text: p.replace(/<w:tab\/>/g, '\t').replace(/<[^>]+>/g, '')
      .replace(/&(amp|lt|gt|quot|apos);/g, (_, e) => ENT[e]).replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d)).trim(),
  })).filter((p) => p.text);
}
