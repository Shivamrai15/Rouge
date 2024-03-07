"use client"

import { useMemo } from "react";

import {
    Dialog,
    DialogContent
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MdOutlineErrorOutline } from "react-icons/md";

import { usePaymentSuccessErrorModal } from "@/hooks/use-payment-success-error-modal";

export const ErrorModal = () => {

    const { onClose, open, modal } = usePaymentSuccessErrorModal()

    const opneModal = useMemo(()=>{
        return open === true && modal === "error"
    }, [open, onClose]);

    const onOpenChange = ( open : boolean ) => {
        if (!open) {
            onClose();
        }
    }

    return (
        <Dialog open = {opneModal} onOpenChange={onOpenChange} >
            <DialogContent className="w-96 sm:w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
                <div className="flex flex-col space-y-6 items-center justify-center py-10">
                    <MdOutlineErrorOutline className="h-36 w-36 text-red-500"/>
                    <p className="text-xl md:text-2xl font-bold text-zinc-700">
                        Payment Failed
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    )
}
