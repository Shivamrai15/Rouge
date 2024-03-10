"use client";

import { useEffect, useState } from "react";
import { PreviewModal } from "@/components/modals/preview-modal";
import { AddressModal } from "@/components/modals/address-modal";
import { UpdateAddressModal } from "@/components/modals/update-address-modal";
import { SuccessModal } from "@/components/modals/success-modal";
import { ErrorModal } from "@/components/modals/error-modal";
import { ShareModal } from "@/components/modals/share-modal";

export const ModalProvider = () => {

    const [mounted, setMounted] = useState(false);

    useEffect(()=>{
        setMounted(true);
    }, [])

    if (!mounted){
        return null;
    }

    return (
        <>
            <PreviewModal/>
            <AddressModal/>
            <UpdateAddressModal/>
            <SuccessModal/>
            <ErrorModal/>
            <ShareModal/>
        </>
    )
}
