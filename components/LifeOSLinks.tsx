const links = [
  { name: 'Annual House Maintenance', href: 'https://raw.githubusercontent.com/premsreeramassistant-dotcom/SreeramLifeOS-Data/master/data/annual_maintenance.md' },
  { name: 'Financial Planning & Tax Schedule', href: 'https://raw.githubusercontent.com/premsreeramassistant-dotcom/SreeramLifeOS-Data/master/data/financial_planning.md' },
  { name: 'Daily Health & Meditation Plan', href: 'https://raw.githubusercontent.com/premsreeramassistant-dotcom/SreeramLifeOS-Data/master/data/health_plan.md' },
  { name: 'MangoSol Work Schedule', href: 'https://raw.githubusercontent.com/premsreeramassistant-dotcom/SreeramLifeOS-Data/master/data/mangosol_work.md' },
  { name: 'Learning Schedule', href: 'https://raw.githubusercontent.com/premsreeramassistant-dotcom/SreeramLifeOS-Data/master/data/learning_schedule.md' },
];

export default function LifeOSLinks() {
  return (
    <div className="card">
      <div className="h2">Plans & Schedules</div>
      <div className="list">
        {links.map((l) => (
          <a key={l.name} href={l.href} target="_blank" rel="noreferrer" className="card" style={{ padding: 10 }}>
            {l.name}
          </a>
        ))}
      </div>
    </div>
  );
}
