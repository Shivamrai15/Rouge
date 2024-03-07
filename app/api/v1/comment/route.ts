import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST ( request :Request) {
    try {
    
        const session = await auth();
        const body = await request.json();

        if (!session || !session.user || !session.user.id) {
            return new NextResponse("Unauthorized", {status : 401});
        }

        if (!body) {
            return new NextResponse("Invalid Credentials", {status : 401});
        }

        const  { productId, orderProductId, star, comment } : { productId : string, orderProductId: string, star : number | null, comment : string| null } =  body;

        const response = await db.comment.create({
            data : {
                username : session.user.name!,
                productId,
                orderProductId,
                userId : session.user.id,
                star,
                comment
            }
        });

        return NextResponse.json(response);
        
    } catch (error) {
        console.error("COMMENT POST API", error);
        return new NextResponse("Internal server error", { status: 500 });
    }
}
