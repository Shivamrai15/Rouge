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
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { WishlistButton } from "./wishlist-button";

interface ProductDetailsProps {
    data : Product;
}

export const ProductDetails = ({
    data
} : ProductDetailsProps) => {

    const { addItem } = useCart();

    const onHandleCart = async()=>{
        addItem({ ...data, checkOutQuantity : 1});
    }

    return (
        <div>
            <h1 className="text-2xl md:text-3xl text-zinc-800 font-bold">
                {data.name}
            </h1>
            <p className="text-zinc-600 md:text-lg font-semibold" >
                {data.about}
            </p>
            <div className="flex items-end mt-6 justify-between">
                <Alert className="border-none p-0">
                    <AlertTitle className="text-xl md:text-2xl">
                        MRP {formatter.format(data.price)}
                    </AlertTitle>
                    <AlertDescription className="text-sm font-bold text-emerald-500">
                        inclusive of all taxes
                    </AlertDescription>
                </Alert>
            </div>
            <div className="flex items-center gap-x-4 mt-8">
                <h4 className="font-semibold text-black md:text-xl">
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
            <Separator className="my-8"/>
            <div className="max-w-md flex flex-col space-y-6">
                <div className="space-y-2">
                    <h4 className="font-semibold text-zinc-800 md:text-xl">Product Details</h4>
                    <p className="text-zinc-600">
                        {data.description}
                    </p>
                </div>
                {
                    data.sizeAndFit.length !==0 && (
                        <div>
                            <h4 className="font-semibold text-zinc-800 md:text-xl mb-2">Size & Fit</h4>
                            {
                                data.sizeAndFit.map((item, index)=>(
                                    <p key={index} className="text-zinc-600">
                                        {item}
                                    </p>
                                ))
                            }
                        </div>
                    )
                }
                {
                    data.materialAndCare.length !=0 && (
                        <div >
                            <h4 className="font-semibold text-zinc-800 md:text-xl mb-2">Material & Care</h4>
                            {
                                data.materialAndCare.map((item, index)=>(
                                    <p key={index} className="text-zinc-600">
                                        {item}
                                    </p>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}
