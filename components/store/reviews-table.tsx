import { format } from "date-fns"
import { cn } from "@/lib/utils";
import { getReviews } from "@/actions/reviews"
import { Separator } from "@/components/ui/separator";
import { FaStar } from "react-icons/fa";

interface ReviewsTableProps {
    productId : string
}

export const ReviewsTable = async({
    productId
} : ReviewsTableProps ) => {

    const reviews = await getReviews(productId);

    if (reviews.length === 0) {
        return null;
    }

    return (
        <div className="w-full flex flex-col gap-y-5">
            {
                reviews.map((review) => (
                    <div key={review.id} className="flex flex-col gap-y-3">
                        <div className="w-full flex items-start gap-x-4">
                            <div className="w-10 h-full">
                                <div className={cn(
                                    "flex items-center gap-1 p-1 px-1.5 w-fit rounded-sm",
                                    review.star === 5 && "bg-emerald-800",
                                    review.star === 4 && "bg-emerald-800",
                                    review.star === 3 && "bg-emerald-600",
                                    review.star === 2 && "bg-orange-600",
                                    review.star === 1 && "bg-rose-600",
                                )}>
                                    <span className="text-xs text-white">
                                        {review.star}
                                    </span>
                                    <FaStar className="h-3 w-3 text-white" />
                                </div>
                            </div>
                            <div>
                                <p className="font-medium text-zinc-700" >{review.comment}</p>
                                <div className="flex gap-x-4 mt-4">
                                    <p className="w-40 truncate text-zinc-700 text-sm font-semibold">
                                        {review.username}
                                    </p>
                                    <p className="text-zinc-700 text-sm font-semibold">
                                        { format(review.createdAt, "dd LLL yyyy")}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Separator/>
                    </div>
                ))
            }
        </div>
    )
}
