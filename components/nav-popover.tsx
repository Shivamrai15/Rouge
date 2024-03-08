import { Category } from "@/types"
import Link from "next/link";

interface NavPopoverProps {
    category : Category[];
    keyValue : "MEN" | "WOMEN";
}

import {
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export const NavPopover = ({
    category,
    keyValue
} : NavPopoverProps) => {

    
    const topwearCategory = category.filter((c) => c.classification.toString() === "TOPWEAR");
    const bottomwearCategory = category.filter((c) => c.classification.toString() === "BOTTOMWEAR");
    const footwearCategory = category.filter((c) => c.classification.toString() === "FOOTWEAR");
    const innerwearCategory = category.filter((c) => c.classification.toString() === "INNERWEARANDSLEEPWEAR");
    
    return (
        <ul className="grid grid-cols-4 items-start gap-x-1 w-[36rem] p-8 ">
            <div className="w-32">
                <h2 className="text-zinc-800 font-semibold">Topwear</h2>
                <div className="mt-3 flex flex-col gap-y-2">
                    {
                        topwearCategory.map((cat)=>(
                            <li key={cat.id}>
                                <NavigationMenuLink asChild key={cat.id}>
                                        <Link
                                            href={`/category/${cat.id}?category=${keyValue}&page=1`}
                                            className="font-medium text-zinc-600"
                                        >
                                            {cat.name}
                                        </Link>
                                </NavigationMenuLink>
                            </li>
                        ))
                    }
                </div>
            </div>
            <div className="w-32">
                <h2 className="text-zinc-800 font-semibold">Bottomwear</h2>
                <div className="mt-3 flex flex-col gap-y-2">
                    {
                        bottomwearCategory.map((cat)=>(
                            <li key={cat.id}>
                                <NavigationMenuLink asChild key={cat.id}>
                                        <Link
                                            href={`/category/${cat.id}?category=${keyValue}&page=1`}
                                            className="font-medium text-zinc-600"
                                        >
                                            {cat.name}
                                        </Link>
                                </NavigationMenuLink>
                            </li>
                        ))
                    }
                </div>
            </div>
            <div className="w-32">
                <h2 className="text-zinc-800 font-semibold">Innerwear</h2>
                <div className="mt-3 flex flex-col gap-y-2">
                    {
                        innerwearCategory.map((cat)=>(
                            <li key={cat.id}>
                                <NavigationMenuLink asChild key={cat.id}>
                                        <Link
                                            href={`/category/${cat.id}?category=${keyValue}&page=1`}
                                            className="font-medium text-zinc-600"
                                        >
                                            {cat.name}
                                        </Link>
                                </NavigationMenuLink>
                            </li>
                        ))
                    }
                </div>
            </div>
            <div className="w-32">
                <h2 className="text-zinc-800 font-semibold">Footwear</h2>
                <div className="mt-3 flex flex-col gap-y-2">
                    {
                        footwearCategory.map((cat)=>(
                            <li key={cat.id}>
                                <NavigationMenuLink asChild key={cat.id}>
                                        <Link
                                            href={`/category/${cat.id}?category=${keyValue}&page=1`}
                                            className="font-medium text-zinc-600"
                                        >
                                            {cat.name}
                                        </Link>
                                </NavigationMenuLink>
                            </li>
                        ))
                    }
                </div>
            </div>
            
        </ul>
    )
}
