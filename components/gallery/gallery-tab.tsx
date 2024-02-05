import Image from "next/image"

import { ProductImage } from "@/types"
import { TabsTrigger } from "../ui/tabs"

interface GalleryTabProps {
    image : ProductImage
}


export const GalleryTab = ({
    image
} : GalleryTabProps ) => {
    return (
        <TabsTrigger value={image.id} className="relative flex aspect-square md:cursor-pointer overflow-hidden">
            <Image
                    src={image.url}
                    alt="Image"
                    fill
                    className="object-cover aspect-square overflow-hidden"
            />
        </TabsTrigger>
    )
}
