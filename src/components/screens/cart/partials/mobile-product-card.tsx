import { Minus, Plus, Trash } from 'lucide-react';
import React from 'react';
import { CartItems } from '../../../../types/cart.types';

const MobileProductCard = (item: CartItems) => {
  return (
    <div
      key={item.id}
      className="flex items-center border-b border-gray-200 pb-6"
    >
      <div className="bg-neutral-02">
        <img
          src={item.image}
          alt={item.name}
          className="h-24 w-20 object-cover mix-blend-multiply transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        />
      </div>
      <div className="mx-4 flex flex-1 justify-between">
        <div className="space-y-2">
          <h2 className="text-neutral-07 leading-[22px] transition-all">
            {item.name}
          </h2>
          <p className="text-neutral-04 text-xs leading-[20px] transition-all">
            {item.color}
          </p>
          <span className="leading-[22px] text-black/900 transition-all">
            {item.price.toLocaleString()}
          </span>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="border-neutral-04 mt-2 flex h-8 w-20 items-center justify-between rounded border px-2 transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <button className="cursor-pointer text-black/900">
              <Plus size={16} />
            </button>
            <span className="text-xs text-black/900">{item.quantity}</span>
            <button className="cursor-pointer text-black/900">
              <Minus size={16} />
            </button>
          </div> 
          <div className="cursor-pointer rounded-md bg-red-600 px-8 py-2 transition-opacity hover:opacity-75">
            <Trash size={17} className="stroke-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileProductCard;
