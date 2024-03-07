"use client";

import {
    Card,
    CardContent
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface AddressCardSkeletonProps {
    badge : boolean;
}

export const AddressCardSkeleton = ({
    badge
} : AddressCardSkeletonProps) => {
    return (
        <Card className="w-full pt-5 select-none">
            <CardContent className="flex w-full">
                <div className="w-10">
                    <Skeleton className="aspect-square bg-zinc-200 h-4 w-4"/>
                </div>
                <div className="w-full space-y-3">
                    <div className="flex items-center gap-4">
                        <Skeleton className="h-4 w-24 bg-zinc-200"/>
                        {
                            badge && (
                                <Skeleton className="h-4 w-16 bg-zinc-200 rounded-full"/> 
                            )
                        }
                    </div>
                    <div className="space-y-1">
                        <Skeleton className="h-3 w-full bg-zinc-200 max-w-sm"/>
                        <Skeleton className="h-3 w-full bg-zinc-200 max-w-sm"/>
                        <Skeleton className="h-3 max-w-sm w-20 bg-zinc-200"/>
                    </div>
                    <Skeleton className="h-3 max-w-sm w-32 bg-zinc-200"/>
                </div>
            </CardContent>
        </Card>
    )
}
