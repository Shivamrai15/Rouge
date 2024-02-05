import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

export const Login = () => {
    return (
        <div className="h-[calc(100%-4rem)] w-full flex items-center justify-center">
            <div className="flex flex-col items-center gap-y-6">
                <h2 className="text-lg font-bold md:text-xl text-zinc-700">
                    PLEASE LOG IN 
                </h2>
                <p className="max-w-sm text-sm font-semibold text-center px-4 md:px-0" >
                    Login to view items in your wishlist
                </p>
                <Image
                    src="/assets/login.png"
                    height={100}
                    width={100}
                    alt="Login"
                />
                <Button
                    size="lg"
                    asChild
                >
                    <Link
                        href = "/login"
                        className="font-semibold"
                    >
                        LOGIN
                    </Link>
                </Button>
            </div>
        </div>
    )
}
