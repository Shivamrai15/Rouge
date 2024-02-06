"use client";

import * as z from "zod";
import { toast } from "sonner";
import { useState } from "react";
import { login } from "@/actions/login";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormWrapper } from "@/components/auth/utils/form-wrapper";
import { LoginSchema } from "@/schemas/login.schema";
import Link from "next/link";


export const LoginForm = () => {

    const [ loading, setLoading ] = useState(false);

    const form  = useForm<z.infer<typeof LoginSchema>>({
        resolver : zodResolver(LoginSchema),
        defaultValues : {
            email : "",
            password : ""
        }
    });

    const handleLogin = async( data : z.infer<typeof LoginSchema>) => {
        try {
            
            setLoading(true);
            const response = await login(data);
            
            if (response.error) {
                toast.error(response.error);
            }
            if (response.info) {
                toast.info(response.info);
            }
        } catch (error) {
            
        } finally {
            setLoading(false);
        }
    }

    return (
        <FormWrapper
            headerLabel="Welcome back"
            showSocial
            backButtonHref="/registration"
            backButtonLabel="Don't have an account"
        >
            <Form {...form}>
                <form
                    className="space-y-6"
                    onSubmit={form.handleSubmit(handleLogin)}
                >
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
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
                        <FormField
                            control={form.control}
                            name="password"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="font-semibold text-zinc-600" >Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled = {loading}
                                            placeholder="******"
                                            type="password"
                                            className="outline-none focus-visible:ring-0 focus-visible:ring-offset-0 font-extrabold text-zinc-600"
                                        />
                                    </FormControl>
                                    <FormMessage className="w-full px-2 py-2 bg-rose-200/70 rounded-md"/>
                                    <Link
                                        href = "/forget-password"
                                        className="text-muted-foreground font-semibold text-sm mt-4"
                                    >
                                        Forget password?
                                    </Link>
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button
                        className="w-full font-semibold"
                        disabled = {loading}
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
            </Form>
        </FormWrapper>
    )
}
