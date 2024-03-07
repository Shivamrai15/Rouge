import { Address } from "@prisma/client"
import { AddressCard } from "./address-card";
import { useAddessModal } from "@/hooks/use-address-modal";

interface UserAddressCardProps {
    data : Address[];
}

export const UserAddressCard = ({
    data
} : UserAddressCardProps ) => {

    const { onOpen } = useAddessModal();

    const defaultAddress = data && data.find((address) => address.isDefault === true );
    const otherAddresses = data && data.filter((address) => address.isDefault === false );

    return (
        <div className="p-4 w-full rounded-sm space-y-6">
            {
                data.length > 1 && (
                    <h3 className="text-lg md:text-xl font-bold text-zinc-800">
                        Select Address
                    </h3>
                )
            }
            {
               defaultAddress && (
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-zinc-600">DEFAULT ADDRESS</h3>
                        <AddressCard data = {defaultAddress} />
                    </div>
               ) 
            }
            {
                otherAddresses.length > 0 && (
                    <div
                        className="space-y-4"
                    >
                        <h3 className="text-sm font-semibold text-zinc-600">OTHER ADDRESSES</h3>
                        {
                            otherAddresses.map((address)=>(
                                <AddressCard
                                    key = {address.id}
                                    data = {address}
                                />
                            ))
                        }
                    </div>
                )
            }
            <div 
                className="w-full aspect-[6/1] border border-dashed rounded-md flex items-center justify-center bg-gray-100 cursor-default md:cursor-pointer"
                onClick={onOpen}
            >
                <p className="text-md font-bold">
                    Add New Address
                </p>
            </div>
        </div>
    )
}
