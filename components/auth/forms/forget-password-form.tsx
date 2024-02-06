"use client";

import * as z from "zod";
import { toast } from "sonner";
import { useState } from "react";
import { useForm } from "react-hook-form";
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
import { ForgetPasswordSchema } from "@/schemas/forgetpassword.schema";
import { forgetPassword } from "@/actions/forget-password";



export const ForgetPasswordForm = () => {

    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof ForgetPasswordSchema>>({
        resolver : zodResolver(ForgetPasswordSchema),
        defaultValues : {
            email : ""
        }
    });

    const handleForgetPassword = async( data : z.infer<typeof ForgetPasswordSchema> ) => {
        try {
            
            setLoading(true);
            const response = await forgetPassword(data);
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
            headerLabel="Forget Password?"
            backButtonHref="/login"
            backButtonLabel="Back to login"
        >   
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleForgetPassword)}
                    className="space-y-6"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel className="font-semibold text-zinc-600" >Email</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        disabled = {loading}
                                        placeholder="example@email.com"
                                        type="email"
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
                        Send Verification Email
                    </Button>
                </form>
            </Form>
        </FormWrapper>
    )
}
