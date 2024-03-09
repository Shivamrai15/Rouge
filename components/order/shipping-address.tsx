import { getShippingAddressById } from "@/actions/shipping-address";
import { Separator } from "@/components/ui/separator";

interface ShippingAddressProps {
    shippingId : string;
}

export const ShippingAddress = async({
    shippingId
} : ShippingAddressProps ) => {
    
    const address = await getShippingAddressById(shippingId);

    if (!address) {
        return null;
    }
    
    return (
        <div className="w-full p-4 md:p-6 rounded-md border-2">
            <h3 className="text-lg font-bold text-zinc-700" >Shipping Address</h3>
            <div className="space-y-2 mt-4">
                <div className="space-x-3 flex items-center text-sm text-zinc-700">
                    <span className="font-semibold">
                        {address.name}
                    </span>
                    <Separator orientation="vertical" className="h-4 border-e-2 border-zinc-600" />
                    <span className="font-semibold">
                        {address.mobileNumber}
                    </span>
                </div>
                <div className="text-sm font-medium text-zinc-600">
                    {`${address.address}, ${address.landmark}, ${address.town}, ${address.district}, ${address.state} - ${address.zipCode}`}
                </div>
            </div>
        </div>
    )
}
