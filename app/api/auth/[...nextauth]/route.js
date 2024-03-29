import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/lib/db"


///
const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      })
  ],
  callbacks: {
    async redirect({ user, baseUrl }) {
      if (user) {
        const baseUrl = "/dashboard"
        return baseUrl
      }
      return baseUrl
    },
  },
  secret: process.env.JWT_SECRET,
})

export { handler as GET, handler as POST }