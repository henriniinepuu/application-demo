import { auth } from "@/auth"

// Remove the export of auth as middleware since we're using a custom implementation
// export { auth as middleware } from "@/auth"

export const middleware = auth

export const config = {
  matcher: ["/((?!auth|api|_next/static|_next/image|favicon.ico|logo.svg|auth).*)"],
} 