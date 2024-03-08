"use client";

import axios from "axios";
import { Product } from "@/types";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { useWishlist } from "@/hooks/use-wishlist";
import { WishlistItemCard } from "./wishlist-item-card";

interface WishlistItemsListProps {
    data : Product[]
}

export const revalidate = 0;

export const WishlistItemsList = ({
    data  
} :WishlistItemsListProps ) => {
  
    const [ items, setItems ] = useState<Product[]>(data);
    const { removeWishlistItem } = useWishlist();
    const router = useRouter();

    const removeItem = async( productId : string ) => {
        removeWishlistItem(productId);
        setItems( items.filter((item) => item.id !== productId) );
        try {
            await axios.delete(`/api/v1/wishlist/${productId}`);
            router.refresh();
        } catch (error) {
        }
    }

    return (
        <div className="flex flex-col space-y-10 py-10 px-4">
            <div className="flex items-center gap-x-4">
                <h2 className="text-xl md:text-2xl font-bold text-zinc-700">My Wishlist</h2>
                <span className="text-lg md:text-xl font-semibold text-zinc-600">
                    {items.length}
                    {
                        items.length === 1 ? " Item" : " Items"
                    }
                </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                {
                    items.map((item) => (
                        <WishlistItemCard
                            key={item.id}
                            setItem = {removeItem}
                            data = {item}
                        />
                    ))
                }
            </div>
        </div>
    )
}
