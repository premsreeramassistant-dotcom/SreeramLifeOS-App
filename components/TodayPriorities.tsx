import { fetchJSONData } from '../lib/data';

export default async function TodayPriorities() {
  const data = await fetchJSONData('today_priorities.json');
  const priorities = data?.priorities || [];

  return (
    <div className="card">
      <div className="h2">Today’s Priorities</div>
      <div className="list">
        {priorities.length === 0 ? (
          <p className="small">No priorities set for today.</p>
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
