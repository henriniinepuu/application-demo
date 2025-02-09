import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import NeonAdapter from "@auth/pg-adapter"
import { Pool } from "@neondatabase/serverless"

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/auth",
  },
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth
    },
  },
  adapter: NeonAdapter(new Pool({ connectionString: process.env.DATABASE_URL })),
  providers: [GitHub, Google],
})