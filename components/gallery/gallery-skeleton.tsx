import { Skeleton } from "@/components/ui/skeleton"

export const GallerySkeleton = () => {
    return (
        <div className="flex flex-col-reverse md:px-24 lg:px-20 xl:px-28 relative" >
            <div className="mx-auto mt-6 lg:mt-2 w-full max-w-2xl lg:max-w-none lg:absolute top-0 left-0 lg:w-16" >
                <div className="grid grid-cols-4 lg:grid-cols-1 gap-4 md:gap-6 lg:gap-4 h-auto bg-white" >
                    <Skeleton className="relative flex aspect-square bg-zinc-200" />
                    <Skeleton className="relative flex aspect-square bg-zinc-200" />
                    <Skeleton className="relative flex aspect-square bg-zinc-200" />
                    <Skeleton className="relative flex aspect-square bg-zinc-200" />
                </div>
            </div>
            <div>
                <Skeleton className="aspect-[3/4] relative bg-zinc-200" />
            </div>
        </div>
    )
}
