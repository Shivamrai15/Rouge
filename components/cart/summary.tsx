"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { formatter } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { useCheckout } from "@/hooks/use-checkout";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const Summary = () => {
    
    const searchParams = useSearchParams();
    const { checkOutItems } = useCheckout();
    const [ loading, setLoading ] = useState(false);

    const getTotalAmount = ()=>{
        const amount = checkOutItems.reduce((total, item) => {
            return total + (item.price*item.quantity);
        }, 0);
        return amount;
    }

    useEffect(() => {

        if ( searchParams.get("success") ){
            toast.success("Payment Completed")
        }

        if (searchParams.get("cancelled")){
            toast.error("Something went wrong!")
        }

    }, [searchParams]);

    const onCheckOut = async () => {
        try {

            setLoading(true);
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
                products : checkOutItems.map((item)=>({
                    id : item.id,
                    quantity : item.quantity
                }))
            });
    
            window.location = response.data.url;
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong")
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="text-lg md:text-xl font-bold text-zinc-700">
                Order Summary
            </h2>
            <div className="mt-6 space-y-4 border-t">
                <p className="text-zinc-600 text-base font-semibold mt-2">
                    PRICE DETAILS ( {
                        checkOutItems.length
                    } Item )
                </p>
                <div className="space-y-1">
                    <div className="flex items-center justify-between">
                        <p className="text-base font-medium text-zinc-500">
                            Total MRP
                        </p>
                        <p className="text-base font-medium text-zinc-500">
                            {formatter.format(getTotalAmount())}
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-base font-medium text-zinc-500">
                            Shipping Charges
                        </p>
                        <p className="text-base font-medium text-emerald-500">
                            FREE
                        </p>
                    </div>
                </div>
                <Separator/>
                <div className="flex items-center justify-between">
                    <p className="text-base font-bold text-zinc-800">
                        Total Amount
                    </p>
                    <p className="text-base font-bold text-zinc-800">
                        {formatter.format(getTotalAmount())}
                    </p>
                </div>
            </div>
            <Button 
                size="lg"
                disabled = {loading}
                className="font-semibold mt-6"
                onClick={onCheckOut}
            >
                PLACE ORDER
            </Button>
        </div>
    );
}
