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
                        src="https://res.cloudinary.com/dkaj1swfy/image/upload/v1706765773/xlxkuqvxsrrnbthmqkqe.jpg"
                        alt="Image"
                        fill
                        className="object-cover object-top"
                    />
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    )
}
