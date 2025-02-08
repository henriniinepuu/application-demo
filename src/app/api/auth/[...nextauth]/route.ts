import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID ?? "",
      clientSecret: process.env.AUTH_GITHUB_SECRET ?? "",
    }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID ?? "",
      clientSecret: process.env.AUTH_GOOGLE_SECRET ?? "",
    }),
  ],
  secret: process.env.AUTH_SECRET,
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }