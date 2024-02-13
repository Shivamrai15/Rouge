import { Skeleton } from '@/components/ui/skeleton';

export const WishlistItemCardSkeleton = () => {
    return (
        <div className="w-full hover:shadow-md md:cursor-pointer">
            <Skeleton className='aspect-[3/4] bg-zinc-200' />
            <div className="p-3 space-y-1 md:space-y-2 overflow-hidden">
                <Skeleton className='h-4 w-24 bg-zinc-200' />
                <Skeleton className='h-4 w-full bg-zinc-200' />
            </div>
            <div className="flex items-start justify-center p-3 w-full">
                <Skeleton className='w-full h-10 bg-zinc-200' />
            </div>
        </div>
    )
}
