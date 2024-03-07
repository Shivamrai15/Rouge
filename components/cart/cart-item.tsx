"use client"

import { CartSelectedItem, Product } from "@/types"
import { X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { formatter } from "@/lib/utils"
import { useCart } from "@/hooks/use-cart"
import { useCheckout } from "@/hooks/use-checkout"
import { useEffect, useState } from "react"
import { QuantityModal } from "../modals/quantity-modal"

interface CartItemProps {
    data : Product
}

export const CartItem = ({
    data
} : CartItemProps) => {

    const { items, removeItem } = useCart();
    const { checkOutItems, selectItem, removeSelectedItems } = useCheckout();

    const [ mounted, setMounted ] = useState(false);
    const [ open, setOpen ] = useState(false)
    const [ quantity, setQuantity ] = useState(items.find((item)=>item.id === data.id)?.checkOutQuantity || 1);

    const handleSelectItem = () => {
        const formattedData : CartSelectedItem = {
            id : data.id,
            price : data.price,
            quantity,
            image : data.productImages[0].url,
            about : data.about,
            name : data.name,
            size : data.size.value
        }
        selectItem(formattedData);
    }

    const onRemoveItem = ()=>{
        removeSelectedItems(data.id);
        removeItem(data.id);
    }

    useEffect(()=>{
        setMounted(true);
    }, []);

    
    if (!mounted) {
        return null;
    }


    return (
        <>
            <QuantityModal 
                open = { open }
                quantity = { quantity }
                setOpen = { setOpen }
                setQuantity = { setQuantity }
                stock = { data.stock }
                productId = { data.id }
            />
            <li
                className="flex py-4 px-2 md:px-4 rounded-md border"
            >
                <div className="relative h-32 w-24 rounded-md overflow-hidden sm:h-48 sm:w-36">
                    <Image
                        src={data.productImages[0].url}
                        fill
                        alt="Product Item"
                        className="object-cover"
                    />
                    <div className="absolute left-2 top-2">
                        <Checkbox
                            checked = { !!checkOutItems.find((item)=> item.id === data.id) }
                            onClick={ handleSelectItem }
                        />
                    </div>
                </div>
                <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="absolute z-10 right-0 -top-2">
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={ onRemoveItem }
                        >
                            <X className="text-zinc-600" />
                        </Button>
                    </div>
                    <div className="relative pr-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div className="flex flex-col">
                            <p className="md:text-lg font-bold text-zinc-700 max-w-36 md:max-w-sm truncate">
                                {data.name}
                            </p>
                            <p className="text-sm font-semibold max-w-36 md:max-w-sm text-zinc-600 truncate">
                                {data.about}
                            </p>
                            <div className="md:my-3 md:space-y-2">
                                <p className="font-semibold">
                                    Size - {data.size.value}
                                </p>
                                <p className="font-extrabold">
                                    {formatter.format(data.price)}
                                </p>
                            </div>
                            <div
                                className = "font-semibold text-zinc-700 cursor-default md:cursor-pointer"
                                role="button"
                                onClick={ () => setOpen(true) }
                            >
                                Qty - { quantity }
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}
