"use client";

import { useEffect, useState } from "react";
import { PreviewModal } from "@/components/modals/preview-modal";

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
        </>
    )
}
