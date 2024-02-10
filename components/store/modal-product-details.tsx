"use client";

import { Product } from "@/types";
import { formatter } from "@/lib/utils";
import {
    Alert,
    AlertDescription,
    AlertTitle
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { HiShoppingBag } from "react-icons/hi";
import { useCart } from "@/hooks/use-cart";
import { WishlistButton } from "./wishlist-button";

interface ModalProductDetailsProps {
    data : Product
}

export const ModalProductDetails = ({
    data
} : ModalProductDetailsProps) => {

    const { addItem } = useCart();

    const onHandleCart = async()=>{
        addItem({ ...data, checkOutQuantity : 1});
    }

    return (
        <div className="mt-4">
            <h1 className="text-2xl text-zinc-800 font-bold">
                {data.name}
            </h1>
            <p className="text-zinc-600 font-semibold" >
                {data.about}
            </p>
            <div className="flex items-end mt-6 justify-between">
                <Alert className="border-none p-0">
                    <AlertTitle className="text-xl">
                        MRP {formatter.format(data.price)}
                    </AlertTitle>
                    <AlertDescription className="text-sm font-bold text-emerald-500">
                        inclusive of all taxes
                    </AlertDescription>
                </Alert>
            </div>
            <div className="flex items-center gap-x-4 mt-8">
                <h4 className="font-semibold text-black">
                    Size
                </h4>
                <div className="flex items-center justify-center h-12 min-w-12 px-2 py-2 rounded-full border text-lg font-semibold hover:border-none text-zinc-800 hover:bg-zinc-600 hover:text-white transition-colors cursor-default">
                    {data.size.value}
                </div>
            </div>
            <div className="mt-10 grid grid-cols-2 max-w-sm gap-x-4">
                <Button
                    className="w-full h-14 font-bold"
                    onClick={onHandleCart}
                >
                    <HiShoppingBag className="mr-4 h-6 w-6"/>
                    ADD TO BAG
                </Button>
                <WishlistButton
                    productId = {data.id}
                />
            </div>
        </div>
    )
}
