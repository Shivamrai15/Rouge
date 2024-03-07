import { create } from "zustand";

interface UseUpdateAddressModal {
    isOpen : boolean;
    onOpen : () => void;
    onClose : () => void;
}

export const useUpdateAddessModal = create<UseUpdateAddressModal>((set)=>({
    isOpen : false,
    onOpen : () => set({ isOpen: true }),
    onClose : () => set({ isOpen: false }),
}));