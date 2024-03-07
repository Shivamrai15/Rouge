import { TbShoppingBag } from "react-icons/tb";
import { BadgeIndianRupee, Truck } from "lucide-react";

export const Hero = () => {
    return (
        <div className='rounded-lg bg-gray-50 p-4 grid grid-cols-3'>
            <div className="aspect-[2/1] flex flex-col gap-y-1 items-center justify-center">
                <TbShoppingBag className="h-14 w-14 text-emerald-500"/>
                <p className="text-[11px] font-semibold text-zinc-600">INSTANT CHECKOUT</p>
            </div>
            <div className="aspect-[2/1] flex flex-col gap-y-1 items-center justify-center">
                <BadgeIndianRupee className="h-14 w-14 text-emerald-500"/>
                <p className="text-[11px] font-semibold text-zinc-600">FASTER REFUNDS</p>
            </div>
            <div className="aspect-[2/1] flex flex-col gap-y-1 items-center justify-center">
                <Truck className="h-14 w-14 text-emerald-500"/>
                <p className="text-[11px] font-semibold text-zinc-600">FASTER DELIVERY</p>
            </div>
        </div>
    )
}
