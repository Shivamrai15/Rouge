import { auth } from "@/auth";
import { db } from "@/lib/db";
import { AddressSchema } from "@/schemas/address.schema";
import { NextResponse } from "next/server";


export async function PATCH (
    request : Request,
    { params } : { params : {
        addressId : string
    } }
) {
    try {
        
        const { values } = await request.json();
        const addressId = params.addressId;

        const validatedData = AddressSchema.safeParse(values);
        if (!validatedData.success || !addressId){
            return new NextResponse("Invalid Credentials", {status : 401});
        }

        const session = await auth();
        if (!session || !session.user || !session.user.id) {
            return new NextResponse("Unauthorized", {status : 401});
        }

        const address = await db.address.update({
            where : {
                id : addressId,
                userId : session.user.id
            },
            data : validatedData.data
        });

        if ( address.isDefault ) {
            await db.address.updateMany({
                where : {
                    userId : session.user.id,
                    id : {
                        not : {
                            equals : address.id
                        }
                    }
                },
                data : {
                    isDefault : false
                }
            });
        }

        return NextResponse.json(address);

    } catch (error) {
        
        console.error("ADDRESS PATCH API", error);
        return new NextResponse("Internal server error", {status : 500 });

    }
}