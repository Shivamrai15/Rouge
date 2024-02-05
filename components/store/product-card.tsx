"use client";

import { Product } from "@/types";
import Image from "next/image";
import { IconButton } from "@/components/ui/icon-button";
import { ExpandIcon, ShoppingCart } from "lucide-react";
import { formatter } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import { usePreviewModal } from "@/hooks/use-preview-modal";
import { useCart } from "@/hooks/use-cart";

interface ProductCardProps {
    data : Product;
}

export const ProductCard = ({
    data
} : ProductCardProps) => {

    const router = useRouter();
    const { onOpen } = usePreviewModal();
    const { addItem } = useCart();

    const onClick = () => {
        router.push(`/product/${data?.id}`);
    }

    const onPreview : MouseEventHandler<HTMLButtonElement> = (event)=>{
        event.stopPropagation();
        onOpen(data);
    }

    const onHandleCart : MouseEventHandler<HTMLButtonElement> = async(event)=>{
        event.stopPropagation();
        addItem({ ...data, checkOutQuantity : 1});
    }
    
    return (
        <div
            onClick={onClick}
            className="bg-white group md:cursor-pointer hover:shadow-xl"
        >
            <div className="relative">
                <div
                    className="aspect-[3/4] bg-gray-100 relative overflow-hidden"
                >
                    <Image
                        src={data.productImages[0].url}
                        alt="Product Image"
                        fill
                        className="aspect-[3/4] object-cover hover:scale-105 transition duration-200"
                    />
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="gap-x-6 justify-center hidden md:flex">
                        <IconButton
                            onClick={onPreview}
                            icon={<ExpandIcon size={20} className="text-gray-600" />}
                        />
                        <IconButton
                            onClick={onHandleCart}
                            icon={<ShoppingCart size={20} className="text-pink-600" />}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col space-y-1 p-3">
                <h3 className="text-black font-bold" >{data.name}</h3>
                <p className="w-full truncate flex-1 text-sm text-zinc-600">{data.about}</p>
                <p className="text-sm text-zinc-800 font-semibold" >{formatter.format(data.price)}</p>
            </div>
        </div>
    )
}
