"use server";

import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/token";


export const tokenVerification = async (token : string) => {
    try {
        
        const verificationToken = await getVerificationTokenByToken(token);

        if (!verificationToken){
            return {
                error : "Invalid verification link"
            }
        }

        const hasExpired = new Date() > new Date(verificationToken.expires);
        if (hasExpired) {
            return {
                error : "Verification link has been expired"
            }
        }

        const existingUser = await getUserByEmail(verificationToken.email);
        if (!existingUser || !existingUser.password){
            return {
                error : "Account does not exists"
            }
        }

        await db.user.update({
            where : {
                id : existingUser.id
            },
            data  : {
                emailVerified : new Date()
            }
        });

        await db.verificationToken.delete({
            where : {
                id : verificationToken.id
            }
        });

        return {
            success : "Email verified successfully"
        }

    } catch (error) {
        return {
            error : "Internal server error"
        }
    }
}