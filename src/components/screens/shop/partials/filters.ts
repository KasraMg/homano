export interface Filters {
  category: string;
  color: string;
  sortBy: string;
  inStock: boolean;
  name?: string;
  priceRange: number[];
}

export const updateFilters = (
  newFilters: Record<string, any>,
  filters: Filters,
  setFilters: any,
  onFilterChange: any,
  setParams: any,
) => {
  const updated = { ...filters, ...newFilters };
  setFilters(updated);

  const urlParams: Record<string, string | number | boolean> = {};

  if (updated.category && updated.category !== 'all') {
    urlParams.category = updated.category;
  }

  if (updated.sortBy && updated.sortBy !== 'newest') {
    urlParams.sortBy = updated.sortBy;
  }

  if (updated.color && updated.color !== 'all') {
    urlParams.color = updated.color;
  }

  if (
    updated.priceRange &&
    (updated.priceRange[0] !== 0 || updated.priceRange[1] !== 1000)
  ) {
    urlParams.minPricev = updated.priceRange[0] as number;
    urlParams.maxPrice = updated.priceRange[1] as number;
  }

  if (updated.inStock) {
    urlParams.inStock = true;
  }

  setParams(urlParams);
  setFilters(updated);
  onFilterChange(updated);
  onFilterChange(updated);
};
