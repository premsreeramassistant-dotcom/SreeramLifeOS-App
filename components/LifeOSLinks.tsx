import Link from 'next/link';

const links = [
  { name: 'Annual House Maintenance', path: 'annual_maintenance.md' },
  { name: 'Financial Planning & Tax Schedule', path: 'financial_planning.md' },
  { name: 'Daily Health & Meditation Plan', path: 'health_plan.md' },
  { name: 'MangoSol Work Schedule', path: 'mangosol_work.md' },
  { name: 'Learning Schedule', path: 'learning_schedule.md' },
];

export default function LifeOSLinks() {
  return (
    <div className="card">
      <div className="h2">Plans & Schedules</div>
      <div className="list">
        {links.map((l) => (
          <Link key={l.name} href={`/view/${l.path}`} className="card" style={{ padding: 10 }}>
            {l.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
