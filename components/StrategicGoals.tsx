const goals = [
  { title: 'Maintain A1C < 6.0', q: 'Q1-Q4', status: 'In Progress' },
  { title: 'Launch MangoSol MVP', q: 'Q1', status: 'Critical' },
  { title: '10,000 Active Users', q: 'Q4', status: 'Strategic' },
  { title: 'Daily Mridangam/Vedam', q: 'Daily', status: 'Habit' }
];

export default function StrategicGoals() {
  return (
    <div className="card">
      <div className="h2">Strategic Goals 2026</div>
      <div className="list">
        {goals.map((g) => (
          <div key={g.title} className="card" style={{ padding: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div>{g.title}</div>
              <div className="small">{g.q}</div>
            </div>
            <div className="badge">{g.status}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 12 }}>
        <a href="/goals" className="small" style={{ textDecoration: 'underline' }}>View Full Roadmap →</a>
      </div>
    </div>
  );
}
