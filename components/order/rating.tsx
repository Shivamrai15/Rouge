"use client";

import { useOrder } from "@/hooks/use-order";
import { Comment } from "@prisma/client";
import axios from "axios";
import { Star } from "lucide-react";
import { MouseEventHandler, useState } from "react";
import { FaStar } from "react-icons/fa";

interface RatingProps {
    comment : Comment | null;
    productId : string;
    orderProductId : string;
}

export const Rating = ({
    comment,
    productId,
    orderProductId
} : RatingProps ) => {

    const { mutate } = useOrder();
    const [ activeStar, setActiveStar ] = useState( comment?.star||0 );

    const stars = [1, 2, 3, 4, 5];

    const handleClick = async (starValue : number ) => {

        if (starValue === activeStar ) return ;
        try {

            setActiveStar( starValue );
            if ( comment ) {

                await axios.patch(`/api/v1/comment/${comment.id}`, {
                    star : starValue,
                    comment : comment.comment
                });
            } else {
                await axios.post("/api/v1/comment", {
                    star : starValue,
                    productId,
                    orderProductId,
                });
            }
            mutate();

        } catch (error) {
            console.error(error);
        } finally {
        }
    }


    return (
        <div className='flex items-center gap-x-2'>
            {
                stars.map((star, index )=>(
                    star <= activeStar ? (
                        <button
                            key={index}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleClick(star)
                            }}
                        >
                            <FaStar
                                className='h-5 w-5 md:h-6 md:w-6  text-rose-500 md:cursor-pointer'
                            />
                        </button>
                    ) : (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleClick(star)
                            }}
                            key={index}
                        >
                            <Star
                                className='text-zinc-600 h-5 w-5 md:h-6 md:w-6 hover:drop-shadow-lg md:cursor-pointer'
                            />
                        </button>
                    )                   
                ))
            }
        </div>
    )
}
