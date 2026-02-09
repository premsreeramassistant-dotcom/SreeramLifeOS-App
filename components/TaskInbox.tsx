'use client';
import { useState, useEffect } from 'react';

export default function TaskInbox() {
  const [inbox, setInbox] = useState<{ tasks: any[] }>({ tasks: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Note: In a real app, this would call an API route we create later.
    // For now, it represents the pending tasks I extract from our chats.
    const dummyTasks = [
      { id: 1, text: 'Schedule dentist appointment', pillar: 'Health - Body' },
      { id: 2, text: 'Review influencer outreach', pillar: 'CEO MangoSol' }
    ];
    setInbox({ tasks: dummyTasks });
    setLoading(false);
  }, []);

  return (
    <div className="card">
      <div className="h2">Spoken Task Inbox</div>
      <div className="small" style={{ marginBottom: 12 }}>New tasks captured from our conversation</div>
      <div className="list">
        {inbox.tasks.length === 0 ? (
          <div className="small">No pending tasks to route.</div>
        ) : (
          inbox.tasks.map((t) => (
            <div key={t.id} className="card" style={{ padding: 12, borderLeft: '4px solid #4f9cf7' }}>
              <div>{t.text}</div>
              <div className="small" style={{ color: '#4f9cf7', marginTop: 4 }}>Proposed: {t.pillar}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
