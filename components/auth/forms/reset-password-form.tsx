"use client";

import * as z from "zod";
import { toast } from "sonner";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormItem,
    FormLabel,
    FormField,
    FormMessage,
    FormControl
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { FormWrapper } from "@/components/auth/utils/form-wrapper";
import { ResetPasswordSchema } from "@/schemas/resetpassword.schema";
import { resetPassword } from "@/actions/reset-password";

export const ResetPasswordForm = () => {

    const [loading, setLoading] = useState(false);

    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const form = useForm<z.infer<typeof ResetPasswordSchema>>({
        resolver : zodResolver(ResetPasswordSchema),
        defaultValues : {
            password : ""
        }
    });

    const handleResetPassword = async( data : z.infer<typeof ResetPasswordSchema> ) => {
        try {
            
            setLoading(true);
            if (!token){
                toast.error("Invalid verification link");
                return;
            }

            const response = await resetPassword(data.password, token);
            if (response.error){
                toast.error(response.error);
            }
            if (response.success){
                toast.success(response.success);
            }

        } catch (error) {
            toast.error("Something went wrong");
            console.log(error);
            
        } finally {
            setLoading(false);
        }
    }

    return (
        <FormWrapper
            headerLabel="Reset Your Password"
            backButtonHref="/login"
            backButtonLabel="Back to login"
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleResetPassword)}
                    className="space-y-6"
                >
                    <FormField
                        control={form.control}
                        name="password"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel className="font-semibold text-zinc-600" >New Password</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        disabled = {loading}
                                        placeholder="******"
                                        type="password"
                                        className="outline-none focus-visible:ring-0 focus-visible:ring-offset-0 font-medium text-zinc-600"
                                    />
                                </FormControl>
                                <FormMessage className="w-full px-2 py-2 bg-rose-200/70 rounded-md"/>
                            </FormItem>
                        )}
                    />
                    <Button
                        className="w-full font-semibold"
                        disabled = {loading}
                        type="submit"
                    >
                        Reset Password
                    </Button>
                </form>
            </Form>
        </FormWrapper>
    )
}
