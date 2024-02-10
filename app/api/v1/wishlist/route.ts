import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST ( request : Request ) {
    try {

        const { productId } : { productId: string } = await request.json();

        const session = await auth();
        if (!session || !session.user || !session.user.id) {
            return new NextResponse("Unauthorized access", {status :401});
        }

        let wishlist = await db.wishlist.findUnique({
            where : {
                userId : session.user.id
            }
        });

        if (!wishlist) {
            wishlist = await db.wishlist.create({
                data : {
                    userId : session.user.id
                }
            });
        }

        const wishlistItem = await db.product.create({
            data : {
                wishlistId : wishlist.id,
                productId
            }
        });

        return NextResponse.json(wishlistItem);
        
    } catch (error) {
        console.error("WISHLIST ITEM CREATE", error);
        return new NextResponse("Internal server error", { status:500 });
    }
}
