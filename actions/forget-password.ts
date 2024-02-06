"use server";

import * as z from "zod";
import { db } from "@/lib/db";
import { ForgetPasswordSchema } from "@/schemas/forgetpassword.schema";
import { generateForgetPasswordToken } from "@/lib/tokens";
import { sendPasswordResetEmail } from "@/lib/mail";

export const forgetPassword = async ( data : z.infer<typeof ForgetPasswordSchema> ) => {
    try {
        
        const validatedData = ForgetPasswordSchema.safeParse(data);
        if (!validatedData.success){
            return {
                error : "Invalid credentials"
            }
        }
        
        const { email } = validatedData.data;

        const user = await db.user.findUnique({
            where : {
                email
            }
        });

        if (!user || !user.password) {
            return {
                error : "Account does not exist"
            }
        }

        const resetToken = await generateForgetPasswordToken(email);

        if (!resetToken) {
            return {
                error : "Internal server error"
            }
        }

        await sendPasswordResetEmail( user.email, resetToken.token, user?.name || "User" );

        return {
            success : "Verification email has been sent"
        }

    } catch (error) {
        return {
            error : "Internal server error"
        }
    }
}