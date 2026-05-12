import { Link } from 'react-router-dom';
import { CartItems } from '../../types/cart.types';
import { Button } from '../ui/button';
import { Minus, Plus } from 'lucide-react'; 
import MobileProductCard from '../screens/cart/partials/mobile-product-card';

type CartSidebarProps = {
  open: boolean;
  onClose: () => void;
};

const cartItems: CartItems[] = [
  {
    id: 1,
    name: 'میز چوبی',
    color: 'سیاه',
    price: 360000,
    quantity: 1,
    image: '/Images/product-5.png',
  },
  {
    id: 2,
    name: 'میز چوبی',
    color: 'قرمز',
    price: 360000,
    quantity: 1,
    image: '/Images/product-5-2.svg',
  },
  {
    id: 3,
    name: 'اباژور',
    color: 'طلایی',
    price: 100000,
    quantity: 1,
    image: '/Images/product-2.png',
  },
  {
    id: 3,
    name: 'اباژور',
    color: 'سیاه',
    price: 100000,
    quantity: 1,
    image: '/Images/product-2.png',
  },
];

export default function CartSidebar({ open, onClose }: CartSidebarProps) {
  return (
    <div className={`fixed inset-0 z-40 ${open ? 'visible' : 'invisible'}`}>
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <aside
        className={`fixed top-0 right-0 z-50 flex h-screen w-[400px] transform flex-col rounded-l-2xl bg-white px-6 py-6 shadow-lg transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'} `}
      >
        <header className="mb-10 flex w-full items-center justify-between">
          <h1 className="tracking-headline-6 text-[28px] leading-[34px] text-black/900 transition-all">
            سبد خرید شما
          </h1>
          <button
            onClick={onClose}
            className="h-6 w-6 cursor-pointer border-0 bg-transparent transition-all"
          >
            <img
              src="/Images/Close.svg"
              alt="Close"
              className="h-full w-full"
            />
          </button>
        </header>

        {/* Cart items */}
        <div className="scrollbar-custom flex-1 space-y-6 overflow-y-auto bg-white">
          {cartItems.map((item: CartItems) => (
            <MobileProductCard {...item} />
          ))}
        </div>

        {/* Totals */}
        <div className="flex justify-between py-3">
          <span className="text-neutral-07 text-xl leading-[28px] transition-all">
            مجموع
          </span>
          <span className="text-neutral-07 text-xl leading-[28px] transition-all">
            200 هزار تومن
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex flex-col gap-4">
          <Button className="bg-clay hover:!bg-clay h-12 cursor-pointer transition-opacity hover:opacity-70">
            تکمیل سفارش
          </Button>
          <Link
            to="/shopping-cart"
            className="mx-auto cursor-pointer border-b border-black/900 pb-1 text-sm leading-[22px] text-black/900 transition-all"
          >
            مشاهده سبد خرید
          </Link>
        </div>
      </aside>
    </div>
  );
}
