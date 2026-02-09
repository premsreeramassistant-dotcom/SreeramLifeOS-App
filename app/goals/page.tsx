import LifeOSLinks from '../../components/LifeOSLinks';

export default function GoalsPage() {
  return (
    <div className="grid" style={{ gap: 24 }}>
      <h1 className="h1">Strategic Roadmap 2026</h1>
      
      <div className="card">
        <div className="h2">Annual Strategy</div>
        <p className="small">Exhaustive view of yearly and quarterly objectives across all 7 pillars.</p>
        <div className="list" style={{ marginTop: 16 }}>
          <div className="card"><strong>Q1: Build Foundation</strong> - MVP Launch, Health Baseline, Learning Routine.</div>
          <div className="card"><strong>Q2: Growth & Scale</strong> - 3,000 Users, Portfolio Rebalance, Meditation Deep-dive.</div>
          <div className="card"><strong>Q3: Refinement</strong> - Performance Tuning, Family Vacations, Project Delivery.</div>
          <div className="card"><strong>Q4: Achievement</strong> - 10,000 Users, Mastery in Learning, Sustained Health.</div>
        </div>
      </div>

      <LifeOSLinks />
    </div>
  );
}
