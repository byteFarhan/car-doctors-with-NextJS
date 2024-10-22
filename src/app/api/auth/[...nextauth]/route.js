import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

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
        const passwordMatched = bcrypt.compareSync(password, user.password);
        if (!user || !passwordMatched) {
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
