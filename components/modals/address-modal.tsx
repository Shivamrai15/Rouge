"use client";

import {
    Dialog,
    DialogContent
} from "@/components/ui/dialog";
import { AddressForm } from "@/components/cart/address-form";
import { useAddessModal } from "@/hooks/use-address-modal";

export const AddressModal = () => {

    const { isOpen, onClose } = useAddessModal();

    const handleModalChange = ( open: boolean ) => {
        if (!open) {
            onClose();
        }
    }

    return (
        <Dialog open = {isOpen} onOpenChange={handleModalChange} >
            <DialogContent className="max-w-md w-full">
                <AddressForm isModal = {true} />
            </DialogContent>
        </Dialog>
    );
}
