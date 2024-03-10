import { Container } from "@/components/ui/container"
import { Skeleton } from "@/components/ui/skeleton"
import { WishlistItemCardSkeleton } from "@/components/wishlist/wishlist-item-card-skeleton"


const LoadingPage = () => {
    return (
        <div className="bg-white min-h-full">
            <Container>
                <div className="flex flex-col space-y-10 py-10 px-4">
                    <Skeleton className="h-6 md:h-10 w-32 md:w-52 bg-zinc-200" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 p-4">
                    <WishlistItemCardSkeleton/>
                    <WishlistItemCardSkeleton/>
                    <WishlistItemCardSkeleton/>
                    <WishlistItemCardSkeleton/>
                    <WishlistItemCardSkeleton/>
                    <WishlistItemCardSkeleton/>
                </div>
            </Container>
        </div>
    )
}

export default LoadingPage;