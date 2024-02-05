"use client";

import Image from "next/image";
import { ProductImage } from "@/types";

interface GalleryProps {
    images : ProductImage[]
}

import {
    Tabs,
    TabsContent,
    TabsList
} from "@/components/ui/tabs";
import { GalleryTab } from "./gallery-tab";

export const Gallery = ({
    images
} : GalleryProps) => {
    
    return (
        <Tabs
            defaultValue={images[0].id}
            className="flex flex-col-reverse md:px-24 lg:px-20 xl:px-28 relative"
            role="div"
        >
            <div className="mx-auto mt-6 lg:mt-2 w-full max-w-2xl lg:max-w-none lg:absolute top-0 left-0 lg:w-16">
                <TabsList className="grid grid-cols-4 lg:grid-cols-1 gap-4 md:gap-6 lg:gap-4 h-auto bg-white">
                    {
                        images.map((image)=>(
                            <GalleryTab key={image.id} image = {image} />
                        ))
                    }
                </TabsList>
            </div>
            {
                images.map((image)=>(
                    <TabsContent
                        key={image.id}
                        value={image.id}

                        className="aspect-[3/4] relative overflow-hidden"
                    >
                        <Image
                            src={ image.url }
                            alt="Product Image"
                            fill
                            className="object-cover aspect-[3/4]"
                        />
                    </TabsContent>
                ))
            }
        </Tabs>
    );
}
