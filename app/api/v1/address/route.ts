import { auth } from "@/auth";
import { db } from "@/lib/db";
import qs from "query-string";
import { NextResponse } from "next/server";
import { AddressSchema } from "@/schemas/address.schema";


export async function POST( request: Request ) {
    try {
        
        const body = await request.json();
        const validatedData = AddressSchema.safeParse(body);

        if (!validatedData.success) {
            return new NextResponse("Invalid Credentials", {status : 401});
        }

        const session = await auth();
        if (!session || !session.user || !session.user.id) {
            return new NextResponse("Unauthorized", {status : 401});
        }

        const address = await db.address.create({
            data : {
                userId : session.user.id,
                ...validatedData.data
            }
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
        
        console.error("ADDRESS POST API", error);
        return new NextResponse("Internal server error", {status : 500 });

    }
}

export async function GET () {
    
    try {

        const session = await auth();
        if (!session || !session.user || !session.user.id) {
            return new NextResponse("Unauthorized", {status : 401});
        }

        const address = await db.address.findMany({
            where : {
                userId : session.user.id
            }
        });

        return NextResponse.json(address);

    } catch (error) {
        
        console.error("ADDRESS GET API", error);
        return new NextResponse("Internal server error", {status : 500 });

    }
}

export async function DELETE ( request : Request ) {
    try {
        
        const url = request.url;
        const { query } = qs.parseUrl(url);
        const id = query["id"]  as string | null ;
        
        if (!id ) {
            return new NextResponse("Invalid Credentials", {status : 401});
        }

        const session = await auth();
        if (!session || !session.user || !session.user.id) {
            return new NextResponse("Unauthorized", {status : 401});
        }

        const address = await db.address.delete({
            where : {
                id,
                userId : session.user.id
            }
        });

        return NextResponse.json(address);

        
    } catch (error) {

        console.error("ADDRESS DELETE API", error);
        return new NextResponse("Internal server error", {status : 500 });

        
    }
}

