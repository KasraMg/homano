import { Handbag, Heart, MapPin, MessageCircle } from 'lucide-react';
import React from 'react';

type DashboardItem = {
  title: string;
  count: number;
  icon: React.ReactNode;
  desc: string;
};
const Statistics = () => {
  const items: DashboardItem[] = [
    {
      title: 'آدرس‌های من',
      count: 3,
      icon: <MapPin />,
      desc: 'مدیریت آدرس ها',
    },
    {
      title: 'پیام های من',
      count: 2,
      icon: <MessageCircle />,
      desc: 'مشاهده پیام ها',
    },
    { title: 'سفارش‌های من', count: 12, icon: <Handbag />, desc: 'مشاهده همه' },
    { title: 'علاقه‌مندی‌ها', count: 8, icon: <Heart />, desc: 'مشاهده همه' },
  ];
  return (
    <div
      className="my-10 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
      dir="rtl"
    >
      {items.map((box, i) => (
        <div
          key={i}
          className="hover:drop-shadow-custom flex items-start gap-4 rounded-md border bg-white px-6 py-4 shadow-sm transition-all"
        >
          <div className="bg-neutral-01 text-secondary-color-blue flex size-14 items-center justify-center rounded-full">
            {box.icon}
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-neutral-07 font-VazirMedium text-sm">
              {box.title}
            </span>
            <span className="text-neutral-07 font-VazirBold text-2xl">
              {box.count.toLocaleString('fa-ir')}
            </span>
            <span className="text-neutral-04 font-VazirMedium text-xs">
              {box.desc}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
