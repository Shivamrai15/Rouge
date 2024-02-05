"use client";
import { Button } from "@/components/ui/button";
import { Color, Size } from "@/types"
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

    return (
        <Drawer open = { isOpen } onOpenChange={onChange} >
            <DrawerTrigger className="lg:hidden" asChild>
                <Button variant="outline" onClick={()=>onChange(true)}>
                    <ListFilter className="h-4 w-4 mr-2"/>
                    Filters
                </Button>
            </DrawerTrigger>
            <DrawerContent className="max-w-md mx-auto">
                <DrawerHeader>
                    <DrawerTitle>
                        Filters
                    </DrawerTitle>
                </DrawerHeader>
                <div className="px-4">
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
                </div>
            </DrawerContent>
        </Drawer>
    )
}