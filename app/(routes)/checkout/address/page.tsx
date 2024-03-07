"use client";

import { AddressForm } from "@/components/cart/address-form";
import { AddressSkeleton } from "@/components/cart/address-skeleton";
import { Summary } from "@/components/cart/summary";
import { UserAddressCard } from "@/components/cart/user-address-card";
import { Container } from "@/components/ui/container";
import { useAddress } from "@/hooks/use-address";
import { Address } from "@prisma/client";

const CheckoutAddressPage = () => {

    const { data, isLoading  } : { data : Address[], isLoading: boolean, } = useAddress();


    return (
        <Container>
            <div className="px-4 sm:px-6 lg:px-8 xl:px-24 h-full">
                <div className="my-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                    <div className="lg:col-span-7">
                        {
                            isLoading ? (
                                <AddressSkeleton/>
                            ) : (
                                ( data.length === 0 ) ? (
                                    <AddressForm />
                                ) : (
                                    <UserAddressCard data={data} />
                                )
                            )
                        }
                    </div>
                    <div className="flex flex-col gap-y-8 w-full lg:col-span-5 lg:mt-0 mt-16">
                        <Summary />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default CheckoutAddressPage;