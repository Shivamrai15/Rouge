"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCart } from "@/hooks/use-cart";
import { useCheckout } from "@/hooks/use-checkout";

interface QuantityModalProps {
    quantity : number;
    setQuantity : ( quantity : number ) => void;
    open : boolean;
    setOpen : ( value : boolean ) => void;
    stock : number;
    productId : string;
}

export const QuantityModal = ({
    open,
    quantity,
    setOpen,
    setQuantity,
    stock,
    productId
} : QuantityModalProps) => {
    
    const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const { updateQuantity } = useCart();
    const { updateItem } = useCheckout();
    const [shippingQuantity, setShippingQuantity] = useState(quantity);

    const handleOnClose = ( open: boolean ) => {
        if(!open) {
            setOpen(false)
        }
    }

    const handleOnUpdate = () => {
        setQuantity(shippingQuantity);
        updateItem( productId, shippingQuantity );
        updateQuantity( productId, shippingQuantity);
        setOpen(false);
    }

    return (
        <Dialog open = {open} onOpenChange={handleOnClose}>
            <DialogContent className="w-80">
                <DialogHeader>
                    <DialogTitle className="text-zinc-800 font-semibold">Select Quantity</DialogTitle>
                </DialogHeader>
                <Separator/>
                <div className="w-full grid grid-cols-5 justify-center justify-items-center gap-y-3">
                    {
                        quantities.map((q) => (
                            <button 
                                key={q}
                                className={cn(
                                    "h-10 w-10 rounded-full border border-zinc-400 text-zinc-600 font-semibold flex items-center justify-center cursor-default md:cursor-pointer transition-colors overflow-hidden",
                                    q === shippingQuantity && "border-rose-500 text-rose-500",
                                    q > stock && "opacity-25"
                                )}
                                onClick={ ()=>setShippingQuantity(q)}
                                disabled = { q > stock }
                            >
                                {q}
                            </button>
                        ))
                    }
                </div>
                <Button
                    className="mt-4"
                    onClick={handleOnUpdate}
                >
                    DONE
                </Button>
            </DialogContent>
        </Dialog>
    )
}
