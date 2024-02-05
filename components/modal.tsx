"use client";

interface ModalProps {
    isOpen : boolean;
    onClose : ()=>void;
    children : React.ReactNode;
}

import {
    Dialog,
    DialogContent
} from "@/components/ui/dialog";

export const Modal = ({
    isOpen,
    onClose,
    children
} : ModalProps) => {

    const onOpenChange = ( open : boolean ) =>{
        if (!open) {
            onClose();
        }
    }

    return (
        <Dialog open = {isOpen} onOpenChange={onOpenChange} >
            <DialogContent className="max-w-3xl text-left overflow-hidden">
                {children}
            </DialogContent>
        </Dialog>
    )
}
