"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Comment, OrderProduct } from '@prisma/client';
import { format } from "date-fns"

import { cn } from '@/lib/utils';
import { Package } from 'lucide-react';
import { Rating } from './rating';
import { Review } from './review';

interface OrderCardProps {
    data : OrderProduct & {
        comment : Comment | null
    };
    date : Date;
    paid : boolean;
}

export const OrderCard = ({
    data,
    date,
    paid
} : OrderCardProps ) => {

    const router = useRouter();
    
    return (
        <div className={cn(
                'w-full flex gap-x-1 sm:gap-x-4',
                paid ? "h-64" : "h-52"
            )}
        >
            <div className='w-8 h-full flex flex-col items-center'>
                <div className='w-8 h-8 bg-neutral-700 rounded-full text-white flex items-center justify-center'>
                    <Package />
                </div>
                <div
                    className={cn(
                        'h-full w-1 rounded-lg flex-1',
                        paid ? "bg-emerald-400" : "bg-red-400"
                    )}
                />
            </div>
            <div className='w-full h-full p-4 pt-1 space-y-2'>
                <div>
                    <h5 className={cn(
                        'font-bold',
                        paid ? "text-emerald-700" : "text-red-500"
                    )}>
                        { paid ? "Order Confirmed" : "Payment Failed" }
                    </h5>
                    <p className='text-sm font-medium text-zinc-600'>0n {format(date, "EE, dd LLL yyyy")}</p>
                </div>
                <div className='w-full bg-gray-100 rounded-lg p-4 flex flex-col gap-y-3'>
                    <div
                        className='flex items-start gap-x-4 sm:gap-x-8 md:gap-x-12 md:cursor-pointer'
                        onClick={()=>router.push(`/orders/${data.id}`)}
                    >
                        <div className='h-24 aspect-[3/4] relative rounded-md'>
                            <Image
                                src={data.productImage}
                                alt='Product'
                                fill
                                className='object-fill'
                            />
                        </div>
                        <div className='space-y-1'>
                            <h4 className='text-base font-semibold text-zinc-700'>{data.name}</h4>
                            <p className='max-w-60 text-sm text-zinc-600 line-clamp-2'>{data.about}</p>
                            <h6 className='text-zinc-600 font-semibold' >Size: {data.size}</h6>
                        </div>
                    </div>
                    {
                        paid && (
                            <div className='flex items-center justify-between mt-2'>
                               <Rating
                                    comment = {data.comment}
                                    orderProductId = {data.id}
                                    productId = {data.productId}
                                />
                                <Review
                                    comment = {data.comment}
                                    orderProductId = {data.id}
                                    productId = {data.productId}
                                    productImage = { data.productImage }
                                    productName = { data.about }
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
