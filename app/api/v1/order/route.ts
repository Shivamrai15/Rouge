import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { CartSelectedItem } from "@/types";
import { Address} from "@prisma/client";
import { db } from "@/lib/db";

export async function POST ( request : Request ) {
    try {

        const { products, address } : { products: CartSelectedItem[], address : Address } = await request.json();
        const session = await auth();

        if (!session || !session.user || !session.user.id) {
            return new NextResponse("Unauthorized", {status : 401});
        }

        if (!products || !address ) {
            return new NextResponse("Invalid Credentials", {status : 401});
        }

        const shippingAddress = await db.shippingAddress.create({
            data : {
                name : address.name,
                address : address.address,
                district : address.district,
                landmark : address.landmark,
                mobileNumber : address.phoneNumber,
                state : address.state,
                town : address.town,
                zipCode : address.zipCode,
            }
        });

        const order = await db.order.create({
            data : {
                userId : session.user.id,
                shippingId : shippingAddress.id,
            }
        })

        const formattedProducts   = products.map((product)=>{
            return {
                orderId : order.id,
                productId : product.id,
                productImage : product.image,
                quantity : product.quantity,
                name : product.name,
                about : product.about,
                size : product.size
            }
        })

        const orderProducts = await db.orderProduct.createMany({
            data : formattedProducts
        });

        return Response.json({ orderId : order.id });
        
    } catch (error) {
        console.error("ORDER POST API", error);
        return new NextResponse("Internal server error", { status: 500 });
    }
}

export async function GET ( _request: Request ) {
    try {
        
        const session = await auth();
        if (!session || !session.user || !session.user.id) {
            return new NextResponse("Unauthorized", {status : 401});
        }

        const resposne = await db.order.findMany({
            where : {
                userId : session.user.id
            },
            include : {
                orderProduct : {
                    include : {
                        comment : true
                    }
                },
            },
            orderBy : {
                createdAt : "desc"
            }
        });

        return NextResponse.json(resposne);

    } catch (error) {
        console.error("ORDER GET API", error);
        return new NextResponse("Internal server error", { status: 500 });
    }
}