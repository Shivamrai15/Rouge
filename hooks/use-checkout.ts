import { CartSelectedItem } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UseCheckOutProps {
    checkOutItems : CartSelectedItem[],
    selectItem : ( data : CartSelectedItem ) => void;
    updateItem : ( id : string, quantity : number ) => void;
    removeSelectedItems : (id : string) => void;
}

export const useCheckout = create(
    persist<UseCheckOutProps>((set, get)=>({
        checkOutItems : [],
        selectItem : (data : CartSelectedItem) => {
            const currentItems = get().checkOutItems;

            // Checking if the item is already selected
            const isAlreadyExist = currentItems.find((item) => item.id == data.id)

            // If item already exists then remove it 
            if (isAlreadyExist) {
                set({
                    checkOutItems : [
                        ...currentItems.filter((item)=> item.id !== data.id)
                    ]
                });
            }
            // Otherwise add the item
            else {
                set ({
                    checkOutItems : [...currentItems, data]
                });
            }
        },
        updateItem : ( id: string, quantity : number ) => {
            const currentItems = get().checkOutItems;
            const isExist = currentItems.find((item) => item.id == id);
            
            if ( isExist ) {
                const updatedItems = currentItems.map((item) => {
                    if ( item.id === id ) return {
                        ...item,
                        quantity
                    }
                    else return item;
                });

                set({ checkOutItems : updatedItems });
            }

        },
        removeSelectedItems : (id : string) => set({
            checkOutItems : [
                ...get().checkOutItems.filter((item) => item.id !== id)
            ]
        })
    }), {
        name : "store-checkout-items",
        storage : createJSONStorage(()=>localStorage)
    })
)