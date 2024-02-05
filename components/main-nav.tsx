"use client";


import { Category } from "@/types";


import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NavPopover } from "./nav-popover";


interface MainNavProps {
    data : Category[]
}

export const MainNav = ({
    data
} : MainNavProps) => {

    const menCategory = data.filter((category) => category.type.toString() === "UNISEX" || category.type.toString() === "MEN")
    const womenCategory = data.filter((category) => category.type.toString() === "UNISEX" || category.type.toString() === "WOMEN")

    return (
        <NavigationMenu className="mx-6">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-semibold text-zinc-800 text-base">Men</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavPopover category={menCategory} keyValue="MEN" />
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-semibold text-zinc-800 text-base">Women</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavPopover category={womenCategory} keyValue="WOMEN" />
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
