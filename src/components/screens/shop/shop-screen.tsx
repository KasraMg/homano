import Breadcrumb from '../../../components/modules/breadcrumb';
import Container from '../../../components/modules/container';
import Card from '../../modules/product-card';
import { Product } from '../../../types/product.types';
import useShop from '../../../hooks/useShop';
import { useState } from 'react';
import { ProductFilters } from './partials/product-filters';

const ShopScreen = () => {
  const { data, isPending } = useShop()
  console.log(data);

  const [activeFilters, setActiveFilters] = useState(null);

  const handleFilterChange = (filters: any) => {
    setActiveFilters(filters);
    console.log("فیلترهای فعال:", filters);
  };

  return (
    <Container>
      <Breadcrumb className="pt-5" title="فروشگاه" />
      <div className="flex md:!flex-row flex-col gap-4 pt-5 pb-10">
        <ProductFilters
          onFilterChange={handleFilterChange}
          minPrice={0}
          maxPrice={1000}
        />

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:!grid-cols-3 gap-6">
          {data?.products.map((pr: Product) => (
            <Card {...pr} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ShopScreen;
