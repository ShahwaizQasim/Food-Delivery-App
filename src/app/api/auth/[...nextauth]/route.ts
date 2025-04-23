import { ConnectDB } from "@/lib/dbConnect";
import { UserModel } from "@/models/user.model";
import bcrypt from "bcryptjs";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

interface CustomUser {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  isVerified: boolean;
  profileBio: String;
  profilePic: String;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<CustomUser | null> {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and Password are required");
        }
        await ConnectDB();
          const user = await UserModel.findOne({ email: credentials?.email });
          if (!user) {
            throw new Error("User Not Found");
          }
          if (!user.isVerified) {
            throw new Error("Email Not Verified")
          }
          const isPasswordMatch = await bcrypt.compare(
            credentials?.password,
            user?.password
          );
          if (!isPasswordMatch) {
            throw new Error("Incorrect Password");
          }
          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            isVerified: user.isVerified,
            profilePic: user.profilePic || "",
            profileBio: user.profileBio || "",
          };
      },
    }),
    GoogleProvider({
      clientId: process.env.CLIENT_ID as string,
      clientSecret: process.env.CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({
      user,
      account,
      profile,
    }: {
      user: CustomUser;
      account: any;
      profile: any;
    }) {
      try {
        await ConnectDB();
        let dbUser = await UserModel.findOne({ email: user.email });
        if (!dbUser) {
          dbUser = await UserModel.create({
            name: user.name,
            email: user.email,
            profilePic: user.image,
            isAdmin: user.isAdmin,
            isVerified: true,
            provider: "google",
            googleId: account.providerAccoundId,
          });
          console.log("New Google user created:", user);
        }
        user.id = dbUser._id.toString();
        user.isAdmin = dbUser.isAdmin;
        return true;
      } catch (error) {
        console.log("error signin callback", error);
        return false;
      }
    },
    async jwt({ token, user }: { token: any; user: CustomUser }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.isAdmin = user.isAdmin;
        token.isVerified = user.isVerified;
        token.profilePic = user.profilePic;
        token.profileBio = user.profileBio;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.isAdmin = token.isAdmin;
        session.user.isVerified = token.isVerified;
        session.user.profilePic = token.profilePic;
        session.user.profileBio = token.profileBio;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "1234567",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
