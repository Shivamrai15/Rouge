"use server";

import { db } from "@/lib/db";

export const getVerificationTokenByEmail = async ( email: string ) => {
    try {
        
        const token = await db.verificationToken.findFirst({
            where : {
                email
            }
        });

        return token;

    } catch (error) {
        return null;
    }
}

export const getVerificationTokenByToken = async ( token: string ) => {
    try {
        
        const verificationToken = await db.verificationToken.findUnique({
            where : {
                token
            }
        });

        return verificationToken;

    } catch (error) {
        return null
    }
}

export const getForgetPasswordTokenByEmail = async( email: string ) => {
    try {
        
        const verificationToken = await db.resetPasswordToken.findFirst({
            where : {
                email
            }
        });

        return verificationToken;

    } catch (error) {
        return null;   
    }
}


export const getForgetPasswordTokenByToken = async( token: string ) => {
    try {
        
        const verificationToken = await db.resetPasswordToken.findUnique({
            where : {
                token
            }
        });

        return verificationToken;

    } catch (error) {
        return null;   
    }
}