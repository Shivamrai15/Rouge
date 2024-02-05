"use client";

import Image from "next/image";
import { Cormorant } from "next/font/google";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";

const font = Cormorant({
    subsets : ["latin"]
});

interface CategoryCardProps {
    data : Category
}

export const CategoryCard = ({
    data
} : CategoryCardProps ) => {

    const router = useRouter();

    return (
        <div
            className="bg-neutral-100 group md:cursor-pointer p-3 py-4 space-y-3 rounded-xl"
            onClick={()=>router.push(`category/${data.id}?page=1`)}
        >
            <div className="aspect-square relative rounded-full">
                <Image
                    // @ts-ignore 
                    src={data.billboard.imageUrl}
                    fill
                    className="aspect-square rounded-full object-cover"
                    alt="Category Image"
                />
            </div>
            <h3
                className={cn(
                    "text-xl font-semibold text-zinc-800 text-center",
                    font.className
                )}
            >
                {data.name}
            </h3>
        </div>
    )
}
