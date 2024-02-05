import * as z from "zod";

export const RegistrationSchema = z.object({
    name : z.string().min(1, {
        message : "Name is required"
    }),
    email : z.string().email({
        message : "Email is required"
    }),
    password : z.string().min(6, {
        message : "Minimum 6 characters are required"
    })
});