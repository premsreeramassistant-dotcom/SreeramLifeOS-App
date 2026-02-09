import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/request';

export function middleware(req: any) {
  const session = req.cookies.get('lifeos_session');
  const { pathname } = req.nextUrl;

  // 1. Allow API and Login page
  if (pathname.startsWith('/api/auth') || pathname.startsWith('/login')) {
    return NextResponse.next();
  }

  // 2. Redirect to login if no session
  if (!session) {
    console.log('No session found, redirecting to /login');
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes) - we handle auth inside api routes if needed
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
