import fs from 'fs';
import path from 'path';
const FILE = process.env.VERCEL ? '/tmp/notes.json' : path.join(process.cwd(), 'data', 'notes.json');
export function readNotes() {
  try { return JSON.parse(fs.readFileSync(FILE, 'utf8')); } catch { return []; }
}
export function writeNotes(notes) {
  fs.mkdirSync(path.dirname(FILE), { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(notes, null, 2));
}
