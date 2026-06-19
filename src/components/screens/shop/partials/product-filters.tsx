import { useEffect, useState } from "react";
import { Filter, X } from "lucide-react";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../ui/select";
import { Button } from "../../../ui/button";
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../../../ui/drawer";
import { Slider } from "../../../ui/slider";
import { useQueryParams } from "../../../../hooks/useQueryParams";
import { updateFilters } from "./filters";
import SearchInput from "./search-input";
import { Skeleton } from "../../../modules/skeleton";

export function ProductFilters({ onFilterChange, filtersData }: {
    onFilterChange: (val: {}) => void;
    filtersData: {
        categories: { _id: string, name: string, slug: string }[],
        colors: string[],
        maxPrice: number,
        minPrice: number
    }
}) {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const [open, setOpen] = useState(false);
    const { getParams, clearParams, setParams } = useQueryParams();
    console.log(filtersData);

    const [filters, setFilters] = useState({
        category: "all",
        sortBy: "all",
        color: "all",
        priceRange: [filtersData?.minPrice ?? 0, filtersData?.maxPrice ?? 0],
        inStock: false,
    });
    useEffect(() => {
        if (filtersData) {
            setFilters(prev => ({
                ...prev,
                priceRange: [filtersData?.minPrice, filtersData?.maxPrice]
            }));
        }
    }, [filtersData]);


    useEffect(() => {
        const urlParams = getParams();
        const newFilters = { ...filters };

        if (urlParams.category) newFilters.category = urlParams.category as string;
        if (urlParams.sortBy) newFilters.sortBy = urlParams.sortBy as string;
        if (urlParams.color) newFilters.color = urlParams.color as string;
        if (urlParams.minPrice !== undefined && urlParams.maxPrice !== undefined) {
            newFilters.priceRange = [
                Number(urlParams.minPrice) || filtersData.minPrice,
                Number(urlParams.maxPrice) || filtersData.maxPrice,
            ];
        }
        if (urlParams.inStock !== undefined) {
            newFilters.inStock = urlParams.inStock === "true";
        }

        setFilters(newFilters);
        onFilterChange(newFilters);
    }, []);


    const FilterContent = () => (
        <div className="flex flex-col gap-6 p-1">
            <div className="space-y-2">
                <SearchInput />
                <label>دسته‌بندی</label>
                <Select
                    value={filters.category}
                    onValueChange={(val) => updateFilters({ category: val }, filters, setFilters, onFilterChange, setParams)}
                >
                    <SelectTrigger className="w-full mt-2">
                        <SelectValue placeholder="همه محصولات" />
                    </SelectTrigger>
                    <SelectContent dir="rtl">
                        <SelectItem value="all">همه</SelectItem>
                        {filtersData ? (
                            filtersData.categories.map(ct => (
                                <SelectItem value={ct.slug}>{ct.name}</SelectItem>

                            ))
                        ) : ""}
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <label>مرتب‌سازی بر اساس</label>
                <Select
                    value={filters.sortBy}
                    onValueChange={(val) => updateFilters({ sortBy: val }, filters, setFilters, onFilterChange, setParams)}
                >
                    <SelectTrigger className="w-full mt-2">
                        <SelectValue placeholder="مرتب‌سازی" />
                    </SelectTrigger>
                    <SelectContent dir="rtl">
                        <SelectItem value="all">همه</SelectItem>
                        <SelectItem value="-star">محبوب‌ترین</SelectItem>
                        <SelectItem value="-createdAt">جدیدترین</SelectItem>
                        <SelectItem value="createdAt">قدیمی‌ترین</SelectItem>
                        <SelectItem value="price">قیمت: کم به زیاد</SelectItem>
                        <SelectItem value="-price">قیمت: زیاد به کم</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-3">
                <label>محدوده قیمت</label>
                {filtersData?.minPrice && filtersData?.maxPrice ? (
                    <>
                        <Slider
                            min={filtersData.minPrice}
                            max={filtersData.maxPrice}
                            step={10}
                            value={[Number(filters.priceRange[0]), Number(filters.priceRange[1])]}
                            onValueChange={(val) => updateFilters({ priceRange: val }, filters, setFilters, onFilterChange, setParams)}
                            className="py-2"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground">
                            <p>{filters.priceRange[1]?.toLocaleString()}</p>
                            <p>{filters.priceRange[0]?.toLocaleString()}</p>
                        </div></>
                ) : <Skeleton className="h-[40px] mt-3 rounded-lg" />}

            </div>

            <div className="space-y-2">
                <label>رنگ</label>
                <Select
                    value={filters.color}
                    onValueChange={(val) => updateFilters({ color: val }, filters, setFilters, onFilterChange, setParams)}
                >
                    <SelectTrigger className="w-full mt-2">
                        <SelectValue placeholder="همه رنگ‌ها" />
                    </SelectTrigger>
                    <SelectContent dir="rtl">
                        <SelectItem value="all">همه</SelectItem>
                        {filtersData ? (
                            filtersData.colors.map(color => (
                                <SelectItem value={color}>{color}</SelectItem>

                            ))
                        ) : ""}
                    </SelectContent>
                </Select>
            </div>

            <div className="flex items-center">
                <input
                    type="checkbox"
                    className="accent-main"
                    id="inStock"
                />
                <label htmlFor="inStock" className="text-sm pr-2 font-normal cursor-pointer">
                    فقط محصولات موجود
                </label>
            </div>

            <Button
                variant="danger"
                className="mt-2"
                onClick={() => {
                    const resetFilters = {
                        category: "all",
                        sortBy: "newest",
                        color: "all",
                        priceRange: [filtersData.minPrice, filtersData.maxPrice],
                        inStock: false,
                    };
                    setFilters(resetFilters);
                    onFilterChange(resetFilters);
                    clearParams()
                }}
            >
                <X className="ml-2 h-4 w-4" />
                حذف همه فیلترها
            </Button>
        </div>
    );

    if (isDesktop) {
        return (
            <div className="lg:!min-w-[280px] min-w-[230px] bg-background p-4 border rounded-lg sticky top-4 h-fit">
                <h3 className="font-bold text-lg mb-4">فیلتر محصولات</h3>
                <FilterContent />
            </div>
        );
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="outline" className="w-full gap-2">
                    <Filter className="h-4 w-4" />
                    فیلترها
                    {Object.values(filters).some(
                        (val, index) =>
                            index !== 3 &&
                            val !== "all" &&
                            val !== "newest" &&
                            val !== false
                    ) && (
                            <span className="mr-auto bg-main text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                {Object.values(filters).filter(
                                    (val, index) =>
                                        index !== 3 &&
                                        val !== "all" &&
                                        val !== "newest" &&
                                        val !== false
                                ).length}
                            </span>
                        )}
                </Button>
            </DrawerTrigger>
            <DrawerContent className="max-h-[90vh]">
                <DrawerHeader>
                    <DrawerTitle className="text-center">فیلتر محصولات</DrawerTitle>
                </DrawerHeader>
                <div className="px-4 overflow-y-auto flex-1">
                    <FilterContent />
                </div>
                <DrawerFooter className="border-t pt-4">
                    <Button onClick={() => setOpen(false)} className="w-full">
                        اعمال فیلترها
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}


