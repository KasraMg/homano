import { Product } from '../../../../types/product.types'
import { Button } from '../../../ui/button'
import { ShoppingBag } from 'lucide-react'

const Order = ({ data }: { data: Product }) => {
  return (
    <div className='w-2/6 bg-neutral-02 lg:!w-2/6  sticky top-3 h-max flex flex-col items-start gap-4 rounded-xl p-6 shadow-m'>
      <p className='line-clamp-3 text-xl font-VazirMedium leading-8.5 -tracking-0.5 xl:line-clamp-2'>{data.name}</p>
      <ul className='list-disc text-sm space-y-2 pr-3'>
        <li className='text-gray-500'>
          7 روز ضمانت بازگشت کالا
        </li>
        <li className='text-gray-500'>
          ضمانت اصالت کالا
        </li>
      </ul>
      {data.priceWithoutOff ? <p className='text-neutral-04 line-through font-VazirMedium !leading-5 mr-auto'>{data.priceWithoutOff.toLocaleString()} <span className='text-sm'>تومان</span></p> : ""}
      <div className='flex gap-2 w-full justify-end items-center'>
        {data.off ? <span className='bg-red-500 rounded-full block py-1 px-1.5 text-xs text-white'>{data.off}%</span> : ''}
        <p className='text-[19px] font-VazirMedium pt-1 !leading-5 xl:text-[20px'>{data.price.toLocaleString()} <span className='text-sm'>تومان</span></p>
      </div>
      <Button className='w-full h-12' variant={"main"}>افزودن به سبد خرید <ShoppingBag /></Button>
    </div >
  )
}
export default Order