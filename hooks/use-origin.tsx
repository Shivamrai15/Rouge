"use client";

import { useEffect, useState } from "react";


export const useOrigin = () => {
    
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted){
        return "";
    }

    return window.location.href;
}