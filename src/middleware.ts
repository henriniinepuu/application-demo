import { auth } from "@/auth"

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname !== "/auth") {
    const newUrl = new URL("/auth", req.url)
    return Response.redirect(newUrl)
  }
})

export const config = {
  matcher: ["/((?!auth|api|_next/static|_next/image|favicon.ico|logo.svg|auth).*)"],
} 