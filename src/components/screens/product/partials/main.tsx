import Breadcrumb from '../../../modules/breadcrumb'
import { Link } from 'react-router-dom'
import { Button } from '../../../ui/button'
import { ChevronLeft, Heart, MessagesSquare, Share2Icon } from 'lucide-react'
import Gallery from './Gallery'

const Main = () => {
  return (
    <div className='w-4/6 bg-white shadow-m rounded-xl p-6'> 
      <div className="flex justify-between items-center gap-2 pb-6">
        <Breadcrumb title='مبل 6 نفره'>
          <Link to={'/shop/mobl'} className="inline-flex items-center gap-1">
            <span
              className=" text-black-900text-sm whitespace-nowrap"
              aria-current="page"
            >
              مبل
            </span>
          </Link>
        </Breadcrumb>

        <div className="flex gap-5">
          <div className='bg-white hover:[&>*]:fill-red-600 rounded-xl shadow-xl transition-colors cursor-pointer p-2'>
            <Heart size={20} className='transition-colors stroke-red-600' />
          </div>
          <div className='bg-white rounded-xl shadow-xl hover:opacity-55 transition-opacity cursor-pointer p-2'>
            <Share2Icon size={20} />
          </div>
          <div className='bg-white rounded-xl shadow-xl hover:opacity-55 transition-opacity cursor-pointer p-2'>
            <MessagesSquare size={20} />
          </div>
        </div>
      </div>

      <div className='flex gap-3 justify-between'>
        <div className='space-y-4'>
          <h1 className='line-clamp-3 text-xl font-VazirMedium leading-8.5 -tracking-0.5 xl:line-clamp-2'>مبل 6 نفره ویکتوس 6</h1>
          <Button className='text-black' variant={"mainShaded"}>10 دیدگاه <ChevronLeft size={17} />
          </Button>
          <div className='flex gap-1'>
            <p>رنگ:</p>
            <p className='font-VazirMedium '>مشکی</p>

          </div>
          <div className='flex gap-3'>
            <div className='flex gap-2 items-center border border-gray-300 px-1 rounded-md pl-4 text-sm py-0.5'>
              <div className='w-5 h-5 bg-black rounded-md'></div>
              <p>مشکی</p>
            </div>
            <div className='flex gap-2 items-center border border-gray-300 px-1 rounded-md pl-4 text-sm py-0.5'>
              <div className='w-5 h-5 bg-red-600 rounded-md'></div>
              <p>قرمز</p>
            </div>
          </div>
          <p className='font-regular !leading-[26px] text-gray-500 text-sm'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quas iusto culpa facere recusandae magnam! Inventore quaerat neque placeat fugiat praesentium obcaecati, tenetur quam quisquam illo, officiis id deserunt alias!</p>
        </div>
         <Gallery />
      </div> 
    </div>
  )
}

export default Main 