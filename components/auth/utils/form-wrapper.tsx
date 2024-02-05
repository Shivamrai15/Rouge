interface FormWrapperProps {
    children : React.ReactNode;
    headerLabel : string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}

import Image from "next/image";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Socials } from "./socials";
import { BackButton } from "./back-button";
import { Header } from "./header";

export const FormWrapper = ({
    headerLabel,
    children,
    showSocial,
    backButtonHref,
    backButtonLabel
} : FormWrapperProps ) => {

    return (
        <div className="w-80 md:w-[26rem]">
            <div className="aspect-[5/2] relative overflow-hidden rounded-t-sm">
                <Image
                    src="/assets/winter-sale-flex.svg"
                    fill
                    alt="Winter Sale"
                    className="object-cover"
                />
            </div>
            <Card className="rounded-sm rounded-t-none border-none">
                <CardHeader>
                    <Header label={headerLabel} />
                </CardHeader>
                <CardContent>
                    {children}
                </CardContent>
                {
                    showSocial && (
                        <CardFooter>
                            <Socials/>
                        </CardFooter>
                    )
                }
                <CardFooter>
                    <BackButton
                        href={backButtonHref}
                        label={backButtonLabel}
                    />
                </CardFooter>
            </Card>
        </div>
    )
}
