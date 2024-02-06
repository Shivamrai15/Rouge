"use server";

import { db } from "./db";
import { getForgetPasswordTokenByEmail, getVerificationTokenByEmail } from "@/data/token";
import { nanoid } from "nanoid";


export const generateVerificationToken  = async( email: string ) => {
    try {
        
        const existingToken = await getVerificationTokenByEmail(email);
        if (existingToken) {
            await db.verificationToken.delete({
                where  : {
                    id : existingToken.id
                }
            });
        }

        const token = nanoid(30);
        const expires = new Date(new Date().getTime() + 10*60*1000);

        const verificationToken = await db.verificationToken.create({
            data : {
                email,
                expires,
                token
            }
        });

        return verificationToken;

    } catch (error) {
        return null;
    }
}

export const generateForgetPasswordToken = async( email: string ) => {
    try {
        
        const existingToken = await getForgetPasswordTokenByEmail(email);
        if (existingToken) {
            await db.resetPasswordToken.delete({
                where  : {
                    id : existingToken.id
                }
            });
        }

        const token = nanoid(30);
        const expires = new Date(new Date().getTime() + 10*60*1000);

        const verificationToken = await db.resetPasswordToken.create({
            data : {
                email,
                expires,
                token
            }
        });

        return verificationToken;

    } catch (error) {
        return null;
    }
}