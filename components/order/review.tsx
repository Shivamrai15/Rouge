"use client";
import { Comment } from "@prisma/client";
import { ReviewModal } from "@/components/modals/review-modal";
import { useState } from "react";
import { useOrder } from "@/hooks/use-order";
import axios from "axios";
import { toast } from "sonner";

interface ReviewProps {
    comment : Comment | null;
    productId : string;
    orderProductId : string;
    productImage : string;
    productName : string;
}

export const Review = ({
    comment,
    productId,
    orderProductId,
    productImage,
    productName
} : ReviewProps ) => {

    const { mutate } = useOrder();
    const [ open, setOpen ] = useState(false);

    const handleSubmit = async( review : string ) => {
        setOpen(false);
        try {
            if (comment) {

                if (comment.comment === null ) {
                    await axios.patch(`/api/v1/comment/${comment.id}`, {
                        star : comment.star,
                        comment : review
                    });
                }

            } else {
                await axios.post("/api/v1/comment", {
                    comment : review,
                    productId,
                    orderProductId,
                });
            }
            mutate();
        } catch (error) {
            toast.error("Something went wrong");   
        }
    }

    return (
        <>
            <ReviewModal
                isOpen = {open}
                onClose = {()=>setOpen(false)}
                onHandleReview = {handleSubmit}
                comment = {comment}
                productImage = {productImage}
                productName = {productName}
            />
            <button
                className='text-zinc-800 text-sm font-semibold cursor-default md:cursor-pointer'
                onClick={(e)=>{
                    e.stopPropagation();
                    setOpen(true);
                }}
            >
                { comment?.comment ? "Update Review" : "Write Review" }
            </button>
        </>
    )
}
