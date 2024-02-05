"use server";

import * as z from "zod";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { LoginSchema } from "@/schemas/login.schema";

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

        // TODO Email Verification

        return {
            success : "Email verified"
        }

    } catch (error) {
        
        console.log(error);
        return {
            error : "Internal server error"
        }

    }
}