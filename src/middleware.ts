export { auth as middleware } from "@/auth"



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