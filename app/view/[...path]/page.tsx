import { fetchMarkdownFile } from '../../../lib/data';

export default async function ViewPage({ params }: { params: { path: string[] } }) {
  const path = params.path.join('/');
  const content = await fetchMarkdownFile(path);

  return (
    <div className="card" style={{ minHeight: '80vh' }}>
      <div style={{ marginBottom: 20 }}>
        <a href="/" className="small">← Back to Dashboard</a>
      </div>
      <h1 className="h2" style={{ borderBottom: '1px solid #1f2a3a', paddingBottom: 10 }}>Viewing: {path}</h1>
      <div className="markdown-view" style={{ whiteSpace: 'pre-wrap', marginTop: 20, fontSize: 15, lineHeight: 1.6 }}>
        {content || 'File content could not be loaded.'}
      </div>
    </div>
  );
}
