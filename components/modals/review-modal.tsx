"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import { Comment } from "@prisma/client";
import { FaStar } from "react-icons/fa";
import { Star } from "lucide-react";

interface ReviewModalProps {
    isOpen : boolean;
    onClose : () => void;
    onHandleReview : ( review: string ) => void;
    comment : Comment | null;
    productImage : string;
    productName : string;
}

export const ReviewModal = ({
    isOpen,
    onClose,
    onHandleReview,
    comment,
    productImage,
    productName
} : ReviewModalProps ) => {

    const [ value, setValue ] = useState( comment?.comment || "");

    const handleOnOpenChange = ( open: boolean ) => {
        if( !open ) {
            onClose();
        }
    }

    const stars = [1, 2, 3, 4, 5];

    return (
        <Dialog open = {isOpen} onOpenChange={handleOnOpenChange} >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-zinc-800 font-bold">
                        { comment ? "Update Review" : "Write Review"}
                    </DialogTitle>
                </DialogHeader>
                <div className="w-full mt-4 space-y-8">
                    <div className="flex items-start w-full gap-x-4">
                        <div className="aspect-[3/4] h-32 relative overflow-hidden rounded-md">
                            <Image
                                src={productImage}
                                alt="Product"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h4 className="text-zinc-700 text-sm font-semibold" >{productName}</h4>
                            <div className="flex gap-x-2 items-center">
                                { stars.map((value, index)=>(
                                    value <= (comment?.star || 0) ? (
                                        <FaStar 
                                            key={index}
                                            className="h-4 w-4 text-rose-500"
                                        />
                                    ) : (
                                        <Star
                                            key={index}
                                            className="h-4 w-4 text-zinc-600"
                                        />
                                    )
                                )) }
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <Textarea
                            placeholder="Type your message here."
                            rows={6}
                            value={value}
                            onChange={(e)=>setValue(e.target.value)}
                            className="resize-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border border-zinc-300 font-medium"
                        />
                        <Button
                            className="w-full"
                            type="button"
                            onClick={()=>onHandleReview(value)}
                        >
                            { comment ? "Update Review" : "Add Review" }
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
