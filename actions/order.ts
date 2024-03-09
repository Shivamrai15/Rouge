"use server";

import { db } from "@/lib/db";

export const getOrderProductById = async( id : string ) => {
    try {
        
        const order = await db.orderProduct.findUnique({
            where : {
                id
            },
            include : {
                comment : true
            }
        });

        return order;

    } catch (error) {
        return null;
    }
}

export const getOrder = async ( id : string ) => {
    try {
        
        const order = await db.order.findUnique({
            where : {
                id
            },
            include : {
                orderProduct : {
                    include : {
                        comment : true,
                    }
                },
            }
        });

        return order;

    } catch (error) {
        return null;
    }
}