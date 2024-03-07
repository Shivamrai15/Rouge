import * as z from "zod";

export const AddressSchema = z.object({
    name : z.string().min(1, { 
        message : "Name is required "}),
    phoneNumber : z.string().length(10, {
        message : "Invalid phone number"
    }),
    zipCode : z.number().min(100000, {
        message : "Invalid zip code"
    }),
    address : z.string().min(1, {
        message : "Address is required"
    }),
    landmark : z.string().min(1, {
        message : "Landmark is required"
    }),
    town : z.string().min(1, {
        message : "Message is required"
    }),
    district : z.string(),
    state : z.string(),
    isDefault : z.boolean(),
});