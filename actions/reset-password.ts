"use server";

import { getForgetPasswordTokenByToken } from "@/data/token";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export const resetPassword = async( password: string, token: string ) => {
    try {

        const existingToken = await getForgetPasswordTokenByToken(token);

        if (!existingToken) {
            return {
                error : "Invalid verification link"
            }
        }

        const isExpired = new Date() > new Date(existingToken.expires);

        if (isExpired) {
            return {
                error : "Verification link has been expired"
            }
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await db.user.update({
            where : {
                email : existingToken.email
            },
            data : {
                password : hashedPassword
            }
        });

        await db.resetPasswordToken.delete({
            where :{
                id :existingToken.id
            }
        });

        return {
            success : "Password has been reset successfully"
        }
        
    } catch (error) {
        console.log(error);
        return {
            error : "Internal server error"
        }
    }
}