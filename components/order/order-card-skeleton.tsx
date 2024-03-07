import { Skeleton } from "@/components/ui/skeleton";


export const OrderCardSkeleton = () => {
    return (
        <div className="w-full flex gap-x-1 sm:gap-x-4 h-52">
            <div className='w-8 h-full flex flex-col items-center'>
                <Skeleton className="w-8 h-8 rounded-full bg-zinc-200" />
                <Skeleton className="h-full w-1 rounded-lg flex-1 bg-zinc-200" />
            </div>
            <div className='w-full h-full p-4 pt-1 space-y-2'>
                <div className="space-y-1">
                    <Skeleton className="h-4 w-28 bg-zinc-200" />
                    <Skeleton className="h-4 w-32 bg-zinc-200" />
                </div>
                <div className='w-full bg-gray-100 rounded-lg p-4 flex flex-col gap-y-3'>
                    <div className='flex items-start gap-x-4 sm:gap-x-8 md:gap-x-12'>
                        <div className='h-24 aspect-[3/4] relative rounded-md'>
                            <Skeleton
                                className="h-full w-full bg-zinc-200" 
                            />
                        </div>
                        <div className='space-y-2'>
                            <Skeleton className="w-24 h-5 bg-zinc-200" />
                            <Skeleton className="w-44 h-3 bg-zinc-200" />
                            <Skeleton className="w-16 h-6 bg-zinc-200" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
