import { fetchJSONData } from '../lib/data';

export default async function WeeklyPriorities() {
  const data = await fetchJSONData('weekly_priorities.json');
  const priorities = data?.priorities || [];

  return (
    <div className="card">
      <div className="h2">This Week’s Priorities</div>
      <div className="list">
        {priorities.length === 0 ? (
          <p className="small">No priorities set for this week.</p>
        ) : (
          priorities.map((p: any) => (
            <div key={p.title} className="card" style={{ padding: 10 }}>
              <div>{p.title}</div>
              <div className="small" style={{ color: '#4f9cf7' }}>{p.pillar}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
