import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Badge from '../ui/badge';
import CartSidebar from './cart-sidebar';
import MobileMenu from './mobile-menu';
import NavUser from './authoritarian/nav-user';
import { Menu, ShoppingCartIcon } from 'lucide-react';

type MenuItem = {
  name: string;
  path: string;
};

const Navbar = () => {
  const [menuItems] = useState<MenuItem[]>([
    { name: 'خانه', path: '/' },
    { name: 'فروشگاه', path: '/shop' },
    { name: 'نقالات', path: '/blogs' },
    { name: 'تماس با ما', path: '/contact-us' },
  ]);
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  const location = useLocation();
console.log(location);

  const isActive = false

  return (
    <div>
      <nav className="relative flex w-full items-center justify-between bg-white">
        <div className="flex items-center justify-center gap-2">
          <Menu onClick={() => setOpenMobileMenu(true)} className="md:hidden" size={24} />
          <Link to={'/'}>
            <img className='h-9' src="/Images/logo.jpg" alt="" />
          </Link>
        </div>

        <ul className=" hidden items-center gap-10 py-4.5 text-sm md:flex">
          {menuItems.map((menu: MenuItem) => (
            <li className="group" key={menu.path}>
              <Link
                to={menu.path}
                className={`transition-all hover:text-black ${isActive ? 'text-neutral-07' : 'text-neutral-04'
                  }`}
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 py-4">
          <button className="hidden sm:block">
            <img
              src="/Images/Search.svg"
              alt="search-icon"
              className="hover:drop-shadow-custom size-6 cursor-pointer transition-all"
            />
          </button>

          <div
            onClick={() => setOpenCart(true)}
            className="relative flex items-center cursor-pointer justify-center gap-2"
          >
            <ShoppingCartIcon />
            <Badge
              className="bg-red-600 absolute -top-2 -left-1 flex items-center justify-center rounded-full px-1.5 py-0.5 text-xs text-white"
              number={(2).toLocaleString('fa-IR')}
            />
          </div>
          <NavUser />
        </div>
      </nav>

      <CartSidebar open={openCart} onClose={() => setOpenCart(false)} />
      <MobileMenu
        open={openMobileMenu}
        onClose={() => setOpenMobileMenu(false)}
      />
    </div>
  );
};

export default Navbar;
