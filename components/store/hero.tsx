import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export const Hero = () => {
    return (
        <div className="w-full grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            <div className="w-full aspect-[2/.9] bg-gradient-to-r from-[#C5A090] to-85% to-[#EEE3DF] rounded-lg md:rounded-xl grid grid-cols-5">
                <div className="col-span-2 flex items-center">
                    <div className="flex flex-col pl-4 sm:pl-12">
                        <p className="text-white font-semibold">Hot Deal</p>
                        <p className="font-bold text-xl sm:text-3xl md:text-4xl text-white">
                            Fragrances
                        </p>
                        <Button 
                            className="bg-white mt-4 text-zinc-800 font-semibold sm:text-base hover:bg-zinc-50 transition"
                            size="lg"
                            asChild
                        >
                            <Link
                                href="/"
                            >
                                Discover Now
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="p-4 relative col-span-3">
                    <Image
                        src="/assets/3d07615c-1d02-49fb-98d1-627f47a1cec11680242234217VOCEVIVAINTENSEV100ML1.avif"
                        alt="Image"
                        fill
                        className="object-contain bg-blend-color-burn"
                    />
                </div>
            </div>
            <div className="w-full aspect-[2/.9] bg-gradient-to-r from-rose-400 to-85% to-rose-200 rounded-lg md:rounded-xl grid grid-cols-5">
                <div className="col-span-2 flex items-center">
                    <div className="flex flex-col pl-4 sm:pl-12">
                        <p className="text-white font-semibold">Hot Deal</p>
                        <p className="font-bold text-xl sm:text-3xl md:text-4xl text-white">
                            Heels
                        </p>
                        <Button 
                            className="bg-white mt-4 text-rose-400 font-semibold sm:text-base hover:bg-zinc-50 transition"
                            size="lg"
                            asChild
                        >
                            <Link
                                href="/category/65bb45f5a4ec8f0bf3112a0a?category=WOMEN&page=1"
                            >
                                Shop Now
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="p-4 relative col-span-3">
                    <Image
                        src="/assets/cff38f02-6e83-47fb-bfa5-0e31b2f472e71676092353855DressBerryBlackPUBlockSandalswithBuckles7.avif"
                        alt="Image"
                        fill
                        className="object-contain bg-blend-color-burn"
                    />
                </div>
            </div>
        </div>
    )
}
