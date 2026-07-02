import { useEffect, useState } from 'react';
import { Filter, X } from 'lucide-react';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../ui/select';
import { Button } from '../../../ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../../../ui/drawer';
import { Slider } from '../../../ui/slider';
import { useQueryParams } from '../../../../hooks/useQueryParams';
import { updateFilters } from './filters';
import SearchInput from './search-input';
import { Skeleton } from '../../../modules/skeleton';

export function ProductFilters({
  onFilterChange,
  filtersData,
}: {
  onFilterChange: (val: {}) => void;
  filtersData: {
    categories: { _id: string; name: string; slug: string }[];
    colors: string[];
    maxPrice: number;
    minPrice: number;
  };
}) {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [open, setOpen] = useState(false);
  const { getParams, clearParams, setParams } = useQueryParams();
  console.log(filtersData);

  const [filters, setFilters] = useState({
    category: 'all',
    sortBy: 'all',
    color: 'all',
    priceRange: [filtersData?.minPrice ?? 0, filtersData?.maxPrice ?? 0],
    inStock: false,
  });
  useEffect(() => {
    if (filtersData) {
      setFilters((prev) => ({
        ...prev,
        priceRange: [filtersData?.minPrice, filtersData?.maxPrice],
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
      newFilters.inStock = urlParams.inStock === 'true';
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
          onValueChange={(val) =>
            updateFilters(
              { category: val },
              filters,
              setFilters,
              onFilterChange,
              setParams,
              filtersData.maxPrice,
              filtersData.minPrice,
            )
          }
        >
          <SelectTrigger className="mt-2 w-full">
            <SelectValue placeholder="همه محصولات" />
          </SelectTrigger>
          <SelectContent dir="rtl">
            <SelectItem value="all">همه</SelectItem>
            {filtersData
              ? filtersData.categories.map((ct) => (
                  <SelectItem key={ct.slug} value={ct.slug}>
                    {ct.name}
                  </SelectItem>
                ))
              : ''}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label>مرتب‌سازی بر اساس</label>
        <Select
          value={filters.sortBy}
          onValueChange={(val) =>
            updateFilters(
              { sortBy: val },
              filters,
              setFilters,
              onFilterChange,
              setParams,
              filtersData.maxPrice,
              filtersData.minPrice,
            )
          }
        >
          <SelectTrigger className="mt-2 w-full">
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
              value={[
                Number(filters.priceRange[0]),
                Number(filters.priceRange[1]),
              ]}
              onValueChange={(val) =>
                updateFilters(
                  { priceRange: val },
                  filters,
                  setFilters,
                  onFilterChange,
                  setParams,
                  filtersData.maxPrice,
                  filtersData.minPrice,
                )
              }
              className="py-2"
            />
            <div className="text-muted-foreground flex justify-between text-sm">
              <p>{filters.priceRange[1]?.toLocaleString()}</p>
              <p>{filters.priceRange[0]?.toLocaleString()}</p>
            </div>
          </>
        ) : (
          <Skeleton className="mt-3 h-[40px] rounded-lg" />
        )}
      </div>

      <div className="space-y-2">
        <label>رنگ</label>
        <Select
          value={filters.color}
          onValueChange={(val) =>
            updateFilters(
              { color: val },
              filters,
              setFilters,
              onFilterChange,
              setParams,
              filtersData.maxPrice,
              filtersData.minPrice,
            )
          }
        >
          <SelectTrigger className="mt-2 w-full">
            <SelectValue placeholder="همه رنگ‌ها" />
          </SelectTrigger>
          <SelectContent dir="rtl">
            <SelectItem value="all">همه</SelectItem>
            {filtersData
              ? filtersData.colors.map((color) => (
                  <SelectItem key={color} value={color}>
                    {color}
                  </SelectItem>
                ))
              : ''}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center">
        <input type="checkbox" className="accent-main" id="inStock" />
        <label
          htmlFor="inStock"
          className="cursor-pointer pr-2 text-sm font-normal"
        >
          فقط محصولات موجود
        </label>
      </div>

      <Button
        variant="danger"
        className="mt-2"
        onClick={() => {
          const resetFilters = {
            category: 'all',
            sortBy: 'all',
            color: 'all',
            priceRange: [filtersData.minPrice, filtersData.maxPrice],
            inStock: false,
          };
          setFilters(resetFilters);
          onFilterChange(resetFilters);
          clearParams();
        }}
      >
        <X className="ml-2 h-4 w-4" />
        حذف همه فیلترها
      </Button>
    </div>
  );

  if (isDesktop) {
    return (
      <div className="bg-background sticky top-4 h-fit min-w-[230px] rounded-lg border p-4 lg:!min-w-[280px]">
        <h3 className="mb-4 text-lg font-bold">فیلتر محصولات</h3>
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
              index !== 3 && val !== 'all' && val !== 'newest' && val !== false,
          ) && (
            <span className="bg-main mr-auto flex h-5 w-5 items-center justify-center rounded-full text-xs text-white">
              {
                Object.values(filters).filter(
                  (val, index) =>
                    index !== 3 &&
                    val !== 'all' &&
                    val !== 'newest' &&
                    val !== false,
                ).length
              }
            </span>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[90vh]">
        <DrawerHeader>
          <DrawerTitle className="text-center">فیلتر محصولات</DrawerTitle>
        </DrawerHeader>
        <div className="flex-1 overflow-y-auto px-4">
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
