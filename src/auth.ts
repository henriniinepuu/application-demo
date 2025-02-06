import NextAuth from "next-auth"
import NeonAdapter from "@auth/pg-adapter"
import GitHub from "next-auth/providers/github"
import { Pool } from "@neondatabase/serverless"
 
// *DO NOT* create a `Pool` here, outside the request handler.
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: '/auth',
  },
  callbacks: {
    authorized() {
      console.log("authorized")
      return true
    },
    async session({ session, user }) {
      if (session?.user) {
        session.user.id = user.id
      }
      console.log("session", session)
      return session
    }
  },

  providers: [GitHub],
  adapter: NeonAdapter(new Pool({ connectionString: process.env.DATABASE_URL }))
})