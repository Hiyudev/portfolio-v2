import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const name = request.nextUrl.pathname.split("/")[2];
  return NextResponse.redirect(new URL(`/api/social/${name}`, request.url))
}

export const config = {
  matcher: '/social/:path*',
}
