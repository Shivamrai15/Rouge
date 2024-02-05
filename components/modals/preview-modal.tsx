"use client";

import { usePreviewModal } from "@/hooks/use-preview-modal";
import { Modal } from "@/components/modal";
import { ModalGallery } from "@/components/gallery/modal-gallery";
import { ModalProductDetails } from "../store/modal-product-details";



export const PreviewModal = () => {
    
    const {isOpen, onClose, data} = usePreviewModal();

    if (!data){
        return null;
    }
    

    return (
        <Modal isOpen = {isOpen} onClose={onClose}>
            <div className="w-full grid grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <div className="sm:col-span-4 lg:col-span-5">
                    <ModalGallery images ={data.productImages} />
                </div>
                <div className="sm:col-span-8 lg:col-span-7">
                    <ModalProductDetails data={data} />
                </div>
            </div>
        </Modal>
    )
}
