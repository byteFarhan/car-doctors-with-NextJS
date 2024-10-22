import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

export const handler = NextAuth({
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },

  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) return null;
        const db = await connectDB();
        const user = await db.collection("users").findOne({ email });
        if (!user || user.password !== password) {
          return null;
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {},
});

export { handler as GET, handler as POST };
