import { fetchMarkdownFile } from '../../lib/data';

export default async function FilesPage() {
  const memory = await fetchMarkdownFile('memory.md');

  return (
    <div className="grid grid-2">
      <div className="card">
        <div className="h2">Agent Memory</div>
        <div className="markdown-view" style={{ whiteSpace: 'pre-wrap', fontSize: 12, opacity: 0.8 }}>
          {memory || 'No memory file found.'}
        </div>
      </div>
      <div className="card">
        <div className="h2">File Explorer</div>
        <p className="small">Additional project files from SreeramLifeOS-Data will appear here.</p>
      </div>
    </div>
  );
}
