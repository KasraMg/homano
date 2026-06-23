import { MessagesSquare } from 'lucide-react'
import ShareModal from '../../../modules/share-modal'
import Favorite from '../../../modules/favorite'
import { Link } from 'react-router-dom'

const MainIcons = ({ className, productCode, isFave }: { className?: string, productCode: number, isFave: boolean }) => {
    return (
        <div className={`${className ?? ''} flex gap-0.5 sm:!gap-5`}>
            <Favorite productCode={productCode} isFave={isFave} />
            <ShareModal link={location.href} />
            <a href="#comments" className='bg-white block rounded-xl sm:shadow-xl hover:opacity-55 transition-opacity cursor-pointer p-2'>
                <MessagesSquare size={20} />
            </a>
        </div>
    )
}

export default MainIcons