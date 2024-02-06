"use client";

import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Loader2 } from "lucide-react";
import { FormError } from "@/components/auth/utils/form-error";
import { FormSuccess } from "@/components/auth/utils/form-success";
import { FormWrapper } from "@/components/auth/utils/form-wrapper";
import { tokenVerification } from "@/actions/token-verification";

export const TokenVerificationForm = () => {

    const [ error, setError ] = useState<string|undefined>();
    const [ success, setSuccess ] = useState<string|undefined>();

    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const verifyToken = useCallback(()=>{
        if ( success || error) return ;

        if (!token) {
            setError("Invalid verification link");
            return ;
        }

        tokenVerification(token).then((response)=>{
            if(response.error) {
                setError(response.error);
            }
            if (response.success) {
                setSuccess(response.success);
            }
        }).catch((error)=>{
            console.error(error);
            setError("Internal server error");
        });

    }, [token, error, success]);

    useEffect(()=>{
        verifyToken();
    }, [verifyToken]);

    return (
        <FormWrapper
            headerLabel="Confirming your email"
            backButtonHref="/login"
            backButtonLabel="Back to login"
        >
            <div className="w-full flex items-center justify-center">
                {
                    !error && !success && (
                        <Loader2 className="h-5 w-5 text-muted-foreground animate-spin"/>
                    )
                }
                {
                    error && (
                        <FormError message={error} />
                    )
                }
                {
                    success && (
                        <FormSuccess message={success} />
                    )
                }
            </div>
        </FormWrapper>
    )
}
