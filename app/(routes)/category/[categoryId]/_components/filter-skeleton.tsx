import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

export const FilterSkeleton = () => {
    return (
        <div className='mb-8'>
            <Skeleton className="w-20 h-6 rounded-md bg-zinc-200" />
            <Separator className="my-4"/>
            <div className="flex flex-col gap-3">
                <div className="flex items-center space-x-4">
                    <Skeleton className="w-4 h-4 rounded-md bg-zinc-200" />
                    <Skeleton className="w-20 h-4 rounded-md bg-zinc-200" />
                </div>
                <div className="flex items-center space-x-4">
                    <Skeleton className="w-4 h-4 rounded-md bg-zinc-200" />
                    <Skeleton className="w-20 h-4 rounded-md bg-zinc-200" />
                </div>
                <div className="flex items-center space-x-4">
                    <Skeleton className="w-4 h-4 rounded-md bg-zinc-200" />
                    <Skeleton className="w-20 h-4 rounded-md bg-zinc-200" />
                </div>
                <div className="flex items-center space-x-4">
                    <Skeleton className="w-4 h-4 rounded-md bg-zinc-200" />
                    <Skeleton className="w-20 h-4 rounded-md bg-zinc-200" />
                </div>
            </div>
        </div>
    )
}
