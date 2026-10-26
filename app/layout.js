import Link from 'next/link';
import './globals.css';
export const metadata = { title: 'eNCPT Charting Module' };
export default function RootLayout({ children }) {
  return (
    <html lang="en"><body>
      <nav><strong>eNCPT Charting</strong><Link href="/">Notes</Link><Link href="/chart">+ New note</Link></nav>
      <main>{children}</main>
    </body></html>
  );
}
