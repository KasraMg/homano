import { Link, Outlet } from 'react-router-dom';
import { Bell, Menu, LogOut, ShoppingCartIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../../components/ui/sheet';
import { useUser } from '../../hooks/useUser';
import { useEffect, useState } from 'react';
import Badge from '../../components/ui/badge';
import Sidebar from '../../components/screens/user-panel/sidebar';

const UserPanelLayout = () => {
  const { data } = useUser();
  const [count, setCount] = useState<null | number>(null);
  console.log(data);
  useEffect(() => {
    if (data) {
      setCount(data.cart.length);
    }
  }, [data]);

  return (
    <div className="bg-neutral-03 flex min-h-screen">
      <Sidebar className="hidden lg:!block" />

      <section className="w-full p-2">
        <div className="border-neutral-02 rounded-md border bg-white p-4 shadow-sm sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap">
            <div className="flex items-center gap-3">
              <div className="hidden lg:!block">
                <h2 className="font-VazirBold text-neutral-07 text-lg sm:text-xl">
                   درود {data?.name} عزیز 👋
                </h2>
                <p className="font-VazirMedium text-neutral-04 mt-2 text-xs sm:text-sm">
                  به پنل کاربری خود در گالری هومانو خوش آمدید.
                </p>
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <button className="lg:hidden">
                    <Menu />
                  </button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[280px] border-none bg-transparent p-0 shadow-none"
                >
                  <Sidebar className="!block !rounded-l-2xl lg:!hidden" />
                </SheetContent>
              </Sheet>
              <Link to="/" className="flex justify-center lg:!hidden">
                <img
                  src="/Images/logo.jpg"
                  alt=""
                  className="h-8 w-30 object-contain"
                />
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Link
                to={'/cart'}
                className="relative flex cursor-pointer items-center justify-center gap-2"
              >
                <ShoppingCartIcon size={20} />
                {count ? (
                  <Badge
                    className="absolute -top-2 -left-1 flex items-center justify-center rounded-full bg-red-600 px-1.5 py-0.5 text-xs text-white"
                    number={Number(count).toLocaleString('fa-IR')}
                  />
                ) : (
                  ''
                )}
              </Link>
              <Bell
                size={20}
                className="hover:text-main cursor-pointer transition-all"
              />
              <div className="bg-neutral-03 mx-1 hidden h-6 w-[1px] sm:block"></div>

              <LogOut size={20} />
            </div>
          </div>

          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default UserPanelLayout;
