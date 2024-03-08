"use client";

import { useSearchParams } from "next/navigation";
import qs from "query-string";

interface PaginationComponentProps {
    lastPage : boolean;
}

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";
import { useOrigin } from "@/hooks/use-origin";

export const PaginationComponent = ({
    lastPage
} : PaginationComponentProps ) => {


    const searchParams = useSearchParams();
    const queries = qs.parse(searchParams.toString());
    const currentPage = searchParams.get("page");

    const currentHref = useOrigin();

    const previousPageHref = qs.stringifyUrl({
        url : currentHref,
        query : {
            ...queries,
            page : (Number(currentPage)-1).toString()
        }

    });

    const nextPageHref = qs.stringifyUrl({
        url : currentHref,
        query : {
            ...queries,
            page : (Number(currentPage)+1).toString()
        }

    });


    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href={ currentPage === "1" ? "#" : previousPageHref }  />
                </PaginationItem>
                {
                    currentPage !== "1" && (
                        <PaginationItem>
                            <PaginationLink href={previousPageHref}>
                                { Number(currentPage)-1 }
                            </PaginationLink>
                        </PaginationItem>
                    )
                }
                <PaginationItem className="bg-zinc-100 rounded-md">
                    <PaginationLink
                        href="#"
                    >
                        {currentPage}
                    </PaginationLink>
                </PaginationItem>
                {
                    !lastPage && (
                        <PaginationItem>
                            <PaginationLink href={nextPageHref}>
                                { Number(currentPage)+1 }
                            </PaginationLink>
                        </PaginationItem>
                    )
                }
                {
                    !lastPage && (
                        <PaginationItem>
                            <PaginationEllipsis/>
                        </PaginationItem>
                    )
                }
                <PaginationItem>
                    <PaginationNext href={ lastPage ? "#" : nextPageHref }  />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
