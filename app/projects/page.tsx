import { fetchMarkdownFile, parseMarkdownTable } from '../../lib/data';

export default async function ProjectsPage() {
  const content = await fetchMarkdownFile('kanban.md');
  const tasks = content ? parseMarkdownTable(content) : [];

  const columns = ['BACKLOG', 'TO DO (HIGH)', 'TO DO (MED)', 'TO DO (LOW)', 'IN PROGRESS', 'DONE'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, height: 'calc(100vh - 150px)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className="h1">Project Board: MangoSol</h1>
        <div className="badge">LIVE FROM REPO</div>
      </div>

      <div style={{ 
        display: 'flex', 
        gap: 16, 
        overflowX: 'auto', 
        paddingBottom: 16,
        flex: 1
      }}>
        {columns.map(col => {
          const colTasks = tasks.filter(t => t.column.includes(col));
          return (
            <div key={col} className="card" style={{ 
              minWidth: 300, 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 12,
              background: '#0d1117',
              border: '1px solid #1f2a3a'
            }}>
              <div className="h2" style={{ 
                fontSize: 14, 
                paddingBottom: 8, 
                borderBottom: '1px solid #1f2a3a',
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                {col}
                <span className="badge" style={{ fontSize: 10 }}>{colTasks.length}</span>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, overflowY: 'auto' }}>
                {colTasks.map((t, i) => (
                  <div key={i} className="card" style={{ 
                    padding: 12, 
                    fontSize: 13, 
                    background: '#161b22',
                    border: '1px solid #30363d'
                  }}>
                    <div style={{ fontWeight: 'bold', marginBottom: 4 }}>{t['task id']}: {t.project}</div>
                    <div style={{ opacity: 0.8, lineHeight: 1.4 }}>{t.status}</div>
                    <div style={{ marginTop: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="small" style={{ 
                        color: t.priority === 'P0' ? '#ff7b72' : '#79c0ff' 
                      }}>{t.priority}</span>
                      <button className="small" style={{ 
                        background: 'transparent', 
                        border: '1px solid #30363d', 
                        borderRadius: 4,
                        padding: '2px 6px',
                        cursor: 'pointer'
                      }}>Move</button>
                    </div>
                  </div>
                ))}
                {colTasks.length === 0 && (
                  <div className="small" style={{ textAlign: 'center', opacity: 0.5, marginTop: 20 }}>
                    No tasks in this column.
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
