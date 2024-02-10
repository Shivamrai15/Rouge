"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";

export const getWishlistItems = async()=>{
    try {
        
        const session = await auth();

        if  (!session || !session.user || !session.user.id){
            throw new Error("Unauthorized access");
        }

        const wishlist = await db.wishlist.findUnique({
            where : {
                userId : session.user.id
            },
            include : {
                products : {
                    orderBy : {
                        createdAt : "desc"
                    }
                },
            },
        });

        return wishlist;

    } catch (error) {
        console.log(error);
        return null;
    }
}