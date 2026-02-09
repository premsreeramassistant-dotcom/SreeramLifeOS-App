const pillars = [
  { name: 'Health - Mind', progress: 0.6 },
  { name: 'Health - Body', progress: 0.4 },
  { name: 'CEO MangoSol', progress: 0.7 },
  { name: 'Microsoft PM', progress: 0.5 },
  { name: 'Finance', progress: 0.3 },
  { name: 'Family Time', progress: 0.8 },
  { name: 'Learning', progress: 0.2 }
];

export default function PillarDashboard() {
  return (
    <div className="card">
      <div className="h2">7-Pillar Balance</div>
      <div className="list">
        {pillars.map((p) => (
          <div key={p.name} className="pillar">
            <div style={{ width: 140 }}>{p.name}</div>
            <div className="bar"><span style={{ width: `${p.progress * 100}%` }} /></div>
            <div className="small">{Math.round(p.progress * 100)}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}
