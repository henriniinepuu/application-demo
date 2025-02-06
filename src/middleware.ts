import { auth } from "@/auth"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const session = await auth()
  
  // Check if the user is trying to access the auth page while logged in
  if (session && request.nextUrl.pathname === "/auth") {
    console.log("redirecting to home")
    return NextResponse.redirect(new URL("/", request.url))
  }

  // Check if the user is not authenticated and trying to access protected routes
  if (!session && request.nextUrl.pathname !== "/auth") {
    console.log("redirecting to auth")
    return NextResponse.redirect(new URL("/auth", request.url))
  }


  return NextResponse.next()
}

// Configure which routes to protect
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - logo.svg (your logo file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|auth|logo.svg).*)',
    '/auth'
  ]
}