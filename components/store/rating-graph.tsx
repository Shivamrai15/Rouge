import { cn } from "@/lib/utils";
import { FaStar } from "react-icons/fa";

interface RatingGraphProps {
    label : number;
    total : number;
    reviews : number;
    className : string;
}


export const RatingGraph = async({
    label,
    reviews,
    total,
    className
} : RatingGraphProps ) => {

    const calculatePercentage = ()=>{
        if ( total === 0 ) return 0;
        const percentage = (reviews*100)/total;
        return percentage;
    }

    return (
        <div className="w-full flex items-center gap-x-2">
            <div className="flex gap-x-1 items-center">
                <span className={cn(
                    "text-sm font-medium text-zinc-500",
                    label === 1 && "pr-1"
                )}>
                    {label}
                </span>
                <FaStar
                    className="text-zinc-400 h-3 w-3 sm:h-4 sm:w-4"
                />
            </div>
            <div className="w-36 sm:w-64 h-1.5 rounded-full bg-gray-200 shrink-0">
                <div 
                    className={cn(
                        "rounded-full h-full",
                        className
                    )} 
                    style={{
                        width : `${calculatePercentage()}%`
                    }}
                />
            </div>
            <div className="text-sm text-zinc-500">
                {reviews}
            </div>
        </div>
    )
}
