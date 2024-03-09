"use server";

import { db } from "@/lib/db";

export const getShippingAddressById = async ( id : string ) => {
    try {
        
        const address = await db.shippingAddress.findUnique({
            where : {
                id
            }
        });

        return address;

    } catch (error) {
        return null;
    }
}