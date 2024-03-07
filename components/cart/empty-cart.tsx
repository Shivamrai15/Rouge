import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export const EmptyCart = () => {
    return (
        <div className="h-[calc(100%-4rem)] w-full flex items-center justify-center">
            <div className="flex flex-col items-center gap-y-8">
                <Image
                    src="/assets/FX13_bag.svg"
                    height={80}
                    width={80}
                    alt="Shopping Bag"
                />
                <div className="text-center space-y-1 max-w-sm">
                    <p className="text-zinc-700 font-bold text-lg md:text-xl">Your cart is lighter than a cloud.</p>
                    <p className="px-4 md:px-0 text-sm text-zinc-600 font-semibold">Whispers of &quot;buy me&quot; echoing in your empty cart? We hear you.</p>
                </div>
                <Button
                    size="lg"
                    asChild
                >
                    <Link
                        href="/wishlist"
                        className="font-semibold"
                    >
                        ADD ITEM FROM WISHLIST
                    </Link>
                </Button>
            </div>
        </div>
    )
}
