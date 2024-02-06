import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import authConfig from "@/auth.config";


export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    pages: {
        signIn: "/login",
    },

    callbacks :{
        // @ts-ignore
        async session({session, token}) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }
            return session;
        },
        async jwt({token}){
            return token;
        }
    },

    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig,
});
