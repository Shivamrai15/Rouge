import { create } from "zustand";

interface UseShareModal {
    isOpen : boolean;
    onOpen : () => void;
    onClose : () => void;
}

export const useShareModal = create<UseShareModal>((set)=>({
    isOpen : false,
    onOpen : () => set({ isOpen : true }),
    onClose : () => set({isOpen : false})
}));