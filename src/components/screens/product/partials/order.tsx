import { useEffect, useState } from 'react'
import useOrder from '../../../../hooks/useOrder'
import { useUser } from '../../../../hooks/useUser'
import { Product } from '../../../../types/product.types'
import { Button } from '../../../ui/button'
import { LoaderCircleIcon, ShoppingBag } from 'lucide-react'
import { CartItem } from '../../../../types/user.types'
import QuantityControls from './quantity-controls'

const Order = ({ data, activeColor }: {
  data: Product,
  activeColor: { code: string, name: string } | null,

}) => {
  const { mutation } = useOrder()
  const { data: user } = useUser()
  const [cartProduct, setCartProduct] = useState<null | CartItem>(null)

  useEffect(() => {
    if (user) {
      const isExit = user.cart.find((i: CartItem) => i.product.code == data.code)
      setCartProduct(isExit)
    }
  }, [user])

  return (
    <div className='w-full max-w-[500px] mx-auto lg:!mx-0 bg-neutral-02 lg:!w-2/6 sticky top-3 h-max flex flex-col items-start gap-4 rounded-xl p-4 sm:!p-6 shadow-m'>
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
      <div className='flex justify-between items-center gap-2 w-full'>
        {activeColor ?
          <div className={`cursor-pointer flex gap-2 items-center text-sm`}>
            <div style={{ background: activeColor.code }} className={`w-5 h-5 border border-neutral-03 rounded-md`}></div>
            <p>{activeColor.name}</p>
          </div>
          : ''}
        <div className='flex gap-2 justify-end items-center'>
          {data.off ? <span className='bg-red-500 rounded-full block py-1 px-1.5 text-xs text-white'>{data.off}%</span> : ''}
          <p className='text-[19px] font-VazirMedium pt-1 !leading-5 xl:text-[20px]'>{data.price.toLocaleString()} <span className='text-sm'>تومان</span></p>
        </div>
      </div>
      {cartProduct ? <QuantityControls endFunctionHandler={() => setCartProduct(null)} showBtn className="!flex-row w-full" data={cartProduct} /> : <Button onClick={(() => mutation.mutate({ color: String(activeColor?.code), code: data.code }, { onSuccess: (data) => setCartProduct(data.product) }))} className='w-full h-12' variant={"main"}>{mutation.isPending ? <LoaderCircleIcon className='mx-auto size-5 animate-spin' /> : <>افزودن به سبد خرید <ShoppingBag /></>} </Button>
      }
    </div >
  )
}
export default Order