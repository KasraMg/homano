import React from 'react';
import { CartItems } from '../../../../types/cart.types';
import { Minus, Plus, Trash } from 'lucide-react';

const DesktopProductCard = (item: CartItems) => {
  return (
    <div
      key={item.id}
      className="border-neutral-03 grid w-full grid-cols-[168px_1fr] items-center border-b border-solid py-6"
    >
      <div className="flex items-center gap-4">
        <div className="bg-neutral-02">
          <img
            src={item.image}
            alt={item.name}
            className="h-24 w-20 object-cover mix-blend-multiply transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="font-bold text-neutral-07 text-sm leading-5.5 tracking-[0] transition-all">
            {item.name}
          </div>

          <div className="font-VazirRegular text-neutral-04 text-xs leading-5 tracking-[0] whitespace-nowrap transition-all">
            رنگ: {item.color}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 items-center text-center">
        <div className="flex justify-center">
          <div className="border-neutral-04 flex h-8 w-20 items-center justify-between rounded border px-2 transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <button className="cursor-pointer text-black/900">
              <Plus size={16} />
            </button>
            <span className="text-black/900">{item.quantity}</span>
            <button className="cursor-pointer text-black/900">
              <Minus size={16} />
            </button>
          </div>
        </div>

        <div className="font-VazirRegular text-black-900 text-xs leading-7.5 whitespace-nowrap transition-all">
          {item.price.toLocaleString('fa-IR')} تومان
        </div>

        <div className="font-bold text-black-900 text-base leading-7.5 whitespace-nowrap transition-all flex gap-3">
          {(item.price * item.quantity).toLocaleString('fa-IR')} تومان
          <div className="bg-red-600 p-2 rounded-md cursor-pointer hover:opacity-75 transition-opacity">
            <Trash size={17} className='stroke-white'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopProductCard;
