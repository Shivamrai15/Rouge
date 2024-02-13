"use client";

import { cn } from "@/lib/utils";
import { useCart } from "@/hooks/use-cart";
import { EmptyCart } from "@/components/cart/empty-cart";
import { Container } from "@/components/ui/container";
import { CartItem } from "@/components/cart/cart-item";
import { Summary } from "@/components/cart/summary";
import { Hero } from "@/components/cart/hero";


const CartPage = () => {

    const { items } = useCart();

    return (
        <div className={cn(
            "bg-white min-h-full", 
            items.length === 0 && "h-[90vh]"
        )}>
            {
                items.length === 0 && (
                    <EmptyCart />
                )
            }
            {
                items.length !== 0 && (
                    <Container>
                        <div className="px-4 sm:px-6 lg:px-8 xl:px-24 h-full">
                            <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                                <div className="lg:col-span-7">
                                    <ul className="space-y-4">
                                        {
                                            items.map((item)=>(
                                                <CartItem
                                                    key = {item.id}
                                                    data = {item}
                                                />
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-y-8 w-full sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 mt-16">
                                    <Summary />
                                    <Hero />
                                </div>
                            </div>
                        </div>
                    </Container>
                )
            }
            
        </div>
    )
}

export default CartPage;