"use client";

import { OrderCard } from "@/components/order/order-card";
import { OrderCardSkeleton } from "@/components/order/order-card-skeleton";
import { Separator } from "@/components/ui/separator";
import { useOrder } from "@/hooks/use-order";
import { Comment, Order, OrderProduct } from "@prisma/client";

const OrdersPage = () => {

    const { data, isLoading } : { data : (Order & {
        orderProduct : (OrderProduct & {
            comment : Comment | null
        })[],
        
    })[], isLoading: boolean } = useOrder();


    return (
        <div className="bg-white min-h-full">
            <div className="w-full flex justify-center">
                <div className="max-w-3xl w-full p-4 mt-8 md:mt-16 ">
                    <h2 className="font-bold text-lg md:text-2xl lg:text-3xl text-zinc-700">
                        Your Orders
                    </h2>
                    <Separator className="bg-zinc-300 mt-3"/>
                    <div className="flex flex-col mt-4">
                        {
                            isLoading ? (
                                <div className="w-full">
                                    <OrderCardSkeleton/>
                                    <OrderCardSkeleton/>
                                    <OrderCardSkeleton/>
                                </div>
                            ) : (
                                data.map((order)=>(
                                    order.orderProduct.map((product)=>(
                                        <OrderCard 
                                            key={product.id}
                                            data={product}
                                            date = { order.createdAt }
                                            paid = { order.isPaid }
                                        />
                                    ))
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrdersPage;