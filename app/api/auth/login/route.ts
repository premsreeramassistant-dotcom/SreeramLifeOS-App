import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  const { username, password } = await request.json();
  
  // Try local repo path first (for Windows/local dev), then fall back to VPS path
  const localPath = path.join(process.cwd(), 'secure', 'lifeos_users.json');
  const vpsPath = '/home/sreeram/.openclaw/workspace/secure/lifeos_users.json';
  
  let credsPath = localPath;
  if (!fs.existsSync(localPath) && fs.existsSync(vpsPath)) {
    credsPath = vpsPath;
  }

  console.log('Checking credentials at:', credsPath);
  
  try {
    if (!fs.existsSync(credsPath)) {
      return NextResponse.json({ error: 'Credential file not found' }, { status: 500 });
    }

    const data = fs.readFileSync(credsPath, 'utf8');
    const { users } = JSON.parse(data);
    
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
      const response = NextResponse.json({ success: true });
      // Set a simple auth cookie
      response.cookies.set('lifeos_session', 'true', { 
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production', 
        path: '/' 
      });
      return response;
    }
  } catch (err) {
    console.error('Auth error:', err);
  }

  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}
