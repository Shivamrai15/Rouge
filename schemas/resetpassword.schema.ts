import * as z from "zod";

export const ResetPasswordSchema = z.object({
    password : z.string().min(6, {
        message : "Minimum 6 characters required"
    })
});