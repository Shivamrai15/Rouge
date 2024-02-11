import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";


export const Socials = () => {

    const handleOauthLogin = async () =>{
        await signIn("google", {
            callbackUrl : DEFAULT_LOGIN_REDIRECT
        });
    }

    return (
        <div className="w-full space-y-2">
            <div className="w-full relative flex flex-col items-center justify-center">
                <Separator className="absolute top-1/2" />
                <div className="text-center z-10 px-1 bg-white text-muted-foreground font-semibold">
                    Or
                </div>
            </div>
            <Button
                variant="outline"
                className="w-full"
                onClick = {handleOauthLogin}
            >
                <FcGoogle className="w-4 h-4 mr-2"/>
                Google
            </Button>
        </div>
    )
}
