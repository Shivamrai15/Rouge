"use client";

import qs from "query-string";
import { Color, PriceRange, Size } from "@/types";
import { useSearchParams, useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useFilter } from "@/hooks/use-filter";

interface FilterProps {
    valueKey : string;
    name : string;
    data : (Size | Color | PriceRange )[]
}

export const Filter = ({
    valueKey,
    name,
    data
}  :FilterProps) => {

    const searchParams = useSearchParams();
    const router = useRouter();
    const { onChange } = useFilter();

    const selectedValue =  searchParams.get(valueKey);

    const onClick = ( id: string )=>{
        onChange(false);
        const currentQuery = qs.parse(searchParams.toString());
        const query = {
            ...currentQuery,
            [valueKey] : id,
            page : "1"
        }

        if (currentQuery[valueKey] === id){
            query[valueKey] = null;
        }

        const url = qs.stringifyUrl({
            url : window.location.href,
            query
        }, {
            skipNull : true
        });

        router.push(url);

    }

    return (
        <div className="mb-8">
            <h3 className="font-semibold text-zinc-600">
                {name}
            </h3>
            <Separator className="mb-4 mt-1.5"/>
            <div className="flex flex-col gap-3">
                {
                    data.map((filter)=>(
                        <div
                            key={filter.id}
                            className="flex items-center space-x-4"
                        >
                            <Checkbox
                                id={filter.id}
                                checked = {selectedValue === filter.id}
                                onClick={()=>onClick(filter.id)}
                            />
                            {
                                valueKey === "colorId" && (
                                    <div className="h-4 w-4 rounded-full" style={{backgroundColor : filter.value}} />                               
                                )
                            }
                            <Label htmlFor={filter.id} className="text-zinc-600" >
                                {
                                    valueKey === "sizeId" ? filter.value : filter.name
                                }
                            </Label>  
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
