import PillarDashboard from '../components/PillarDashboard';
import TodayPriorities from '../components/TodayPriorities';
import WeeklyPriorities from '../components/WeeklyPriorities';
import LifeOSLinks from '../components/LifeOSLinks';
import StrategicGoals from '../components/StrategicGoals';

export default async function HomePage() {
  return (
    <div className="grid" style={{ gap: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1 className="h1">SreeramLifeOS</h1>
          <div className="small">Balanced Life. High Output. Clear Mind.</div>
        </div>
        <div className="badge" style={{ background: '#238636', color: '#fff' }}>SYSTEM ONLINE</div>
      </div>

      <div className="grid grid-2">
        <PillarDashboard />
        <StrategicGoals />
      </div>

      <div className="grid grid-2">
        <TodayPriorities />
        <WeeklyPriorities />
      </div>

      <div className="grid grid-2">
        <LifeOSLinks />
        <div className="card">
          <div className="h2">Quick Focus</div>
          <p className="small">Currently focusing on P0 Health Goals & MangoSol MVP Launch Readiness.</p>
        </div>
      </div>
    </div>
  );
}
