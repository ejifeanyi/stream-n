import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
	],

	session: {
		strategy: "jwt",
	},
	callbacks: {
		async session({ session, token }) {
			if (token && typeof token.id === "string") {
				session.user.id = token.id;
			}
			return session;
		},
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id;
			}
			return token;
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
