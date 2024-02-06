import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

import { LoginSchema } from "@//schemas/login.schema";
import { getUserByEmail } from "@/data/user";

export default {
    providers : [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        Credentials({
            async authorize(credentials){
                const validatedFields = LoginSchema.safeParse(credentials);

                if (validatedFields.success){
                    const {email, password} = validatedFields.data;
                    const user = await getUserByEmail(email);
                    if (!user || !user.password) return null;

                    const passwordMatch = await bcrypt.compare(password, user.password);

                    if (passwordMatch) return user;
                    
                }
                return null;
            }
        })
    ]
} satisfies NextAuthConfig;