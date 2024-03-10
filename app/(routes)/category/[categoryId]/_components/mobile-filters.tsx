"use client";
import { Button } from "@/components/ui/button";
import { Color, PriceRange, Size } from "@/types"
import { ListFilter } from "lucide-react";

import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Filter } from "./filter";
import { useFilter } from "@/hooks/use-filter";

interface MobileFiltersProps {
    sizes : Size[];
    colors : Color[];
}

export const MobileFilters = ({
    sizes,
    colors
} : MobileFiltersProps) => {

    const { isOpen, onChange } = useFilter();

    const priceRange : PriceRange[] = [
        { id : "0-500", name : "Rs. 0 to Rs. 500", value : "0-500" },
        { id : "500-1500", name : "Rs. 500 to Rs. 1500", value : "500-1500" },
        { id : "1500-3000", name : "Rs. 1500 to Rs. 3000", value : "1500-3000" },
        { id : "3000-5000", name : "Rs. 3000 to Rs. 5000", value : "3000-5000" },
        { id : "5000", name : "Above Rs. 5000", value : "5000" },
    ];

    return (
        <Drawer open = { isOpen } onOpenChange={onChange} >
            <DrawerTrigger className="lg:hidden" asChild>
                <Button variant="outline" onClick={()=>onChange(true)}>
                    <ListFilter className="h-4 w-4 mr-2"/>
                    Filters
                </Button>
            </DrawerTrigger>
            <DrawerContent className="w-full sm:px-20">
                <DrawerHeader>
                    <DrawerTitle>
                        Filters
                    </DrawerTitle>
                </DrawerHeader>
                <div className="px-4 max-h-[60vh] overflow-y-auto">
                    <Filter
                        valueKey = "sizeId"
                        name = "Sizes"
                        data = {sizes}
                    />
                    <Filter
                        valueKey = "colorId"
                        name = "Colors"
                        data = {colors}
                    />
                    <Filter
                        valueKey = "price"
                        name = "Price"
                        data = {priceRange}
                    />
                </div>
            </DrawerContent>
        </Drawer>
    )
}