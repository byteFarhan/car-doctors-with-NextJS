import NextAuth from "next-auth";

import { connectDB } from "@/lib/connectDB";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import bcrypt from "bcrypt";

export const authOptions = {
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
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      const provider = account.provider;
      if (
        provider === "google" ||
        provider === "facebook" ||
        provider === "linkedin" ||
        provider === "github"
      ) {
        try {
          const db = await connectDB();
          const isUserExist = await db
            .collection("users")
            .findOne({ email: user?.email });
          //   console.log("isUserExist", isUserExist);
          if (!isUserExist) {
            const resp = await db.collection("users").insertOne({
              ...user,
              role: "user",
            });
            // console.log(resp);
            return user;
          } else {
            return user;
          }
        } catch (error) {
          console.error("Error saving user to MongoDB", error);
          return false; // Reject login on error
        }
      }
      return user;
    },
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        // console.log("user:--", user);
        token.role = user?.role || "user";
      }
      return token;
    },
    async session({ session, token }) {
      // console.log("token:-", token);
      session.user.role = token?.role || "user";
      return session;
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
