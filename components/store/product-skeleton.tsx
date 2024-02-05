import { Skeleton } from "@/components/ui/skeleton"

export const ProductSkeleton = () => {
    return (
        <div>
            <Skeleton className="aspect-[3/4] bg-zinc-200" />
            <div className="w-full flex flex-col space-y-1 p-3">
                <Skeleton className="h-4 w-20 bg-zinc-200" />
                <Skeleton className="h-4 w-full bg-zinc-200" />
                <Skeleton className="h-4 w-16 bg-zinc-200" />
            </div>
        </div>
    )
}
