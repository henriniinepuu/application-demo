export { auth as middleware } from "@/auth"


export const config = {
    
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|auth|logo.svg).*)"],
  }


// import { auth } from "@/auth"
// import { NextResponse } from "next/server"
// import type { NextRequest } from "next/server"

// export async function middleware(request: NextRequest) {
//   const session = await auth()
  
//   // If the user is not authenticated and trying to access a protected route
//   if (!session) {
//     // Create a new URL for the auth page
//     const authUrl = new URL("/auth", request.url)
//     return NextResponse.redirect(authUrl)
//   }
  
//   return NextResponse.next()
// }

// // Configure which routes to protect
// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * - logo.svg (your logo file)
//      */
//     '/((?!api|_next/static|_next/image|favicon.ico|auth|logo.svg).*)',
//     '/auth'
//   ]
// }