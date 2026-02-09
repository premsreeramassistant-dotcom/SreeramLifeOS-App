const weekly = [
  { title: 'Review portfolio allocation', pillar: 'Finance' },
  { title: 'Plan MangoSol weekly roadmap', pillar: 'CEO MangoSol' },
  { title: 'Family weekend activity', pillar: 'Family Time' }
];

export default function WeeklyPriorities() {
  return (
    <div className="card">
      <div className="h2">This Week’s Priorities</div>
      <div className="list">
        {weekly.map((p) => (
          <div key={p.title} className="card" style={{ padding: 10 }}>
            <div>{p.title}</div>
            <div className="small">{p.pillar}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
