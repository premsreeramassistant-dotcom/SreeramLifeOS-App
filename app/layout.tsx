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
        <nav className="nav" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 16 }}>
            <Link href="/">Dashboard</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/agent">Agent</Link>
            <Link href="/files">Files</Link>
          </div>
          <div>
            <a href="/login" style={{ fontSize: 12, opacity: 0.6 }}>Logout</a>
          </div>
        </nav>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
