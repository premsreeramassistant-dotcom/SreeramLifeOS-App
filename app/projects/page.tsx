import { fetchMarkdownFile } from '../../lib/data';

export default async function ProjectsPage() {
  const content = await fetchMarkdownFile('kanban.md');

  return (
    <div className="card">
      <div className="h2">Project Board (MangoSol)</div>
      {content ? (
        <div className="markdown-view" style={{ whiteSpace: 'pre-wrap', fontSize: 14 }}>
          {content}
        </div>
      ) : (
        <p className="small">Could not load Kanban data from repo.</p>
      )}
    </div>
  );
}
