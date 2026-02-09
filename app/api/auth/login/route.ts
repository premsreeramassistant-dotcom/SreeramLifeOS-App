import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  const { username, password } = await request.json();
  
  // Note: Using the absolute path to your secure file on the VPS
  const credsPath = '/home/sreeram/.openclaw/workspace/secure/lifeos_users.json';
  
  try {
    const data = fs.readFileSync(credsPath, 'utf8');
    const { users } = JSON.parse(data);
    
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
      const response = NextResponse.json({ success: true });
      // Set a simple auth cookie
      response.cookies.set('lifeos_session', 'true', { httpOnly: true, secure: true, path: '/' });
      return response;
    }
  } catch (err) {
    console.error('Auth error:', err);
  }

  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}
