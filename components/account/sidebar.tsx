"use client";

import Link from "next/link";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";


export const Sidebar = () => {

    const pathname = usePathname();

    const links = useMemo(()=>[
        {
            url : "/my/dashboard",
            active : pathname === "/my/dashboard",
            label : "Overview"
        },
        {
            url : "/my/profile",
            active : pathname === "/my/profile",
            label : "Profile"
        },
        {
            url : "/orders",
            active : pathname === "/orders",
            label : "Orders"
        },
        {
            url : "/wishlist",
            active : pathname === "/wishlist",
            label : "Wishlists"
        },
        {
            url : "#",
            active : pathname === "#",
            label : "Coupons"
        },
        {
            url : "/my/address",
            active : pathname === "/my/address",
            label : "Address"
        },

    ], [pathname]);

    return (
        <div className="flex flex-col gap-y-3">
            {
                links.map((link) => (
                    <Link
                        key={link.url}
                        href={link.url}
                        className={cn(
                            "font-semibold text-zinc-600",
                            link.active && "text-emerald-500"
                        )}
                    >
                        {link.label}
                    </Link>
                ))
            }
        </div>
    )
}
