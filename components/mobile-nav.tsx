"use client"

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Menu } from "lucide-react";
import { Category } from "@/types";
import { getCategories } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

interface MobileNavbarProps {
    data : Category[]
}

export const MobileNavbar = ({
    data
} : MobileNavbarProps ) => {

    const [open, setOpen] = useState(false);
    const menCategory = data.filter((category) => category.type.toString() === "UNISEX" || category.type.toString() === "MEN")
    const womenCategory = data.filter((category) => category.type.toString() === "UNISEX" || category.type.toString() === "WOMEN")


    return (
        <Sheet
            open = {open}
            onOpenChange={(open)=>{
                if(!open){
                    setOpen(false)
                }
            }}
        >
            <SheetTrigger onClick={()=>setOpen(true)} className="md:hidden">
                <Menu className="h-6 w-6 text-zinc-700 mr-3" />
            </SheetTrigger>
            <SheetContent side="left" className="overflow-y-auto">
                <SheetHeader>
                    <SheetTitle className="text-zinc-800 font-semibold">
                        Categories
                    </SheetTitle>
                </SheetHeader>
                <div className="py-4">
                    <h2 className="font-bold text-zinc-700">Men</h2>
                    <div className="flex flex-col gap-y-2">
                        <Accordion type="multiple" >
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-sm text-zinc-700 font-semibold">Topwears</AccordionTrigger>
                                <AccordionContent>
                                    <div className="w-full flex flex-col px-2 space-y-1">
                                        {
                                            getCategories("MEN", "TOPWEAR", menCategory).map((value)=>(
                                                <Link
                                                    href={value.url}
                                                    key={value.label}
                                                    className="text-sm text-zinc-700 font-medium"
                                                    onClick={()=>setOpen(false)}
                                                >
                                                    {value.label}
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-sm text-zinc-700 font-semibold">Bottomwears</AccordionTrigger>
                                <AccordionContent>
                                    <div className="w-full flex flex-col px-2 space-y-1">
                                        {
                                            getCategories("MEN", "BOTTOMWEAR", menCategory).map((value)=>(
                                                <Link
                                                    href={value.url}
                                                    key={value.label}
                                                    className="text-sm text-zinc-700 font-medium"
                                                    onClick={()=>setOpen(false)}
                                                >
                                                    {value.label}
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-sm text-zinc-700 font-semibold">Innerwears</AccordionTrigger>
                                <AccordionContent>
                                    <div className="w-full flex flex-col px-2 space-y-1">
                                        {
                                            getCategories("MEN", "INNERWEARANDSLEEPWEAR", menCategory).map((value)=>(
                                                <Link
                                                    href={value.url}
                                                    key={value.label}
                                                    className="text-sm text-zinc-700 font-medium"
                                                    onClick={()=>setOpen(false)}
                                                >
                                                    {value.label}
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-sm text-zinc-700 font-semibold">Footwears</AccordionTrigger>
                                <AccordionContent>
                                    <div className="w-full flex flex-col px-2 space-y-1">
                                        {
                                            getCategories("MEN", "FOOTWEAR", menCategory).map((value)=>(
                                                <Link
                                                    href={value.url}
                                                    key={value.label}
                                                    className="text-sm text-zinc-700 font-medium"
                                                    onClick={()=>setOpen(false)}
                                                >
                                                    {value.label}
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
                <div className="py-4">
                    <h2 className="font-bold text-zinc-700">Women</h2>
                    <div className="flex flex-col gap-y-2">
                        <Accordion type="multiple" >
                            <AccordionItem value="item-1" >
                                <AccordionTrigger className="text-sm text-zinc-700 font-semibold">Topwears</AccordionTrigger>
                                <AccordionContent>
                                    <div className="w-full flex flex-col px-2 space-y-1">
                                        {
                                            getCategories("WOMEN", "TOPWEAR", womenCategory).map((value)=>(
                                                <Link
                                                    href={value.url}
                                                    key={value.label}
                                                    className="text-sm text-zinc-700 font-medium"
                                                    onClick={()=>setOpen(false)}
                                                >
                                                    {value.label}
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-sm text-zinc-700 font-semibold">Bottomwears</AccordionTrigger>
                                <AccordionContent>
                                    <div className="w-full flex flex-col px-2 space-y-1">
                                        {
                                            getCategories("WOMEN", "BOTTOMWEAR", womenCategory).map((value)=>(
                                                <Link
                                                    href={value.url}
                                                    key={value.label}
                                                    className="text-sm text-zinc-700 font-medium"
                                                    onClick={()=>setOpen(false)}
                                                >
                                                    {value.label}
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-sm text-zinc-700 font-semibold">Innerwears</AccordionTrigger>
                                <AccordionContent>
                                    <div className="w-full flex flex-col px-2 space-y-1">
                                        {
                                            getCategories("WOMEN", "INNERWEARANDSLEEPWEAR", womenCategory).map((value)=>(
                                                <Link
                                                    href={value.url}
                                                    key={value.label}
                                                    className="text-sm text-zinc-700 font-medium"
                                                    onClick={()=>setOpen(false)}
                                                >
                                                    {value.label}
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-sm text-zinc-700 font-semibold">Footwears</AccordionTrigger>
                                <AccordionContent>
                                    <div className="w-full flex flex-col px-2 space-y-1">
                                        {
                                            getCategories("WOMEN", "FOOTWEAR", womenCategory).map((value)=>(
                                                <Link
                                                    href={value.url}
                                                    key={value.label}
                                                    className="text-sm text-zinc-700 font-medium"
                                                    onClick={()=>setOpen(false)}
                                                >
                                                    {value.label}
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
