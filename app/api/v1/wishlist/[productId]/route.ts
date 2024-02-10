import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE ( 
    _request : Request,
    { params } : { params : { productId : string }}    
) {
    try {

        const session = await auth();

        if (!session || !session.user || !session.user.id) {
            return new NextResponse("Unauthorized access", {status :401});
        }

        const wishlist = await db.wishlist.findUnique({
            where : {
                userId : session.user.id
            }
        });

        if (!wishlist) {
            return new NextResponse("Wishlist not found", {status :404});
        }

        const wishlistItem = await db.product.findFirst({
            where : {
                productId : params.productId,
                wishlistId : wishlist.id
            }
        });

        await db.product.delete({
            where : {
                id : wishlistItem?.id
            }
        });

        return NextResponse.json({ success : true})


    } catch (error) {
        console.log("WISHLIST DELETE", error);
        return new NextResponse("Internal server error", { status: 500 });   
    }
}