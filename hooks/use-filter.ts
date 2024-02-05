import { create } from "zustand";

interface UseFilterProps {
    isOpen : boolean;
    onChange : (value : boolean)=>void
}

export const useFilter  = create<UseFilterProps>((set)=>({
    isOpen : false,
    onChange : (value) => set({ isOpen : value}),
}));