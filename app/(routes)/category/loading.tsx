import { ProductSkeleton } from "@/components/store/product-skeleton";
import { Container } from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";
import { FilterSkeleton } from "./[categoryId]/_components/filter-skeleton";

const LoadingPage = () => {
    return (
        <div className="h-full w-full">
            <Container>
                <div className="px-4 sm:px-6 lg:px-8 pt-5 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8 mt-14">
                        <Skeleton className="w-[93.15px] h-10 rounded-md bg-zinc-200 lg:hidden" />
                        <div className="hidden lg:block lg:border-r">
                            <Skeleton className="w-20 h-6 mb-5 rounded-md bg-zinc-200" />
                            <FilterSkeleton/>
                            <FilterSkeleton/>
                            <FilterSkeleton/>
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-4">
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md::gap-8 lg:gap-10">
                                <ProductSkeleton/>
                                <ProductSkeleton/>
                                <ProductSkeleton/>
                                <ProductSkeleton/>
                                <ProductSkeleton/>
                                <ProductSkeleton/>
                                <ProductSkeleton/>
                                <ProductSkeleton/>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default LoadingPage;