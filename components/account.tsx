"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
    Heart,
    LogOut,
    ShoppingCart,
    User,
} from "lucide-react";
import { RiCoupon3Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

interface AccountProps {
    session : boolean;
    name : string;
}


export const Account = ({
    session,
    name
} : AccountProps) => {

    const router = useRouter();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
                <FaRegUser className="h-6 w-6 mx-2 text-zinc-700"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52" align="end">
                <DropdownMenuLabel>
                    {name}
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem
                    className="flex items-center text-zinc-700 font-semibold md:cursor-pointer"
                    onClick={() => router.push("/my/dashboard")}
                >
                    <User className="mr-3 h-4 w-4"/>
                    Account
                </DropdownMenuItem>
                <DropdownMenuItem
                    className="flex items-center text-zinc-700 font-semibold md:cursor-pointer"
                    onClick={() => router.push("/orders")}
                >
                    <ShoppingCart className="mr-3 h-4 w-4"/>
                    Orders
                </DropdownMenuItem>
                <DropdownMenuItem
                    className="flex items-center text-zinc-700 font-semibold md:cursor-pointer"
                    onClick={() => router.push("/wishlist")}
                >
                    <Heart className="mr-3 h-4 w-4"/>
                    Wishlist
                </DropdownMenuItem>
                <DropdownMenuItem
                    className="flex items-center text-zinc-700 font-semibold md:cursor-pointer"
                    onClick={() => router.push("#")}
                >
                    <RiCoupon3Line className="mr-3 h-4 w-4"/>
                    Coupons
                </DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem
                    className="flex items-center text-zinc-700 font-semibold md:cursor-pointer"
                    onClick={()=>signOut()}
                    disabled = {!session}
                >
                    <LogOut className="mr-3 h-4 w-4"/>
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
