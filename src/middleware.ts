import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/', '/profile'],
};

export async function middleware(request: NextRequest) {
  const url = request.nextUrl;

  
  if (url.pathname === '/') {
        return NextResponse.redirect(new URL('/v2', request.url));
  }
  return NextResponse.next();
}