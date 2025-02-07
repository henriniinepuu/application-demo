import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [ GitHub, Google ],
  pages: {
    signIn: "/auth",
  },
  callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth
    },
  },
})



// import NextAuth from "next-auth"
// import NeonAdapter from "@auth/pg-adapter"
// import GitHub from "next-auth/providers/github"
// import { Pool } from "@neondatabase/serverless"

 
// // *DO NOT* create a `Pool` here, outside the request handler.
 
// export const { handlers, auth, signIn, signOut } = NextAuth({
//   pages: {
//     signIn: '/auth',
//   },
//   callbacks: {
//     authorized: async ({ auth }) => {
//       // Logged in users are authenticated, otherwise redirect to login page
//       return !!auth
//     }
//   },
//   providers: [GitHub],
//   adapter: NeonAdapter(new Pool({ connectionString: process.env.DATABASE_URL })),
//   debug: true
// })