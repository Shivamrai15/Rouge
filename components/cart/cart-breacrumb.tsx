"use client";

import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";

import { MapPinned, ShoppingBag } from "lucide-react";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { cn } from "@/lib/utils";


export const CartBreadcrumb = () => {

    const router = useRouter(); 
    const pathname = usePathname();

    const stage = useMemo(()=>{
        
        switch (pathname) {
            case "/checkout/cart":
                return 1;
            case "/checkout/address":
                return 2;
            case "/checkout/payment" : 
                return 3;
            default :
                return 1;
        }
        
    }, [pathname]);

    const handleNavigation = ( path : 'cart' | 'address' ) => {
        if ( stage > 1 && path === "cart") {
            router.push(`/checkout/${path}`)
        }
        else if (stage > 2 && path === "address") {
            router.push(`/checkout/${path}`)
        }
    }

    return (
        <div  className="w-full mt-8 md:mt-12 flex items-center justify-center">
            <div className="grid grid-cols-3 w-80 md:w-96 gap-0.5">
                <div className="flex items-center">
                    <div 
                        className={cn(
                            "h-10 w-10 rounded-full flex items-center justify-center bg-zinc-500 text-white transition-colors duration-1000 m-1",
                            stage > 1 && "bg-emerald-500 md:cursor-pointer",
                            stage === 1 && "bg-zinc-800"
                        )}
                        onClick={()=>handleNavigation("cart")}
                    >
                        <ShoppingBag className="h-6 w-6"/>
                    </div>
                    <div className="h-0.5 w-full border-dashed border border-zinc-400 flex-1" />
                </div>
                <div className="flex items-center">
                        <div className="h-0.5 w-full border-dashed border border-zinc-400 flex-1" />
                        <div 
                            className={cn(
                                "h-10 w-10 rounded-full flex items-center justify-center bg-zinc-500 text-white transition-colors duration-1000 m-1",
                                stage > 2 && "bg-emerald-500 md:cursor-pointer",
                                stage === 2 && "bg-zinc-800"
                            )}
                            onClick={()=>handleNavigation("address")}
                        >    
                            <MapPinned className="h-6 w-6" />
                        </div>
                        <div className="h-0.5 w-full border-dashed border border-zinc-400 flex-1" />
                </div>
                <div className="flex items-center">
                    <div className="h-0.5 w-full border-dashed border border-zinc-400 flex-1" />
                    <div className={cn(
                        "h-10 w-10 rounded-full flex items-center justify-center bg-zinc-500 text-white transition-colors duration-1000 m-1",
                        stage > 3 && "bg-emerald-500  md:cursor-pointer",
                        stage === 3 && "bg-zinc-800"
                    )}>
                        <BsFillCreditCard2BackFill  className="h-5 w-5"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
