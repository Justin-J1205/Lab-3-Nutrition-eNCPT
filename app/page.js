import Link from 'next/link';
import { readNotes } from '../lib/store';
export const dynamic = 'force-dynamic';
export default function Home() {
  const notes = readNotes();
  return (
    <>
      <h1>Clinical notes</h1>
      {notes.length === 0 && <p>No notes yet. <Link href="/chart">Create the first one</Link>.</p>}
      {notes.map((n) => (
        <div className="card" key={n.id}>
          <Link href={`/notes/${n.id}`}><strong>{n.patientName}</strong></Link>
          <div>{new Date(n.createdAt).toLocaleString()}</div>
        </div>
      ))}
    </>
  );
}
