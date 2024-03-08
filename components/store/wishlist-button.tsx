"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useWishlist } from "@/hooks/use-wishlist";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import axios from "axios";

interface WishlistButtonProps {
    productId : string;
}

export const WishlistButton = ({
    productId
} : WishlistButtonProps) => {

    const pathname = usePathname();
    const router = useRouter();
    const session = useSession();
    const [ loading, setLoading ] = useState(false);
    const { wishlistItems, addWishlistItem } = useWishlist();

    const handleAddWishlistItem = async() => {
        try {
            setLoading(true);
            
            if (session.status === "unauthenticated") {
                router.push("/login");
                return ;
            }
            if (wishlistItems.includes(productId)) {
                return;
            }

            addWishlistItem(productId);
            await axios.post("/api/v1/wishlist", {
                productId
            });

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    }

    return (
        <Button
            variant="outline"
            disabled = { pathname === "/wishlist" || loading || wishlistItems.includes(productId) }
            className = {cn(
                "w-full h-14 font-bold text-zinc-700",
                wishlistItems.includes(productId) && "bg-emerald-700 text-white hover:bg-emerald-700/90 hover:text-white"
            )}
            onClick={handleAddWishlistItem}
        >
            <Heart className="mr-4 h-6 w-6"/>
            {
                wishlistItems.includes(productId) ? "WISHLISTED" : "WISHLIST"
            }
        </Button>
    )
}
