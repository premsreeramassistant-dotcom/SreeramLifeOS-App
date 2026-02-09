const priorities = [
  { title: 'Sleep by 9:30 PM', pillar: 'Health - Body' },
  { title: 'Review MangoSol Kanban', pillar: 'CEO MangoSol' },
  { title: 'Family dinner', pillar: 'Family Time' }
];

export default function TodayPriorities() {
  return (
    <div className="card">
      <div className="h2">Today’s Priorities</div>
      <div className="list">
        {priorities.map((p) => (
          <div key={p.title} className="card" style={{ padding: 10 }}>
            <div>{p.title}</div>
            <div className="small">{p.pillar}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
