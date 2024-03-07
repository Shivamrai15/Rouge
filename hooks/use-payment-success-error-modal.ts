import { create } from "zustand";

interface UsePaymentSuccessErrorModal {
    open : boolean,
    modal : "success" | "error" | "undefined",
    onOpen : ( modal : "success" | "error" ) => void;
    onClose : () => void;
}

export const usePaymentSuccessErrorModal = create<UsePaymentSuccessErrorModal>((set)=>({
    open : false,
    modal : "undefined",
    onOpen : ( modal : "success" | "error" ) => set({ open : true, modal }),
    onClose : () => set({ open : false, modal : "undefined" })
}));