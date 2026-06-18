import Breadcrumb from '../../../components/modules/breadcrumb';
import Container from '../../../components/modules/container';
import Card from '../../modules/product-card';
import { Product } from '../../../types/product.types';
import useShop from '../../../hooks/useShop';
import {  useState } from 'react';
import { ProductFilters } from './partials/product-filters';
import ProductSkeleton from './partials/product-skeleton';
import { Filters } from './partials/filters';

const ShopScreen = () => {
  const [activeFilters, setActiveFilters] = useState<Filters | undefined>(undefined);
  console.log('activeFilters', activeFilters);

  const { data, isPending } = useShop(activeFilters)

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

        {!isPending ? (
          data?.products.length > 0 ?
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:!grid-cols-3 gap-6 w-full">
              {data.products.map((pr: Product) => (
                <Card {...pr} />
              ))}
            </div>

            : <p className='text-center pt-20 w-full text-3xl'>کالایی یافت نشد</p>
        ) : (
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:!grid-cols-3 gap-6 w-full">
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
          </div>
        )}
        { }
      </div>
    </Container>
  );
};

export default ShopScreen;
