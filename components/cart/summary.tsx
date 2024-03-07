"use client";

import axios from "axios";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { formatter } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { useCheckout } from "@/hooks/use-checkout";
import { useCheckoutAddress } from "@/hooks/use-checkout-address";
import { usePaymentSuccessErrorModal } from "@/hooks/use-payment-success-error-modal";

export const Summary = () => {
    
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const session = useSession();
    const { address } = useCheckoutAddress();

    const { checkOutItems } = useCheckout();
    const { onOpen } = usePaymentSuccessErrorModal();
    const [ loading, setLoading ] = useState(false);

    const getTotalAmount = ()=>{
        const amount = checkOutItems.reduce((total, item) => {
            return total + (item.price*item.quantity);
        }, 0);
        return amount;
    }

    const updateOrder = async( id: string ) => {
        try {
            const order = await axios.patch(`/api/order/${id}`, { isPaid : true });
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {

        if ( searchParams.get("id") ){
            const orderId = searchParams.get("id");
            updateOrder(orderId!).then(()=>{
                onOpen("success")
            })
        }

        if (searchParams.get("cancelled")){
            onOpen("error");
        }

    }, [searchParams]);

    const onCheckOut = async () => {
        try {

            if (session.status === "unauthenticated") {
                router.push("/login");
                return;
            }

            if (pathname.includes("/checkout/cart")) {
                router.push("/checkout/address");
                return;
            }

            if ( !address ) {
                return;
            }

            setLoading(true);
            const order = await axios.post(`/api/v1/order`, {
                products : checkOutItems, address
            });

            const orderId = order.data.orderId
            console.log("OrderId", orderId)

            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
                products : checkOutItems.map((item)=>({
                    id : item.id,
                    quantity : item.quantity
                })),
                orderId : orderId
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
        <div className="rounded-lg bg-gray-50 px-4 py-6">
            <h2 className="text-lg md:text-xl font-bold text-zinc-800">
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
                className="font-semibold mt-6 w-full"
                onClick={onCheckOut}
            >
                {pathname === "/checkout/cart" ? "CONTINUE" : "PLACE ORDER"}
            </Button>
        </div>
    );
}
