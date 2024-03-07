import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH (
    request : Request,
    { params } : { params : { orderId : string }}
) {
    try {
        
        const { isPaid } : { isPaid : boolean } = await request.json();
        const session = await auth();

        if (!session || !session.user || !session.user.id) {
            return new NextResponse("Unauthorized", {status : 401});
        }

        if (!isPaid) {
            return new NextResponse("Invalid Credentials", {status : 401});
        }

        await db.order.update({
            where : {
                id : params.orderId,
                userId : session.user.id
            },
            data : {
                isPaid : isPaid
            }
        });

        return NextResponse.json({success : true});
        
    } catch (error) {
        console.error("ORDER PATCH API", error);
        return new NextResponse("Internal server error", { status: 500 });
    }
}