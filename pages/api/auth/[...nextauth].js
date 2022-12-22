import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import clientPromise from "../../../lib/Mongodb/Adapter";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import Users from "../../../Models/UserSchema";
import { compare } from "bcryptjs";

import connectDB from "../../../db/connect";

export const authOptions = {
  // Configure one or more authentication
  adapter: MongoDBAdapter(clientPromise),
  // secret: "secret",
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        console.log(credentials, "credentials");
        connectDB().catch((error) => {
          error: "Connection Failed...!";
        });

        // check user existance
        const result = await Users.findOne({ email: credentials.email });
        if (!result) {
          throw new Error("No user Found with Email Please Sign Up...!");
        }
        console.log(result, "result");
        // compare()
        const checkPassword = await compare(
          credentials.password,
          result.password
        );
        console.log(checkPassword, "check_password");

        // incorrect password`
        if (!checkPassword || result.email !== credentials.email) {
          console.log("not working");
          throw new Error("Username or Password doesn't match");
        }

        console.log("working collecting user model", result);
        return {
          ...result,
          email: result.email,
          image: result.image,
          name: result.username,
        };
      },
    }),
  ],
  // callbacks: {
  //   async jwt({ token, account }) {
  //     // Persist the OAuth access_token to the token right after signin
  //     if (account) {
  //       token.accessToken = account.access_token;
  //       console.log(account, "account");
  //     }
  //     return token;
  //   },
  //   async session({ session, token, user }) {
  //     // Send properties to the client, like an access_token from a provider.
  //     session.accessToken = token.accessToken;
  //     console.log(sesion, "session");
  //     return session;
  //   },
  // },
  session: {
    strategy: "jwt",
  },
};
export default NextAuth(authOptions);
