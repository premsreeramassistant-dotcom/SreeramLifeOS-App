'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (res.ok) {
      router.push('/');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <form onSubmit={handleSubmit} className="card" style={{ width: 300, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h1 className="h1">SreeramLifeOS</h1>
        {error && <div style={{ color: '#ff7b72', fontSize: 12 }}>{error}</div>}
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} style={{ padding: 8, borderRadius: 4, border: '1px solid #1f2a3a', background: '#0b0f14', color: '#fff' }} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} style={{ padding: 8, borderRadius: 4, border: '1px solid #1f2a3a', background: '#0b0f14', color: '#fff' }} />
        <button type="submit" style={{ padding: 8, borderRadius: 4, background: '#4f9cf7', color: '#fff', border: 'none', cursor: 'pointer' }}>Login</button>
      </form>
    </div>
  );
}
