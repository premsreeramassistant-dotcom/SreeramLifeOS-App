import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    
    // Try local repo path first (for Windows/local dev), then fall back to VPS path
    const localPath = path.join(process.cwd(), 'secure', 'lifeos_users.json');
    const vpsPath = '/home/sreeram/.openclaw/workspace/secure/lifeos_users.json';
    
    let credsPath = localPath;
    if (!fs.existsSync(localPath) && fs.existsSync(vpsPath)) {
      credsPath = vpsPath;
    }

    console.log('Checking credentials at:', credsPath);
    
    if (!fs.existsSync(credsPath)) {
      console.error('Credential file NOT FOUND at:', credsPath);
      return NextResponse.json({ error: 'Credential system offline' }, { status: 500 });
    }

    const data = fs.readFileSync(credsPath, 'utf8');
    const { users } = JSON.parse(data);
    
    const user = users.find((u: any) => u.username === username && u.password === password);
    
    if (user) {
      console.log('Login successful for:', username);
      const response = NextResponse.json({ success: true });
      
      // IMPORTANT: Setting secure: false for now because we are on http://
      // We will re-enable this once we add SSL/HTTPS to negotiai.com
      response.cookies.set('lifeos_session', 'true', { 
        httpOnly: true, 
        secure: false, 
        path: '/',
        maxAge: 60 * 60 * 24 * 7 // 1 week
      });
      return response;
    } else {
      console.warn('Invalid login attempt for:', username);
    }
  } catch (err) {
    console.error('Auth API Error:', err);
  }

  return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 });
}
