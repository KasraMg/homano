import { Product } from '../../../../../types/product.types';
import { Link } from 'react-router-dom';
import { localAssetsUrl } from '../../../../../constants';
import { StarIcon } from 'lucide-react';

const DashboardProductCard = ({ images, name, code, slug, star }: Product) => {
  return (
    <Link
      to={`/product/${code}/${String(slug).replaceAll(' ', '-')}`}
      key={code}
      className="relative flex w-full items-center gap-2 rounded-lg bg-cover bg-center p-1.5 shadow hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
    >
      <img
        src={localAssetsUrl + images[0]}
        alt={name}
        className="h-[70px] w-[70px] rounded-t-xl object-contain mix-blend-multiply"
      />

      <h3 className="text-neutral-07 truncate pt-2 pb-2 text-center text-[15px]">
        {name}
         <div className="flex items-center gap-0.5 mr-auto">
        <p className="pt-1 text-sm text-neutral-05">{star}</p>{' '}
        <StarIcon className="fill-orange-400 stroke-orange-400" size={15} />
      </div>
      </h3>
     
    </Link>
  );
};

export default DashboardProductCard;
