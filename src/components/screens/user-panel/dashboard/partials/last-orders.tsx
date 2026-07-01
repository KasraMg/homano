import { ChevronLeft } from 'lucide-react';
import { User } from '../../../../../types/user.types';
import { useEffect, useState } from 'react';

const LastOrders = ({ data }: { data: User }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (data) {
    }
  }, [data]);

  return (
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
  );
};

export default LastOrders;
