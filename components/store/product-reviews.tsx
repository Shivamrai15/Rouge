import { FaStar } from "react-icons/fa";
import { RatingGraph } from "./rating-graph";
import { getTotalReviews, reviewsAggregation } from "@/actions/reviews";
import { ReviewsTable } from "./reviews-table";

interface ProductReviewsProps {
    productId : string;
}

export const ProductReviews = async({
    productId
} : ProductReviewsProps ) => {

    const totalReviews = await getTotalReviews(productId);
    const data = await reviewsAggregation(productId);

    if (totalReviews === null || totalReviews === 0 || data?.avgRating ===  undefined ) {
        return null;
    }

    return (
        <div className="w-full">
            <h2 className="font-semibold text-zinc-800 md:text-xl mb-2" >Customer Reviews</h2>
            <div className="max-w-md w-full grid grid-cols-6 mt-6 md:mt-10">
                <div className="flex h-full items-center justify-between col-span-2">
                    <div className="flex items-center gap-x-2">
                        <span className="text-5xl sm:text-7xl font-bold text-zinc-700">
                            { data.avgRating._avg.star }
                        </span>
                        <FaStar
                            className="text-zinc-700 h-5 w-5 sm:h-7 sm:w-7"
                        />
                    </div>
                </div>
                <div className="border-l-2 px-2 pl-4 col-span-4">
                    <RatingGraph
                        label={5}
                        reviews={data.groupByRatings.find((value)=>value.star===5)?._count.star || 0}
                        total={totalReviews}
                        className = "bg-emerald-500"
                    />
                    <RatingGraph
                        label={4}
                        reviews={data.groupByRatings.find((value)=>value.star===4)?._count.star || 0}
                        total={totalReviews}
                        className = "bg-emerald-400"
                    />
                    <RatingGraph
                        label={3}
                        reviews={data.groupByRatings.find((value)=>value.star===3)?._count.star || 0}
                        total={totalReviews}
                        className = "bg-emerald-300"
                    />
                    <RatingGraph
                        label={2}
                        reviews={data.groupByRatings.find((value)=>value.star===2)?._count.star || 0}
                        total={totalReviews}
                        className = "bg-orange-400"
                    />
                    <RatingGraph
                        label={1}
                        reviews={data.groupByRatings.find((value)=>value.star===1)?._count.star || 0}
                        total={totalReviews}
                        className = "bg-rose-500"
                    />
                </div>
            </div>
            <div className="mt-6 space-y-8">
                <div className="text-sm font-semibold text-zinc-700">
                    TOTAL REVIEWS { totalReviews }
                </div>
                <ReviewsTable productId={productId} />
            </div>
        </div>
    )
}
