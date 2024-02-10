import Link from "next/link"
import { Button } from "../ui/button"
import Image from "next/image"

export const EmptyWishlist = () => {
    return (
        <div className="flex flex-col h-full items-center justify-center py-20 space-y-8">
            <h2 className="text-zinc-700 font-bold text-lg md:text-xl">
                Your Wishlist Is Empty
            </h2>
            <Image
                src="/assets/797316_16851-NQV2LW.svg"
                alt="Shopping Bag"
                height={300}
                width={300}
            />
            <Button
                asChild
                size="lg"
            >
                <Link
                    href="/"
                    className="font-semibold"
                >
                    CONTINUE SHOPPING
                </Link>
            </Button>
        </div>
    )
}
