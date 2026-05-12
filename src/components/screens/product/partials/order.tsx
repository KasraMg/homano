import React from 'react'
import { Button } from '../../../ui/button'
import { ShoppingBag } from 'lucide-react'

const Order = () => {
  return (
    <div className='w-2/6 bg-neutral-02 lg:!w-2/6  sticky top-3 h-max flex flex-col items-start gap-4 rounded-xl p-6 shadow-m'>
      <p className='line-clamp-3 text-xl font-VazirMedium leading-8.5 -tracking-0.5 xl:line-clamp-2'>مبل 6 نفره ویکتوس 6</p>
      <ul className='list-disc text-sm space-y-2 pr-3'>
        <li className='text-gray-500'>
          7 روز ضمانت بازگشت کالا
        </li>
        <li className='text-gray-500'>
          ضمانت اصالت کالا
        </li>
      </ul>
      <p className='text-[19px] font-VazirMedium !leading-5 xl:text-[20px] mr-auto'>123,000 <span className='text-sm'>تومان</span></p>
      <Button className='w-full h-12' variant={"main"}>افزودن به سبد خرید <ShoppingBag /></Button>
    </div>
  )
}
export default Order