import React from 'react';
import { Button } from '../../../ui/button';
import { useNavigate } from 'react-router-dom';

const CheckoutSidebar = () => {
  const navigate = useNavigate();

  const handleCkeckout = () => {
    navigate('/checkout');
  };

  return ( 
      <div className="bg-neutral-02 lg:!w-2/6  sticky top-3 h-max flex w-full flex-col items-start gap-4 rounded-xl p-6 shadow-m transition-all">
        <div className=" text-neutral-07 self-stretch text-xl leading-7 transition-all">
          خلاصه سبد خرید
        </div>

        <div className="flex w-full flex-col items-start self-stretch">
          <div className="flex w-full flex-col items-start self-stretch pt-0 pb-8">
            <div className="flex w-full flex-col items-start gap-3 self-stretch pb-4">
              <div className="flex w-full items-center justify-between gap-2 rounded-xl bg-white p-3">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    className="accent-main size-5"
                    name="send"
                    id="tipax"
                  />
                  <label htmlFor="tipax"> ارسال با تیپاکس</label>
                </div>
                <div className="font-VazirRegular text-neutral-07 text-base">
                  120 تومان
                </div>
              </div>

              <div className="flex w-full items-center justify-between gap-2 rounded-xl bg-white p-3">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    className="accent-main size-5"
                    name="send"
                    id="post"
                  />
                  <label htmlFor="post"> ارسال با پست</label>
                </div>
                <div className="font-VazirRegular text-neutral-07 text-base">
                  50 تومان
                </div>
              </div>
              <div className="flex w-full items-center justify-between gap-2 rounded-xl bg-white p-3">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    className="accent-main size-5"
                    name="send"
                    id="shop"
                  />

                  <label htmlFor="shop"> مراجعه حضوری</label>
                </div>
                <div className="font-VazirRegular text-neutral-07 text-base">
                  ۰ تومان
                </div>
              </div>
            </div>
            <hr className="border-neutral-03 w-full border" />
            {/* Total */}
            <div className="flex w-full items-center justify-between py-3">
              <div className="font-bold text-neutral-07 text-xl transition-all">
                مجموع
              </div>
              <div className="font-bold text-neutral-07 text-xl transition-all">
                ۱٬۳۴۵٬۰۰۰ تومان
              </div>
            </div>
          </div>
          <Button
            className="h-10 w-full"
            variant={'main'}
            onClick={handleCkeckout}
          >
            ادامه فرایند خرید
          </Button>
        </div>
      </div> 
  );
};

export default CheckoutSidebar;
