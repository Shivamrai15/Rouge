"use client";

import * as z from "zod";
import axios from "axios";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AddressSchema } from "@/schemas/address.schema";
import { zodResolver } from "@hookform/resolvers/zod";

import { 
    Card,
    CardContent,
    CardFooter
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form";
import { 
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useAddress } from "@/hooks/use-address";
import { useAddessModal } from "@/hooks/use-address-modal";
import { cn } from "@/lib/utils";
import { useCheckoutAddress } from "@/hooks/use-checkout-address";
import { useUpdateAddessModal } from "@/hooks/use-update-address-modal";

interface AddressFormProps {
    isModal? : boolean;
    edit? : boolean;
}

export const AddressForm = ({
    isModal,
    edit
} : AddressFormProps ) => {

    const session = useSession();
    const { mutate } = useAddress();
    const { onClose } = useAddessModal();
    const updateModal = useUpdateAddessModal();
    const { address, addAddress } = useCheckoutAddress();

    const [ loading, setLoading ] = useState(false);
    const [ location, setLocation ] = useState([]);

    const form  = useForm<z.infer<typeof AddressSchema>>({
        resolver : zodResolver(AddressSchema),
        defaultValues : (edit && address) ? address : {
            name : session.data?.user?.name || "",
            phoneNumber : "",
            address : "",
            landmark : "",
            town : "",
            district : "",
            state : "",
            isDefault : true
        }
    });

    const initialData = async() => {
        if ( edit && address ) {

            try {
                const url = `https://api.postalpincode.in/pincode/${address.zipCode}`
                const response = (await axios.get(url)).data[0];

                if (response.Status === "Success" ){
                    const data = response.PostOffice;
                    setLocation(data);
                    form.setValue("district", data[0]["District"]);
                    form.setValue("state", data[0]["State"]);
                }

            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        initialData();
    }, [ edit ]);

    const handleZipCode = async( e : ChangeEvent<HTMLInputElement>, onChange : ( value : number )=>void ) => {
        const code = e.target.value;

        if (code.length <= 6 ) {
            onChange(Number.parseInt(code));
        } if (code.length === 6) {
            
            try {
                const url = `https://api.postalpincode.in/pincode/${code}`
                const response = (await axios.get(url)).data[0];

                if (response.Status === "Success" ){
                    const data = response.PostOffice;
                    setLocation(data);
                    form.setValue("district", data[0]["District"]);
                    form.setValue("state", data[0]["State"]);
                }

            } catch (error) {
                console.log(error);
            }
        }
    };


    const handleAddressForm = async ( values : z.infer<typeof AddressSchema> ) => {
        try {
            
            setLoading(true);
            if (!edit ) {
                await axios.post("/api/v1/address", values );
                toast.success("Address Added Successfully");
            } else {
                const response =  await axios.patch(`/api/v1/address/${address?.id}`, {
                    values
                });
                addAddress(response.data);
                toast.success("Address Updated Successfully");
            }
            updateModal.onClose();
            onClose();
            mutate();
            form.reset();

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    return (
        <Card className={cn(
            "max-w-md w-full pt-4",
            isModal && "border-none px-0 pb-0 shadow-none"
        )}>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleAddressForm)}
                >
                    <CardContent className={cn(
                        "space-y-8",
                        isModal && "px-0"
                    )}>
                        <div className="space-y-2">
                            <h4 className="text-sm font-bold text-zinc-800">Contact Details</h4>
                            <div className="space-y-3">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled = {loading}
                                                    placeholder="Name*"
                                                    className="outline-none focus-visible:ring-0 focus-visible:ring-offset-0 font-medium text-zinc-600"
                                                />
                                            </FormControl>
                                            <FormMessage className="bg-destructive/20 text-destructive/80 p-2 rounded-md" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phoneNumber"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled = {loading}
                                                    placeholder="Phone No.*"
                                                    className="outline-none focus-visible:ring-0 focus-visible:ring-offset-0 font-medium text-zinc-600"
                                                />
                                            </FormControl>
                                            <FormMessage className="bg-destructive/20 text-destructive/80 p-2 rounded-md" />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-sm font-bold text-zinc-800">Address Details</h4>
                            <div className="space-y-3">
                                <FormField
                                    control={form.control}
                                    name="zipCode"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    value={field.value}
                                                    onChange={(e) => handleZipCode(e, field.onChange)}
                                                    type="number"
                                                    disabled = {loading}
                                                    placeholder="Pin Code*"
                                                    className="outline-none focus-visible:ring-0 focus-visible:ring-offset-0 font-medium text-zinc-600"
                                                />
                                            </FormControl>
                                            <FormMessage className="bg-destructive/20 text-destructive/80 p-2 rounded-md" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled = {loading}
                                                    placeholder="Address (House No., Building, Street Area)*"
                                                    className="outline-none focus-visible:ring-0 focus-visible:ring-offset-0 font-medium text-zinc-600"
                                                />
                                            </FormControl>
                                            <FormMessage className="bg-destructive/20 text-destructive/80 p-2 rounded-md" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="landmark"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled = {loading}
                                                    placeholder="Landmark*"
                                                    className="outline-none focus-visible:ring-0 focus-visible:ring-offset-0 font-medium text-zinc-600"
                                                />
                                            </FormControl>
                                            <FormMessage className="bg-destructive/20 text-destructive/80 p-2 rounded-md" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="town"
                                    render={({field})=>(
                                        <FormItem>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                disabled = {loading || location.length === 0}
                                            >
                                                <FormControl>
                                                    <SelectTrigger className = "focus:ring-0 focus:ring-offset-0 font-medium text-zinc-600" disabled = {loading || location.length === 0 }>
                                                        <SelectValue placeholder = "Locality/ Town*" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {
                                                        location.map((loc) => (
                                                            <SelectItem
                                                                value = {loc["Name"]}
                                                                key = {loc["Name"]}
                                                            >
                                                                {loc["Name"]}
                                                            </SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                            <FormMessage className="bg-destructive/20 text-destructive/80 p-2 rounded-md" />
                                        </FormItem>
                                    )}
                                />
                                <div className="flex items-center w-full h-10 gap-x-3">
                                    <div className="w-1/2 h-full flex items-center bg-zinc-200/60 text-zinc-700 font-medium text-sm p-3 rounded-sm">
                                        {
                                            location.length === 0 ? "District*" : location[0]["District"]
                                        }
                                    </div>
                                    <div className="w-1/2 h-full flex items-center bg-zinc-200/60 text-zinc-700 font-medium text-sm p-3 rounded-sm">
                                        {
                                            location.length === 0 ? "State*" : location[0]["State"]
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <FormField
                            control={form.control}
                            name="isDefault"
                            render={({field})=>(
                                <FormItem>
                                    <FormControl>
                                        <div className="flex items-center gap-x-2">
                                            <Checkbox
                                                id = "addressType"
                                                onCheckedChange = {field.onChange}
                                                checked = {field.value}
                                                disabled = {loading}
                                            />
                                            <Label htmlFor="addressType" className="text-zinc-700 font-medium"  >
                                                Make this my default address
                                            </Label>
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </CardContent>
                    <CardFooter
                        className={cn(
                            isModal && "px-0"
                        )}
                    >
                        <Button
                            type="submit"
                            className="w-full font-semibold"
                            size="lg"
                            disabled = {loading}
                        >
                            {
                                loading ?  (
                                    <Loader2 className="animate-spin" />
                                ) : edit ? "UPDATE" : "ADD ADDRESS"
                            }
                        </Button>
                    </CardFooter>
                </form>
            </Form>

        </Card>
    );
}
