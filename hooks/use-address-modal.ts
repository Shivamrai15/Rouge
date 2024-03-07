import { create } from "zustand";

interface UseAddressModal {
    isOpen : boolean;
    onOpen : () => void;
    onClose : () => void;
}

export const useAddessModal = create<UseAddressModal>((set)=>({
    isOpen : false,
    onOpen : () => set({ isOpen: true }),
    onClose : () => set({ isOpen: false }),
}));