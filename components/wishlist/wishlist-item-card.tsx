"use client"

import { Product } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import { useCart } from "@/hooks/use-cart";

interface WishlistItemCardProps {
    data : Product;
    setItem : ( productId: string ) => void;
}

export const revalidate = 0;

export const WishlistItemCard = ({
    data,
    setItem
}: WishlistItemCardProps) => {

    const router = useRouter();
    const { addItem } = useCart();

    const handleRemoveItem : MouseEventHandler<HTMLDivElement> = (event) => {
        event.stopPropagation();
        setItem(data.id);
    }

    const moveToCart : MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        addItem( {...data, checkOutQuantity : 1} );
        setItem(data.id);
    }

    return (
        <div className="w-full hover:shadow-md md:cursor-pointer"
            onClick={() => router.push(`/product/${data.id}`)}
        >
            <div className="aspect-[3/4] overflow-hidden relative transition-shadow">
                <Image
                    src={data.productImages[0].url}
                    alt="Product"
                    fill
                    className="object-contain aspect-[3/4] hover:scale-105 transition-all duration-200"
                />
                <div
                    className="h-8 w-8 flex justify-center items-center bg-white opacity-75 rounded-full absolute top-2 right-2 md:cursor-pointer"
                    onClick={handleRemoveItem}
                >
                    <X className="h-4 w-4"  />
                </div>
            </div>
            <div className="p-3 space-y-1 md:space-y-2 overflow-hidden">
                <h4 
                    className="text:lg font-semibold text-zinc-800 line-clamp-1"
                >
                    { data.name }
                </h4>
                <p className="font-medium text-zinc-700 line-clamp-1 text-sm">
                    {data.about}
                </p>
            </div>
            <div className="flex items-start justify-center p-3 w-full">
                <Button
                    variant="secondary"
                    className="w-full text-zinc-800"
                    onClick={moveToCart}
                >
                    Move to cart
                </Button>
            </div>
        </div>
    );
}
