"use client";

import * as z from "zod";
import { useState } from "react";
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
import { FormWrapper } from "@/components/auth/utils/form-wrapper";

import { RegistrationSchema } from "@/schemas/registration.schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { register } from "@/actions/registration";
import { toast } from "sonner";

export const RegistrationForm = () => {

    const [ loading, setLoading ] = useState(false);

    const form  = useForm<z.infer<typeof RegistrationSchema>>({
        resolver : zodResolver(RegistrationSchema),
        defaultValues : {
            name : "",
            email : "",
            password : "",
        }
    });

    const handleRegistration = async( data : z.infer<typeof RegistrationSchema>) => {
        try {
            
            setLoading(true);
            const response = await register(data);
            if (response.error) {
                toast.error(response.error);
            } else {
                toast.success(response.success);
            }

        } catch (error) {
            toast.error("Something went wrong!");
        
        } finally {
            setLoading(false);
        }

    }

    return (
        <FormWrapper
            headerLabel = "Create an Account"
            showSocial
            backButtonHref = "/login"
            backButtonLabel = "Already have an account"
        >
            <Form {...form}>
                <form
                    className="space-y-6"
                    onSubmit={form.handleSubmit(handleRegistration)}
                >
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="font-semibold text-zinc-600" >Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled = {loading}
                                            placeholder="John"
                                            type="name"
                                            className="outline-none focus-visible:ring-0 focus-visible:ring-offset-0 font-medium text-zinc-600"
                                        />
                                    </FormControl>
                                    <FormMessage className="w-full px-2 py-2 bg-rose-200/70 rounded-md"/>
                                </FormItem>
                            )}
                        />
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
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button
                        className="w-full"
                        disabled = {loading}
                        type="submit"
                    >
                        Create Account
                    </Button>
                </form>
            </Form>
        </FormWrapper>
    );
}
