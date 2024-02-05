import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export const getBillboard = async (id : string) : Promise<Billboard> => {

    const res = await  fetch(`${URL}/${id}`);
    return res.json();

}