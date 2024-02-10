import { auth } from "@/auth";
import { cn } from "@/lib/utils";
import { Login } from "@/components/wishlist/login";
import { WishlistItems } from "@/components/wishlist/wishlist-items";
import { Metadata } from "next";

export const revalidate = 0;

export const metadata : Metadata = {
    title : "Wishlist"
}

const WishlistPage = async() => {

    const session = await auth();

    return (
        <div className = {cn(
            "bg-white min-h-full",
            !session && "flex items-center justify-center"
        )}>
            {
                session ? (
                    <WishlistItems/>
                ) : (
                    <Login/>
                )
            }
        </div>
    );
}

export default WishlistPage;