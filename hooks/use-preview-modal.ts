import { Product } from "@/types";
import { create } from "zustand";

interface UsePreviewModal {
    isOpen : boolean;
    data? : Product;
    onOpen : (data : Product) => void;
    onClose : () => void;
}

export const usePreviewModal = create<UsePreviewModal>((set)=>({
    isOpen : false,
    data : undefined,
    onOpen : (data) => set({ data, isOpen : true}),
    onClose : () => set({isOpen : false})
}));