import { fetchMarkdownFile } from '../../../lib/data';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default async function ViewPage({ params }: { params: { path: string[] } }) {
  const path = params.path.join('/');
  const content = await fetchMarkdownFile(path);

  return (
    <div className="card" style={{ minHeight: '80vh' }}>
      <div style={{ marginBottom: 20 }}>
        <a href="/" className="small">← Back to Dashboard</a>
      </div>
      <h1 className="h2" style={{ borderBottom: '1px solid #1f2a3a', paddingBottom: 10 }}>Viewing: {path}</h1>
      <div className="markdown-content" style={{ marginTop: 20 }}>
        {content ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        ) : (
          <p className="small">File content could not be loaded.</p>
        )}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .markdown-content h1 { font-size: 24px; margin: 20px 0 10px; }
        .markdown-content h2 { font-size: 20px; margin: 16px 0 8px; border-bottom: 1px solid #1f2a3a; padding-bottom: 4px; }
        .markdown-content p { margin-bottom: 12px; line-height: 1.6; }
        .markdown-content ul { padding-left: 20px; margin-bottom: 12px; }
        .markdown-content li { margin-bottom: 4px; }
        .markdown-content table { width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 14px; }
        .markdown-content th, .markdown-content td { border: 1px solid #1f2a3a; padding: 12px; text-align: left; }
        .markdown-content th { background: #1f2a3a; color: #fff; }
        .markdown-content tr:nth-child(even) { background: #0d1117; }
      `}} />
    </div>
  );
}
