import { Heart, MessagesSquare, Share2Icon } from 'lucide-react'

const MainIcons = ({ className }: { className?: string }) => {
    return (
        <div className={`${className ?? ''} flex gap-5`}>
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
    )
}

export default MainIcons