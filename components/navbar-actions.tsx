"use client";

import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/use-cart";

export const NavbarActions = () => {


    const router = useRouter();
    const { items } = useCart();

    return (
        <div className="ml-auto flex items-center gap-x-2 ">
            <Button
                type="button"
                size="icon"
                variant="outline"
                className="border-none"
            >
                <FaRegUser className="text-zinc-700 h-6 w-6"/>
            </Button>
            <Button
                type="button"
                size="icon"
                variant="outline"
                className="border-none"
                onClick={() => router.push("/wishlist")}
            >
                <Heart className="text-zinc-700 h-6 w-6"/>
            </Button>
            <Button
                type="button"
                size="icon"
                variant="outline"
                className="relative group border-none"
                onClick={() => router.push("/cart")}
            >
                <HiOutlineShoppingBag className="text-zinc-700 h-6 w-6"/>
                <Badge className="absolute z-10 -right-2 -top-2 text-xs p-[4px] px-[7px] bg-zinc-700 group-hover:bg-zinc-600">
                    {items.length}
                </Badge>
            </Button>
            
        </div>
    )
}
