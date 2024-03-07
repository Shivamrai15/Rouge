"use client"

import { useMemo } from "react";
import { useRouter } from "next/navigation";

import {
    Dialog,
    DialogContent
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { HiOutlineBadgeCheck } from "react-icons/hi";
import { usePaymentSuccessErrorModal } from "@/hooks/use-payment-success-error-modal";

export const SuccessModal = () => {

    const router = useRouter();
    const { onClose, open, modal } = usePaymentSuccessErrorModal()

    const opneModal = useMemo(()=>{
        return open === true && modal === "success"
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
                    <HiOutlineBadgeCheck className="h-36 w-36 text-emerald-500" />
                    <p className="text-xl md:text-2xl font-bold text-zinc-700">
                        Order Completed 🎉
                    </p>
                    <Button
                        className="max-w-72 w-full font-semibold"
                        onClick={()=>{
                            onClose();
                            router.push(`/orders`)
                        }}
                    >
                        More Info
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
