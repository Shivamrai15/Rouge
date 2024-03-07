"use client";

import axios from "axios";
import { toast } from "sonner";
import qs from "query-string"
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";
import { Address } from "@prisma/client";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCheckoutAddress } from "@/hooks/use-checkout-address";
import { useAddress } from "@/hooks/use-address";
import { useUpdateAddessModal } from "@/hooks/use-update-address-modal";

interface AddressCardProps {
    data : Address
}

export const AddressCard = ({
    data
} : AddressCardProps ) => {

    const [ loading, setLoading ] = useState(false);
    const { mutate } = useAddress();
    const { onOpen } = useUpdateAddessModal();
    const { address, addAddress, removeAddress } = useCheckoutAddress();
    
    const isSelected = useMemo(()=>{
        
        if ( !address ) return false;
        return address.id === data.id;

    }, [data, addAddress, address, removeAddress]);

    const handleDelete = async() => {
        try {
            
            setLoading(true);
            const url = qs.stringifyUrl({
                url : "/api/v1/address",
                query : {
                    id : data.id
                }
            });
            await axios.delete(url);
            mutate();
            removeAddress();

        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    return (
        <Card className={cn(
            "w-full pt-5 select-none",
            isSelected && "shadow-md"
        )}>
            <CardContent className="flex w-full">
                <div className="w-10">
                    <Checkbox
                        checked = {isSelected}
                        onClick={()=>addAddress(data)}
                    />
                </div>
                <div className="w-full space-y-2">
                    <div className="flex items-center gap-4">
                        <h3 className="font-bold text-zinc-800" >{data.name}</h3>
                        {
                            data.isDefault && (
                                <Badge className="bg-neutral-700 hover:bg-neutral-700/80 cursor-default">
                                    Default
                                </Badge>
                            )
                        }
                    </div>
                    <p className="text-sm font-semibold text-zinc-600 max-w-sm">
                        { `${data.address}, ${data.landmark}, ${data.town}, ${data.district}, ${data.state} - ${data.zipCode}` }
                    </p>
                    <p className="text-sm font-semibold text-zinc-600 max-w-sm">
                        <span className="text-zinc-950 mr-1">
                            Phone Number - 
                        </span>
                        {data.phoneNumber}
                    </p>
                    {
                        isSelected && (
                            <div className="flex items-center gap-4">
                                <Button
                                    size = "sm"
                                    variant = "outline"
                                    className = "text-sm font-semibold"
                                    disabled = { loading }
                                    onClick = {onOpen}
                                >
                                    Edit
                                </Button>
                                <Button
                                    size = "sm"
                                    className = "text-sm font-semibold"
                                    disabled = { loading }
                                    onClick = { handleDelete }
                                >
                                    Remove
                                </Button>
                            </div>
                        )
                    }
                </div>
            </CardContent>
        </Card>
    )
}
