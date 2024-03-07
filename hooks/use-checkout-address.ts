import { Address } from "@prisma/client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UseCheckoutAddressProps {
    address :  Address | null;
    addAddress : ( data : Address ) => void;
    removeAddress : () => void;
}

export const useCheckoutAddress = create(
    persist<UseCheckoutAddressProps>((set) => ({
        address : null,
        addAddress : ( data: Address ) => set({ address: data }),
        removeAddress : () => set({ address: null })
    }),
    {
        name : "rouge-checkout-address",
        storage : createJSONStorage(() => localStorage )
    }
    ),
)
