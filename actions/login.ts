"use server";

import * as z from "zod";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { LoginSchema } from "@/schemas/login.schema";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const login = async ( data : z.infer<typeof LoginSchema> ) => {
    try {
        
        const validatedData = LoginSchema.safeParse(data);
        if (!validatedData.success) {
            return {
                error : "Invalid credentials!"
            }
        }

        const { email, password } = validatedData.data;

        const user = await db.user.findUnique({
            where : {
                email
            }
        });

        if (!user || !user.password) {
            return {
                error : "Account does not exist!"
            }
        }

        const passwordMatched = await bcrypt.compare(password, user.password);
        
        if (!passwordMatched) {
            return {
                error : "Invalid password!"
            }
        }

        if (!user.emailVerified) {
            const verificationToken = await generateVerificationToken(user.email);
            if (!verificationToken) {
                return {
                    error : "Internal server error"
                }
            }

            await sendVerificationEmail( user.email, verificationToken.token, user?.name || "User" );
            return {
                info : "Verification email has been send"
            }
        }

        const value = await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
        });

        console.log(value);

        return {
            success : "Email verified"
        }

    } catch (error) {
        
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials!" }
                default:
                    return { error: "Internal server error" }
            }
        }
      
        throw error;

    }
}