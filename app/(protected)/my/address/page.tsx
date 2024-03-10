"use client";

import { AddressForm } from "@/components/cart/address-form";
import { AddressSkeleton } from "@/components/cart/address-skeleton";
import { UserAddressCard } from "@/components/cart/user-address-card";
import { useAddress } from "@/hooks/use-address";
import { Address } from "@prisma/client";

const MyAddressPage = () => {

    const { data, isLoading  } : { data : Address[], isLoading: boolean, } = useAddress();

    return (
        <div>
            {
                isLoading ? (
                    <AddressSkeleton />
                ) : (
                    ( data.length === 0 ) ? (
                        <AddressForm />
                    ) : (
                        <UserAddressCard data={data} label = {true} />
                    )
                )
            }
        </div>
    )
}

export default MyAddressPage;