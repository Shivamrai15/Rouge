import { create } from "zustand";

interface UseWishlistProps {
    wishlistItems : string[];
    createWishlist : ( items: string[] ) => void;
    addWishlistItem : ( id: string ) => void;
    removeWishlistItem : ( id: string ) => void; 
}

export const useWishlist = create<UseWishlistProps>((set, get)=>({
    wishlistItems : [],
    createWishlist : ( items : string[] ) => set({ wishlistItems :  items }),
    addWishlistItem : ( id: string ) => set({ wishlistItems : [...get().wishlistItems, id] }),
    removeWishlistItem : ( id: string ) => {
        const existingItems = get().wishlistItems;
        const isItemExists = existingItems.find( (data) => data === id );
        if ( isItemExists ) {
            const updatedItems = existingItems.filter((item) => item!==id);
            set({ wishlistItems : updatedItems })
        }
    }
}));