"use client";

import {
    Dialog,
    DialogContent
} from "@/components/ui/dialog";
import { AddressForm } from "@/components/cart/address-form";
import { useUpdateAddessModal } from "@/hooks/use-update-address-modal";

export const UpdateAddressModal = () => {
    
    const { isOpen, onClose } = useUpdateAddessModal();

    const handleModalChange = ( open: boolean ) => {
        if (!open) {
            onClose();
        }
    }

    

    return (
        <Dialog open = {isOpen} onOpenChange={handleModalChange} >
            <DialogContent className="max-w-md w-full">
                <AddressForm isModal = {true} edit />
            </DialogContent>
        </Dialog>
    );
}
