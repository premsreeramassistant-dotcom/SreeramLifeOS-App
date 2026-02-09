import PillarDashboard from '../components/PillarDashboard';
import TodayPriorities from '../components/TodayPriorities';

export default async function HomePage() {
  return (
    <div className="grid" style={{ gap: 24 }}>
      <div>
        <h1 className="h1">SreeramLifeOS</h1>
        <div className="small">Your single source of truth for health, work, family, and agent operations.</div>
      </div>
      <div className="grid grid-2">
        <PillarDashboard />
        <TodayPriorities />
      </div>
    </div>
  );
}
