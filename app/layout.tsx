import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'SreeramLifeOS',
  description: 'Personal Operating System Dashboard'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <Link href="/">Dashboard</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/agent">Agent</Link>
          <Link href="/files">Files</Link>
        </nav>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
