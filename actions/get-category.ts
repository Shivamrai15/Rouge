import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategoryById = async (id : string) : Promise<Category> => {

    const res = await  fetch(`${URL}/${id}`);
    return res.json();

}