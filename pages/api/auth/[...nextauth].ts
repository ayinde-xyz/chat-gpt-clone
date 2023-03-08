import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  secret: process.env.NEXT_AUTH_SECRET!,
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID2!,
      clientSecret: process.env.GOOGLE_SECRET_KEY2!,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)