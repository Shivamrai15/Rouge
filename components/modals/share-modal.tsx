"use client";

import { 
    Dialog,
    DialogContent
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { useShareModal } from "@/hooks/use-share-modal";

export const ShareModal = () => {

    const [ copy, setCopy ] = useState(false);
    const  { isOpen, onClose } = useShareModal();

    const href = window.location.href;

    const onCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText(href);
        setTimeout(()=>{
            setCopy(false);
        }, 1500);
    }

    const onOpenChange = ( open: boolean ) => {
        if (!open) {
            onClose();
        }
    }

    return (
        <Dialog open = { isOpen } onOpenChange={onOpenChange} >
            <DialogContent className="w-80 sm:w-96 rounded-md">
                <div className="space-y-6 pb-4">
                    <h2 className="text-zinc-700 font-bold">Share</h2>
                    <div className="flex items-center w-full">
                        <input
                            className="outline-none w-full rounded-md px-2 text-sm border font-medium bg-gray-100 h-9 rounded-r-none select-none"
                            value={href}
                            disabled
                        />
                        <Button
                            className="h-9 w-12 rounded-l-none"
                            onClick={onCopy}
                        >
                            { copy ? <Check /> : <Copy/> }
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}