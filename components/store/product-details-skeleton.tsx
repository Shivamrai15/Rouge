import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export const ProductDetailsSkeleton = () => {
    return (
        <div>
            <Skeleton className = "h-8 md:h-9 w-32 bg-zinc-200 mb-1" />
            <Skeleton className = "h-4 md:h-5 w-full bg-zinc-200" />
            <div className="flex items-end mt-6 justify-between">
                <div>
                    <Skeleton className = "h-7 md:h-8 w-32 bg-zinc-200 mb-3" />
                    <Skeleton className = "h-3 w-40 bg-zinc-200" />
                </div>
            </div>
            <div className="flex items-center gap-x-4 mt-8">
                <Skeleton className = "h-6 md:h-7 w-14 bg-zinc-200" />
                <Skeleton className = "h-12 w-12 rounded-full bg-zinc-200" />
            </div>
            <div className="mt-10 grid grid-cols-2 max-w-sm gap-x-4">
                <Skeleton className="h-14 w-full bg-zinc-200"/>
                <Skeleton className="h-14 w-full bg-zinc-200"/>
            </div>
            <Separator className="my-8"/>
            <div className="max-w-md flex flex-col space-y-6">
                <div className="space-y-2">
                    <Skeleton className = "h-6 md:h-7 w-36 bg-zinc-200" />
                    <div className="space-y-1">
                        <Skeleton className = "h-4 w-full bg-zinc-200" />
                        <Skeleton className = "h-4 w-full bg-zinc-200" />
                        <Skeleton className = "h-4 w-full bg-zinc-200" />
                        <Skeleton className = "h-4 w-40 bg-zinc-200" />
                    </div>
                </div>
                <div className="space-y-2">
                    <Skeleton className = "h-6 md:h-7 w-24 bg-zinc-200" />
                    <div className="space-y-1">
                        <Skeleton className = "h-4 w-40 bg-zinc-200" />
                        <Skeleton className = "h-4 w-44 bg-zinc-200" />
                        <Skeleton className = "h-4 w-28 bg-zinc-200" />
                        <Skeleton className = "h-4 w-36 bg-zinc-200" />
                    </div>
                </div>
            </div>
        </div>
    )
}
