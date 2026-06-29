import { Button } from '../../../ui/button';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../../../hooks/useUser';
import { useEffect, useState } from 'react';
import { CartItem } from '../../../../types/user.types';

const CheckoutSidebar = () => {
  const [type, setType] = useState('post')
  const navigate = useNavigate();
  const { data } = useUser()

  const handleCkeckout = () => {
    navigate('/checkout');
  };
  const [totalPrice, setTotalPrice] = useState<number | null>(null)

  useEffect(() => {
    if (data?.cart) {
      const prices = data.cart.map((item: CartItem) => item.quantity * item.product.price);
      const total = prices.reduce((a: number, b: number) => a + b, 0);
      setTotalPrice(total);
    }
  }, [data]);
  return (
    <div className={`${data?.cart.length == 0 ? 'pointer-events-none opacity-20' : ''} bg-neutral-02 lg:!w-2/6  sticky top-3 h-max flex w-full flex-col items-start gap-4 rounded-xl p-6 shadow-m transition-all`}>
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
                  onChange={() => setType('post')}
                  checked={type == 'post'}
                  id="post"
                />
                <label htmlFor="post"> ارسال با پست</label>
              </div>
              <div className="font-VazirRegular text-neutral-07 text-base">
                50,000 تومان
              </div>
            </div>
            <div className="flex w-full items-center justify-between gap-2 rounded-xl bg-white p-3">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  className="accent-main size-5"
                  name="send"
                  onChange={() => setType('tipax')}
                  checked={type == 'tipax'}
                  id="tipax"
                />
                <label htmlFor="tipax"> ارسال با تیپاکس</label>
              </div>
              <div className="font-VazirRegular text-neutral-07 text-base">
                120,000 تومان
              </div>
            </div>


            <div className="flex w-full items-center justify-between gap-2 rounded-xl bg-white p-3">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  className="accent-main size-5"
                  name="send"
                  onChange={() => setType('shop')}
                  checked={type == 'shop'}
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
              {data?.cart.length !== 0 ? (Number(totalPrice) + (type == 'post' ? 50000 : type == 'tipax' ? 120000 : 0))?.toLocaleString() : 0} تومان
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
