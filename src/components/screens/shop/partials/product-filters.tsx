import { useState } from "react";
import { Filter, X } from "lucide-react";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../ui/select";
import { Button } from "../../../ui/button";
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../../../ui/drawer";
import { Slider } from "../../../ui/slider";

export function ProductFilters({ onFilterChange, minPrice = 0, maxPrice = 1000 }: {
    onFilterChange: (val: {}) => void;
    minPrice: number;
    maxPrice: number;
}) {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const [open, setOpen] = useState(false);

    const [filters, setFilters] = useState({
        category: "all",
        sortBy: "newest",
        color: "all",
        priceRange: [minPrice, maxPrice],
        inStock: false,
    });

    const updateFilters = (newFilters: {}) => {
        const updated = { ...filters, ...newFilters };
        setFilters(updated);
        onFilterChange(updated);
    };

    const FilterContent = () => (
        <div className="flex flex-col gap-6 p-1">
            <div className="space-y-2">
                <label>دسته‌بندی</label>
                <Select
                    value={filters.category}
                    onValueChange={(val) => updateFilters({ category: val })}
                >
                    <SelectTrigger className="w-full mt-2">
                        <SelectValue placeholder="همه محصولات" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">همه</SelectItem>
                        <SelectItem value="electronic">الکترونیک</SelectItem>
                        <SelectItem value="clothing">پوشاک</SelectItem>
                        <SelectItem value="books">کتاب‌ها</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <label>مرتب‌سازی بر اساس</label>
                <Select
                    value={filters.sortBy}
                    onValueChange={(val) => updateFilters({ sortBy: val })}
                >
                    <SelectTrigger className="w-full mt-2">
                        <SelectValue placeholder="مرتب‌سازی" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="newest">جدیدترین</SelectItem>
                        <SelectItem value="price-asc">قیمت: کم به زیاد</SelectItem>
                        <SelectItem value="price-desc">قیمت: زیاد به کم</SelectItem>
                        <SelectItem value="popular">محبوب‌ترین</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-3">
                <label>محدوده قیمت</label>
                <Slider
                    min={minPrice}
                    max={maxPrice}
                    step={10}
                    value={[Number(filters.priceRange[0]), Number(filters.priceRange[1])]}
                    onValueChange={(val) => updateFilters({ priceRange: val })}
                    className="py-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                    <p>{filters.priceRange[1]?.toLocaleString()}</p>
                    <p>{filters.priceRange[0]?.toLocaleString()}</p>
                </div>
            </div>

            <div className="space-y-2">
                <label>رنگ</label>
                <Select
                    value={filters.color}
                    onValueChange={(val) => updateFilters({ color: val })}
                >
                    <SelectTrigger className="w-full mt-2">
                        <SelectValue placeholder="همه رنگ‌ها" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">همه</SelectItem>
                        <SelectItem value="red">قرمز</SelectItem>
                        <SelectItem value="blue">آبی</SelectItem>
                        <SelectItem value="green">سبز</SelectItem>
                        <SelectItem value="black">مشکی</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="inStock"
                    checked={filters.inStock}
                    onChange={(checked) =>
                        updateFilters({ inStock: checked })
                    }
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
                        priceRange: [minPrice, maxPrice],
                        inStock: false,
                    };
                    setFilters(resetFilters);
                    onFilterChange(resetFilters);
                }}
            >
                <X className="ml-2 h-4 w-4" />
                حذف همه فیلترها
            </Button>
        </div>
    );

    if (isDesktop) {
        return (
            <div className="w-[300px] bg-background p-4 border rounded-lg sticky top-4 h-fit">
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
                            <span className="mr-auto bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
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


