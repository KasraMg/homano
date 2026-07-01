import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Handbag,
  Heart,
  Sofa,
  User,
  TicketCheck,
  LogOut,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

type SidebarItem = {
  id: string;
  label: string;
  icon: LucideIcon;
  to?: string;
  type?: "action";
  onClick?: () => void;
};

const items: SidebarItem[] = [
  {
    id: "dashboard",
    label: "پیشخوان",
    to: "/my-account/dashboard",
    icon: LayoutDashboard,
  },
  {
    id: "orders",
    label: "سفارش‌ها",
    to: "/my-account/orders",
    icon: Handbag,
  },
  {
    id: "wishlist",
    label: "علاقه‌مندی‌ها",
    to: "/my-account/wishlist",
    icon: Heart,
  },
  {
    id: "products",
    label: "محصولات",
    to: "",
    icon: Sofa,
  },
  {
    id: "user-account",
    label: "حساب کاربری",
    to: "/my-account/user-account",
    icon: User,
  },
  {
    id: "tickets",
    label: "تیکت ها",
    to: "/my-account/tickets",
    icon: TicketCheck,
  },
  {
    id: "logout",
    label: "خروج از حساب",
    type: "action",
    icon: LogOut,
    onClick: () => {
      console.log("logout");
    },
  },
];

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();

  const baseClass =
    "flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all";

  const activeClass = "bg-[#EAF1FF] text-secondary-color-blue";
  const inactiveClass = "hover:bg-[#F3F6FC] text-neutral-07";

  return (
    <nav className="space-y-1 mt-3">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = item.to && pathname === item.to;

        const wrapperClass = `${baseClass} ${isActive ? activeClass : inactiveClass
          }`;

        const iconClass = isActive
          ? "text-secondary-color-blue"
          : "text-neutral-04";

        const textClass = isActive
          ? "font-VazirMedium text-sm text-secondary-color-blue"
          : "font-VazirMedium text-sm text-neutral-07";

        if (item.to) {
          return (
            <Link key={item.id} to={item.to} className={wrapperClass}>
              <Icon size={18} className={iconClass} />
              <span className={textClass}>{item.label}</span>
            </Link>
          );
        }

        return (
          <button
            key={item.id}
            type="button"
            onClick={item.onClick}
            className={`${wrapperClass} w-full text-right`}
          >
            <Icon size={18} className={iconClass} />
            <span className={textClass}>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default Sidebar;





