import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH (
    request : Request,
    { params } : { params : { commentId : string }}
) {
    try {

        const session = await auth();
        const  { star, comment } : { star : number | null, comment : string| null } =  await request.json();

        if (!session || !session.user || !session.user.id) {
            return new NextResponse("Unauthorized", {status : 401});
        }

        const resposne = await db.comment.update({
            where : {
                id : params.commentId
            },
            data : {
                star,
                comment
            }
        });

        return NextResponse.json(resposne);
        
    } catch (error) {
        console.error("COMMENT POST API", error);
        return new NextResponse("Internal server error", { status: 500 });
    }
}