"use server";

import * as z from "zod";   
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { RegistrationSchema } from "@/schemas/registration.schema";

export const register = async ( data : z.infer<typeof RegistrationSchema> )  => {
    try {

        const validatedData = RegistrationSchema.safeParse(data);
        if (!validatedData.success) {
            return {
                error : "Invalid credentials"
            }
        }

        const { name, email, password } = validatedData.data;

        const existingUser = await db.user.findUnique({
            where : {
                email
            }
        });

        if (existingUser) return {
            error : "Account already exist"
        };

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await db.user.create({
            data : {
                email,
                password : hashedPassword,
                name
            }
        });

        // TODO email verification

        return {
            success : "Verification email has been sent"
        }


    } catch (error) {

        console.log(error);
        return {
            error : "Internal server error"
        }
    }
}