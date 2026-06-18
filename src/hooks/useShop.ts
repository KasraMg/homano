import { useQuery } from '@tanstack/react-query';
import { localBackendUrl } from '../constants';
import { Filters } from '../components/screens/shop/partials/filters';
import { useQueryParams } from './useQueryParams';

const useShop = (filters?: Filters) => {
  const { getParam } = useQueryParams();

  const fetchData = async () => {
    const params = new URLSearchParams();

    if (filters) {
      if (filters.category && filters.category !== 'all') {
        params.append('category', filters.category);
      }
      if (filters.color && filters.color !== 'all') {
        params.append('color', filters.color);
      }
      if (
        filters.priceRange &&
        (filters.priceRange[0] !== 0 || filters.priceRange[1] !== 1000)
      ) {
        params.append('minPrice', Number(filters.priceRange[0]).toString());
        params.append('maxPrice', Number(filters.priceRange[1]).toString());
      }
      if (filters.inStock) {
        params.append('inStock', 'true');
      }
      if (getParam('name') as string) {
        params.append('search', getParam('name') as string);
      } else {
        params.delete('search');
      }
      if (filters.sortBy && filters.sortBy !== 'newest') {
        params.append('sort', filters.sortBy);
      }
    }

    const url = `${localBackendUrl}/products${params.toString() ? `?${params.toString()}` : ''}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const { data, isPending } = useQuery({
    queryKey: ['shop', getParam('name') as string, filters],
    queryFn: fetchData,
    enabled: !!filters,
  });

  return { data, isPending };
};

export default useShop;
