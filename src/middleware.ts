import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the URL matches the pattern /request/{id}/edit
  const editUrlPattern = /^\/request\/(.+)\/edit$/;
  const match = request.nextUrl.pathname.match(editUrlPattern);

  if (match) {
    const id = match[1]; // Extract the ID from the URL
    return NextResponse.redirect(new URL(`/request/${id}/edit-fixed`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Matcher for /request/{id}/edit paths
  matcher: '/request/:id/edit',
};
