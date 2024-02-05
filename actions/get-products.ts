import { Product, ProductType } from "@/types";
import qs from "query-string";


const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
    categoryId? : string;
    colorId? : string;
    sizeId? : string;
    isFeatured? :  boolean;
    limit? : string;
    page? : string;
    type? : "MEN" | "WOMEN" | "BEAUTY" | string ;
}

export const getProducts = async (query : Query) : Promise<Product[]> => {

    const url = qs.stringifyUrl({
        url : URL,
        query : {
            colorId: query.colorId,
            sizeId : query.sizeId,
            categoryId: query.categoryId,
            isFeatured : query.isFeatured,
            limit : query.limit,
            type : query.type,
            page : query.page
        }
    });

    const res = await  fetch(url);
    return res.json();


}