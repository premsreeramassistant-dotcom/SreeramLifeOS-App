const pillars = [
  { name: 'Health - Mind', progress: 0.6, note: 'Meditation / Woods' },
  { name: 'Health - Body', progress: 0.4, note: 'Yoga / Sleep / Diet' },
  { name: 'CEO MangoSol', progress: 0.7, note: 'Product & Growth' },
  { name: 'Microsoft PM', progress: 0.5, note: 'Team / Delivery' },
  { name: 'Finance', progress: 0.3, note: 'Bills / Taxes' },
  { name: 'Family Time', progress: 0.8, note: 'Wife / Son / Parents' },
  { name: 'Learning', progress: 0.2, note: 'Mridangam / Vedam / Prabhandham' }
];

export default function PillarDashboard() {
  return (
    <div className="card">
      <div className="h2">7-Pillar Balance</div>
      <div className="list">
        {pillars.map((p) => (
          <div key={p.name} className="pillar">
            <div style={{ width: 160 }}>
              <div>{p.name}</div>
              <div className="small">{p.note}</div>
            </div>
            <div className="bar"><span style={{ width: `${p.progress * 100}%` }} /></div>
            <div className="small">{Math.round(p.progress * 100)}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}
