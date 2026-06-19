import { useQueryParams } from "../../hooks/useQueryParams";
import { Button } from "../ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from "../ui/pagination";

interface Props {
    totalItems: number;
    limit: number;
    page: number;
}
const PaginationWrapper = ({ totalItems, limit, page }: Props) => {
    const totalPages = Math.ceil(totalItems / limit);
    const { setParams } = useQueryParams();

    if (totalPages <= 1) return null;

    const getPageNumbers = () => {
        const pages: number[] = [];
        const startPage = Math.max(1, page - 2);
        const endPage = Math.min(totalPages, page + 2);
        for (let i = startPage; i <= endPage; i++) pages.push(i);
        return pages;
    };

    const pageNumbers = getPageNumbers();

    return (
        <Pagination>
            <PaginationContent className="space-x-1">
                <PaginationItem>
                    <PaginationPrevious
                        onClick={() => {
                            if (page > 1) setParams({ page: page - 1 });
                        }}
                        className={page === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                </PaginationItem>

                {Number(pageNumbers[0]) > 1 && (
                    <>
                        <PaginationItem>
                            <PaginationLink asChild>
                                <Button className="cursor-pointer" variant={"ghost"} onClick={() => setParams({ page: 1 })}>1</Button>
                            </PaginationLink>
                        </PaginationItem>
                        {Number(pageNumbers[0]) > 2 && <PaginationEllipsis />}
                    </>
                )}

                {pageNumbers.map((p) => (
                    <PaginationItem key={p}>
                        <PaginationLink asChild isActive={page === p}>
                            <Button className="cursor-pointer" variant={"ghost"} onClick={() => setParams({ page: p })}>
                                {p}
                            </Button>
                        </PaginationLink>
                    </PaginationItem>
                ))}

                {Number(pageNumbers[pageNumbers.length - 1]) < totalPages && (
                    <>
                        {Number(pageNumbers[pageNumbers.length - 1]) < totalPages - 1 && <PaginationEllipsis />}
                        <PaginationItem>
                            <PaginationLink asChild>
                                <Button className="cursor-pointer" variant={"ghost"} onClick={() => setParams({ page: totalPages })}>
                                    {totalPages}
                                </Button>
                            </PaginationLink>
                        </PaginationItem>
                    </>
                )}

                <PaginationItem>
                    <PaginationNext
                        asChild
                        onClick={() => {
                            if (page < totalPages) setParams({ page: page + 1 });
                        }}
                        className={page === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default PaginationWrapper;