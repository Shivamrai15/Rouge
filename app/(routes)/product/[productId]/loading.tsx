import { GallerySkeleton } from "@/components/gallery/gallery-skeleton"
import { ProductDetailsSkeleton } from "@/components/store/product-details-skeleton";
import { ProductSkeleton } from "@/components/store/product-skeleton";
import { Container } from "@/components/ui/container"
import { Skeleton } from "@/components/ui/skeleton";


const LoadingPage = () => {
    return (
        <div className="bg-white mb-16">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        <div>
                            <GallerySkeleton />
                        </div>
                        <div className="mt-10 sm:mt-16 lg:mt-0 md:px-24 lg:px-0">
                            <ProductDetailsSkeleton />
                        </div>
                    </div>
                </div>
                <hr className="m-10" />
                <div className="flex flex-col gap-y-16 px-4 sm:px-6 lg:px-8">
                    <div className="space-y-4 md:space-y-16">
                        <Skeleton className="h-10 w-40 text-zinc-200" />
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                            <ProductSkeleton/>
                            <ProductSkeleton/>
                            <ProductSkeleton/>
                            <ProductSkeleton/>
                            <ProductSkeleton/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default LoadingPage