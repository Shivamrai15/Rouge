import { getOrder, getOrderProductById } from "@/actions/order";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { format } from "date-fns"
import { ShippingAddress } from "@/components/order/shipping-address";
import { Rating } from "@/components/order/rating";
import { Review } from "@/components/order/review";

interface OrderDetailsPage {
    params :  { orderId : string }
}

export const revalidate = 0;

const OrderDetailsPage = async({
    params
} : OrderDetailsPage ) => {

    const orderProduct = await getOrderProductById(params.orderId);

    if ( !orderProduct ) {
        return null;
    }

    const order = await getOrder(orderProduct.orderId);

    if (!order){
        return null;
    }

    return (
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 relative mt-10">
                <div className="p-4 w-full space-y-8">
                    <div className="flex justify-center md:justify-end">
                        <div className="w-full md:max-w-72 aspect-[3/4] relative">
                            <Image
                                src={orderProduct.productImage}
                                fill
                                alt="Product Image"
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center md:justify-end">
                        <div className="md:max-w-72 w-full">
                            <h4 className="font-semibold text-zinc-700">
                                {orderProduct.name}
                            </h4>
                            <p className="text-sm font-medium text-zinc-600">
                                {orderProduct.about}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 p-4">
                    <div className="w-full flex justify-center">
                        <div className="w-full max-w-3xl space-y-6 md:space-y-8">
                            <div>
                                <div className={cn(
                                    "p-4 w-full rounded-t-md text-white",
                                    order.isPaid ? "bg-emerald-600 rounded-t-md" : "bg-red-500 rounded-md"
                                )}>
                                    <h5 className="font-bold">
                                        { order.isPaid ? "Payment Confirmed" : "Payment Failed"  }
                                    </h5>
                                    <p className="text-sm font-medium">
                                    0n {format(order.createdAt, "EE, dd LLL yyyy")}
                                    </p>
                                </div>
                                {
                                    order.isPaid && (
                                        <div className="bg-gray-200/70 p-4 rounded-b-md flex justify-between items-center">
                                            <Rating
                                                comment={orderProduct.comment}
                                                orderProductId={orderProduct.id}
                                                productId={orderProduct.productId}
                                            />
                                            <Review
                                                comment={orderProduct.comment}
                                                orderProductId={orderProduct.id}
                                                productId={orderProduct.productId}
                                                productImage={orderProduct.productImage}
                                                productName={orderProduct.about}
                                            />
                                        </div>
                                    )
                                }
                            </div>
                            <ShippingAddress
                                shippingId = { order.shippingId }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default OrderDetailsPage;
