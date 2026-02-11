import { fetchMarkdownFile, parseMarkdownTable } from '../../lib/data';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ProjectsPage() {
  const content = await fetchMarkdownFile('kanban.md');
  const tasks = content ? parseMarkdownTable(content) : [];

  const columns = ['BACKLOG', 'TO DO (HIGH)', 'TO DO (MED)', 'TO DO (LOW)', 'IN PROGRESS', 'DONE'];

  const getPillarColor = (project: string) => {
    const p = project.toLowerCase();
    if (p.includes('product') || p.includes('mangosol')) return '#1f6feb'; // CEO Blue
    if (p.includes('ops') || p.includes('admin') || p.includes('finance')) return '#8957e5'; // Admin Purple
    if (p.includes('family') || p.includes('home')) return '#238636'; // Family Green
    if (p.includes('health')) return '#d29922'; // Health Yellow
    if (p.includes('agent') || p.includes('prem')) return '#da3633'; // Agent Red
    return '#30363d';
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', maxWidth: '100vw', padding: '0 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="h1">Command Center: Unified Kanban</h1>
          <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
            <span className="small" style={{ color: '#1f6feb' }}>● MangoSol</span>
            <span className="small" style={{ color: '#238636' }}>● Family</span>
            <span className="small" style={{ color: '#da3633' }}>● Prem (AI)</span>
            <span className="small" style={{ color: '#d29922' }}>● Health</span>
          </div>
        </div>
        <div className="badge">PST: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</div>
      </div>

      <div style={{ 
        display: 'flex', 
        gap: 12, 
        overflowX: 'auto', 
        paddingBottom: 20,
        height: 'calc(100vh - 200px)'
      }}>
        {columns.map(col => {
          const colTasks = tasks.filter(t => (t.column || '').includes(col));
          return (
            <div key={col} style={{ 
              minWidth: 260, 
              flex: 1,
              display: 'flex', 
              flexDirection: 'column', 
              gap: 8,
              background: '#0d1117',
              borderRadius: 8,
              padding: 12,
              border: '1px solid #1f2a3a'
            }}>
              <div style={{ 
                fontSize: 12, 
                fontWeight: 'bold',
                paddingBottom: 8, 
                color: '#8b949e',
                display: 'flex',
                justifyContent: 'space-between',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {col}
                <span>{colTasks.length}</span>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, overflowY: 'auto' }}>
                {colTasks.map((t, i) => (
                  <div key={i} style={{ 
                    padding: 10, 
                    fontSize: 12, 
                    background: '#161b22',
                    borderRadius: 6,
                    borderLeft: `4px solid ${getPillarColor(t.project || '')}`,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{ fontWeight: '600', marginBottom: 4 }}>{t['task id'] || '—'}</div>
                    <div style={{ lineHeight: 1.4, marginBottom: 8 }}>{t.status}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.7 }}>
                      <span style={{ fontSize: 10, fontWeight: 'bold' }}>{t.project}</span>
                      <span style={{ fontSize: 10, color: t.priority === 'P0' ? '#ff7b72' : '#79c0ff' }}>{t.priority}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
