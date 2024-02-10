import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

export const Billboard = () => {
    
    return (
        <Carousel 
            opts={{
                align: "start",
                loop : true
            }}
            className="w-full"
        >
            <CarouselContent>
                <CarouselItem className="aspect-[5/2] w-full relative">
                    <Image 
                        src="/assets/34074844_8128527.svg"
                        alt="Image"
                        fill
                        className="object-cover object-top"
                    />
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    )
}
