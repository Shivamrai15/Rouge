"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BoxProps {
    img : string;
    label : string;
    href : string;
}

export const Box = ({
    img,
    label,
    href
} : BoxProps ) => {

    const router = useRouter();

    return (
        <div 
            className="aspect-square border border-zinc-300 rounded-md md:hover:-translate-y-2 md:hover:shadow-lg duration-300 transition-all md:cursor-pointer"
            onClick={()=>router.push(href)}
        >
            <div className="flex flex-col items-center justify-center h-full w-full space-y-3">
                <div className="h-20 w-20 relative">
                    <Image
                        src={img}
                        fill
                        alt="Image"
                        className="object-contain"
                    />
                </div>
                <div>
                    <h4 className="text-zinc-700 font-semibold text-sm">{label}</h4>
                </div>
            </div>
        </div>
    )
}
