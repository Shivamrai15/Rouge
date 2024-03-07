import React from 'react'
import { Skeleton } from '@/components/ui/skeleton';
import { AddressCardSkeleton } from './address-card-skeleton';

export const AddressSkeleton = () => {
    return (
        <div className="p-4 w-full rounded-sm space-y-6">
            <Skeleton className='h-6 w-28 bg-zinc-200' />
            <div className="space-y-4">
                <Skeleton className='h-5 w-28 bg-zinc-200' />
                <AddressCardSkeleton badge = {true} />
            </div>
            <div className="space-y-4">
                <Skeleton className='h-5 w-28 bg-zinc-200' />
                <AddressCardSkeleton badge = {false} />
            </div>
            <Skeleton className='w-full aspect-[6/1] bg-zinc-200' />
        </div>
    )
}
