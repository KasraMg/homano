import React from 'react';

import {
  Heart,
  Handbag,
  MessageCircle,
  MapPin,
  ChevronLeft,
  ChevronRight,
  PencilIcon,
  User,
  Mail,
  Phone,
  CreditCard,
} from 'lucide-react';

type DashboardItem = {
  title: string;
  count: number;
  icon: React.ReactNode;
  desc: string;
};

const DashboardScreen = () => {
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
    <>
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

      <div className="mb-5 flex w-full flex-col gap-4 xl:flex-row" dir="rtl">
        <div className="hover:drop-shadow-custom w-full rounded-md border bg-white px-6 py-6 shadow-sm transition-all xl:w-[40%]">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-VazirBold text-neutral-07 ml-2 text-base">
              آخرین سفارش ها
            </h2>
            <h4 className="font-VazirMedium text-secondary-color-blue flex items-center gap-2 text-xs">
              مشاهده همه
              <ChevronLeft size={14} />
            </h4>
          </div>

          <div className="text-neutral-04 space-y-3 text-xs">
            <div className="border-neutral-02 flex items-center gap-4 border-b pb-3">
              <img
                src="/Images/product-13.png"
                alt="سفارش ۱۲۵۴۸"
                className="h-15 w-30 rounded-md object-cover"
              />
              <div className="flex flex-1 items-center justify-between">
                <div className="mb-1 flex flex-col gap-2">
                  <span className="font-VazirBold text-neutral-07 block">
                    مبل چند نفره کرم
                  </span>
                  <span className="font-VazirRegular text-neutral-04 block">
                    ۲۲ اردیبهشت ۱۴۰۳
                  </span>
                  <span className="font-VazirMedium text-neutral-07">
                    ۸۵,۰۰۰,۰۰۰ تومان
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="rounded-md bg-green-100 px-3 py-2 text-[10px] text-green-700">
                    در حال ارسال
                  </span>
                </div>
              </div>
            </div>

            <div className="border-neutral-02 flex items-center gap-4 border-b pb-3">
              <img
                src="/Images/product-17.webp"
                alt="سفارش ۱۲۵۴۸"
                className="h-15 w-30 rounded-md object-cover"
              />
              <div className="flex flex-1 items-center justify-between">
                <div className="mb-1 flex flex-col gap-2">
                  <span className="font-VazirBold text-neutral-07 block">
                    مبل راحتی سبز
                  </span>
                  <span className="font-VazirRegular text-neutral-04 block">
                    ۲۲ اردیبهشت ۱۴۰۳
                  </span>
                  <span className="font-VazirMedium text-neutral-07">
                    ۸۵,۰۰۰,۰۰۰ تومان
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="rounded-md bg-green-100 px-3 py-2 text-[10px] text-green-700">
                    تحویل داده شده
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pb-3">
              <img
                src="/Images/product-14.png"
                alt="سفارش ۱۲۵۴۸"
                className="h-15 w-30 rounded-md object-cover"
              />
              <div className="flex flex-1 items-center justify-between">
                <div className="mb-1 flex flex-col gap-2">
                  <span className="font-VazirBold text-neutral-07 block">
                    مبل چند نفره کرم
                  </span>
                  <span className="font-VazirRegular text-neutral-04 block">
                    ۲۲ اردیبهشت ۱۴۰۳
                  </span>
                  <span className="font-VazirMedium text-neutral-07">
                    ۸۵,۰۰۰,۰۰۰ تومان
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="bg-secondary-color-red/10 text-secondary-color-red rounded-md px-3 py-2 text-[10px]">
                    لغو شده
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* بخش محصولات محبوب شما */}
        <div className="hover:drop-shadow-custom w-full rounded-md border bg-white px-4 py-6 shadow-sm transition-all xl:w-[60%]">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-VazirBold text-neutral-07 ml-2 text-base">
              محصولات محبوب شما
            </h2>
            <h4 className="font-VazirMedium text-secondary-color-blue flex cursor-pointer items-center gap-2 text-xs">
              مشاهده همه
              <ChevronLeft size={14} />
            </h4>
          </div>

          <div className="relative">
            <button className="group hover:bg-main absolute top-1/2 -right-7 flex size-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border bg-white text-gray-500 shadow-md transition-all hover:text-white">
              <ChevronRight
                size={16}
                className="inline-block text-xl leading-none transition-all hover:group-hover:text-white"
              />
            </button>
            <button className="hover:bg-main absolute top-1/2 -left-7 flex size-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border bg-white text-gray-500 shadow-md transition-all hover:text-white">
              <ChevronLeft
                size={16}
                className="inline-block text-xl leading-none transition-all hover:group-hover:text-white"
              />
            </button>

            <div className="grid grid-cols-4 gap-2">
              <div className="overflow-hidden bg-white">
                <div className="relative">
                  <img
                    src="/Images/product-19.webp"
                    alt="میز ناهارخوری گلدیس"
                    className="h-34 w-full rounded-md object-cover"
                  />
                  <button className="absolute top-2 left-1.5 flex size-6 cursor-pointer items-center justify-center rounded-full border bg-white shadow-sm">
                    <Heart
                      size={16}
                      className="text-secondary-color-red fill-secondary-color-red"
                    />
                  </button>
                </div>
                <div className="px-1 py-3">
                  <p className="font-VazirBold text-neutral-07 mb-2 text-xs">
                    میز ناهارخوری گلدیس
                  </p>
                  <p className="font-VazirRegular text-neutral-07 text-xs">
                    ۳۴,۰۰۰,۰۰۰ تومان
                  </p>
                </div>
              </div>

              <div className="overflow-hidden bg-white">
                <div className="relative">
                  <img
                    src="/Images/product-18.webp"
                    alt="میز ناهارخوری گلدیس"
                    className="h-34 w-full rounded-md object-cover"
                  />
                  <button className="absolute top-2 left-1.5 flex size-6 cursor-pointer items-center justify-center rounded-full border bg-white shadow-sm">
                    <Heart
                      size={16}
                      className="text-secondary-color-red fill-secondary-color-red"
                    />
                  </button>
                </div>
                <div className="px-1 py-3">
                  <p className="font-VazirBold text-neutral-07 mb-2 text-xs">
                    مبل تک نفره ونیز
                  </p>
                  <p className="font-VazirRegular text-neutral-07 text-xs">
                    ۲۸,۰۰۰,۰۰۰ تومان
                  </p>
                </div>
              </div>

              <div className="overflow-hidden bg-white">
                <div className="relative">
                  <img
                    src="/Images/product-15.png"
                    alt="میز ناهارخوری گلدیس"
                    className="h-34 w-full rounded-md object-cover"
                  />
                  <button className="absolute top-2 left-1.5 flex size-6 cursor-pointer items-center justify-center rounded-full border bg-white shadow-sm">
                    <Heart
                      size={16}
                      className="text-secondary-color-red fill-secondary-color-red"
                    />
                  </button>
                </div>
                <div className="px-1 py-3">
                  <p className="font-VazirBold text-neutral-07 mb-2 text-xs">
                    مبل چستر - سبز
                  </p>
                  <p className="font-VazirRegular text-neutral-07 text-xs">
                    ۶۲,۰۰۰,۰۰۰ تومان
                  </p>
                </div>
              </div>

              <div className="overflow-hidden bg-white">
                <div className="relative">
                  <img
                    src="/Images/product-16.webp"
                    alt="میز ناهارخوری گلدیس"
                    className="h-34 w-full rounded-md object-cover"
                  />
                  <button className="absolute top-2 left-1.5 flex size-6 cursor-pointer items-center justify-center rounded-full border bg-white shadow-sm">
                    <Heart
                      size={16}
                      className="text-secondary-color-red fill-secondary-color-red"
                    />
                  </button>
                </div>
                <div className="px-1 py-3">
                  <p className="font-VazirBold text-neutral-07 mb-2 text-xs">
                    مبل ال نیایر - مدل ونیز
                  </p>
                  <p className="font-VazirRegular text-neutral-07 text-xs">
                    ۸۵,۰۰۰,۰۰۰ تومان
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hover:drop-shadow-custom mx-auto w-[75%] flex-1 rounded-md border bg-white px-12 py-6 shadow-sm transition-all">
        <div className="flex items-center gap-4">
          <div className="bg-main flex size-8 cursor-pointer items-center justify-center rounded-full text-white">
            <PencilIcon size={14} />
          </div>
          <h2 className="font-VazirBold text-neutral-07 ml-2 text-base">
            اطلاعات حساب کاربری
          </h2>
        </div>

        <div className="">
          <div className="border-neutral-02 flex items-center justify-between border-b py-5">
            <div className="text-neutral-04 flex items-center gap-4">
              <div className="bg-neutral-01 text-secondary-color-blue flex size-8 items-center justify-center rounded-full">
                <User size={20} />
              </div>
              <span className="font-VazirMedium text-neutral-07 text-sm">
                نام و نام خانوادگی
              </span>
            </div>
            <span className="font-VazirBold text-neutral-07 text-sm">
              سینا یوسفی
            </span>
          </div>

          <div className="border-neutral-02 flex items-center justify-between border-b py-5">
            <div className="text-neutral-04 flex items-center gap-4">
              <div className="bg-neutral-01 text-secondary-color-blue flex size-8 items-center justify-center rounded-full">
                <Mail size={20} />
              </div>
              <span className="font-VazirMedium text-neutral-07 text-sm">
                ایمیل
              </span>
            </div>
            <span className="font-VazirBold text-neutral-07 text-sm">
              sina.yousefi@example.com
            </span>
          </div>

          <div className="border-neutral-02 flex items-center justify-between border-b py-5">
            <div className="text-neutral-04 flex items-center gap-4">
              <div className="bg-neutral-01 text-secondary-color-blue flex size-8 items-center justify-center rounded-full">
                <Phone size={20} />
              </div>
              <span className="font-VazirMedium text-neutral-07 text-sm">
                شماره تماس
              </span>
            </div>
            <span className="font-VazirBold text-neutral-07 text-sm">
              09121234578
            </span>
          </div>

          <div className="flex items-center justify-between py-5">
            <div className="text-neutral-04 flex items-center gap-4">
              <div className="bg-neutral-01 text-secondary-color-blue flex size-8 items-center justify-center rounded-full">
                <CreditCard size={20} />
              </div>
              <span className="font-VazirMedium text-neutral-07 text-sm">
                کد ملی
              </span>
            </div>
            <span className="font-VazirBold text-neutral-07 text-sm">__</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardScreen;
