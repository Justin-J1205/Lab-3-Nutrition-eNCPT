import { NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import { readNotes, writeNotes } from '../../../lib/store';
import { formatNote } from '../../../lib/ncpt';
import { buildNote, validateNote } from '../../../lib/validate';
export const dynamic = 'force-dynamic';

export async function GET() { return NextResponse.json(readNotes()); }

// Accepts either the structured note (Postman) or the flat form payload (web form).
export async function POST(req) {
  const b = await req.json();
  const structured = b.diagnosis
    ? { patientName: b.patientName, assessment: b.assessment, diagnosis: b.diagnosis, intervention: b.intervention, monitoring: b.monitoring }
    : buildNote(b, b.patientName);
  const errors = validateNote(structured);
  if (errors.length)
    return NextResponse.json({ error: 'Validation failed: ' + errors.join('; '), errors }, { status: 400 });
  const note = { id: randomUUID(), createdAt: new Date().toISOString(), ...structured, text: formatNote(structured) };
  const notes = readNotes();
  notes.unshift(note);
  writeNotes(notes);
  return NextResponse.json(note, { status: 201 });
}
