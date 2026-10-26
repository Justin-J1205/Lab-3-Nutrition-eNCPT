import Link from 'next/link';
import { notFound } from 'next/navigation';
import { readNotes } from '../../../lib/store';
export const dynamic = 'force-dynamic';
export default function NotePage({ params }) {
  const note = readNotes().find((n) => n.id === params.id);
  if (!note) notFound();
  return (
    <div className="card">
      <pre>{note.text}</pre>
      <p className="noprint"><Link href="/">&larr; All notes</Link> &nbsp; (Ctrl/Cmd+P to print or save as PDF)</p>
    </div>
  );
}
