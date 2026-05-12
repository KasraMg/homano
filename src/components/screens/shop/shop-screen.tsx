import Header from '../../../components/modules/header';
import Breadcrumb from '../../../components/modules/breadcrumb';
import FilterAndSortpanel from '../../../components/ui/filter-and-sortpanel';
import Container from '../../../components/modules/container';
import ProductCard from '../../modules/product-card';
import { ProductCardProps } from '../../../types/product.types';
const ShopScreen = () => {
  const defaultProducts: ProductCardProps[] = [
    {
      id: 'p1',
      image: '/Images/product-1.png',
      title: 'مبل دونفره',
      price: '۳۱,۸۴۰,۰۰۰ تومان',
      originalPrice: '۶۴,۰۰۰,۰۰۰ تومان',
      isNew: true,
      discount: '٪۵۰-',
    },
    {
      id: 'p2',
      image: '/Images/product-2.png',
      title: 'چراغ رومیزی',
      price: '۳,۹۹۸,۴۰۰ تومان',
      isNew: true,
    },
    {
      id: 'p3',
      image: '/Images/product-3.png',
      title: 'چراغ رومیزی بژ',
      price: '۳,۹۹۸,۴۰۰ تومان',
      isNew: true,
    },
    {
      id: 'p4',
      image: '/Images/product-4.png',
      title: 'سبد بامبو',
      price: '۳,۹۹۸,۴۰۰ تومان',
      isNew: true,
    },
    {
      id: 'p5',
      image: '/Images/product-5.png',
      title: 'صندلی غذاخوری',
      price: '۱۴,۲۴۰,۰۰۰ تومان',
      isNew: true,
    },
    {
      id: 'p6',
      image: '/Images/product-6.png',
      title: 'مبل تک نفره',
      price: '۳۹,۸۴۰,۰۰۰ تومان',
      isNew: true,
    },
    {
      id: 'p7',
      image: '/Images/product-7.png',
      title: 'مبل پارچه‌ای',
      price: '۵۵,۸۴۰,۰۰۰ تومان',
      isNew: true,
    },
    {
      id: 'p8',
      image: '/Images/product-8.png',
      title: 'کتابخانه',
      price: '۲۸,۶۴۰,۰۰۰ تومان',
      isNew: true,
    },
    {
      id: 'p9',
      image: '/Images/product-9.png',
      title: 'چراغ ایستاده',
      price: '۹,۴۴۰,۰۰۰ تومان',
      isNew: true,
    },
    {
      id: 'p10',
      image: '/Images/product-10.png',
      title: 'میز قهوه‌خوری',
      price: '۲۳,۸۴۰,۰۰۰ تومان',
      isNew: true,
    },
    {
      id: 'p11',
      image: '/Images/product-11.png',
      title: 'ست کوسن',
      price: '۳,۱۹۸,۴۰۰ تومان',
      isNew: true,
    },
    {
      id: 'p12',
      image: '/Images/product-12.png',
      title: 'ست کوسن',
      price: '۳,۱۹۸,۴۰۰ تومان',
      isNew: true,
    },
  ];
  return (
    <Container>
      <Breadcrumb className="pt-5" title="فروشگاه" />

      <FilterAndSortpanel mode="shop" />

      <div className="grid grid-cols-4 gap-6 py-16">
        {defaultProducts.map((pr) => (
          <ProductCard {...pr} />
        ))}
      </div>
    </Container>
  );
};

export default ShopScreen;
