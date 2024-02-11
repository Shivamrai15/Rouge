import { emailVerificationTemplet } from "@/mail-templets/email-verification-templet";
import { resetPasswordTemplet } from "@/mail-templets/reset-password-templet";
import nodemailer from "nodemailer";

const domain = process.env.NEXT_PUBLIC_DOMAIN;

const transporter = nodemailer.createTransport({
    service : "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

export const sendVerificationEmail = async(
    email : string,
    token : string,
    name : string
)=>{
    try {

        const confirmUri = `${domain}/token-verification?token=${token}`;

        const emailTemplet = emailVerificationTemplet(name, confirmUri)

        await transporter.sendMail({
            from : process.env.EMAIL,
            to : email,
            subject : "Confirm your email",
            html : emailTemplet
        });
        
    } catch (error) {
        console.log(error);
    }
}


export const sendPasswordResetEmail = async(
    email : string,
    token : string,
    name : string
) => {
    try {
        
        const confirmUri = `${domain}/reset-password?token=${token}`;
        const emailTemplet = resetPasswordTemplet(name, confirmUri);

        await transporter.sendMail({
            from : process.env.EMAIL,
            to : email,
            subject : "Forgot Password",
            html : emailTemplet
        });

    } catch (error) {
        console.log(error);
    }
}