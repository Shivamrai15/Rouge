"use client"

import { ProductImage } from "@/types"

interface ModalGalleryProps {
    images : ProductImage[]
}

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs";
import Image from "next/image";

export const ModalGallery = ({
    images
} : ModalGalleryProps ) => {
    return (
        <Tabs
            defaultValue={images[0].id}
            className="flex flex-col-reverse"
            role="div"
        >
            <div className="mx-auto mt-6 w-full max-w-2xl">
                <TabsList className="grid grid-cols-4 gap-4 h-auto bg-white">
                    {
                        images.map((image)=>(
                            <TabsTrigger key={image.id} value={image.id} className="relative flex aspect-square md:cursor-pointer overflow-hidden">
                                <Image
                                        src={image.url}
                                        alt="Image"
                                        fill
                                        className="object-cover aspect-square overflow-hidden"
                                />
                            </TabsTrigger>
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
    )
}
