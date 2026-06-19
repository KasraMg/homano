import {
  Heart,
  Share2,
  StarIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "../../types/product.types";
import { Button } from "../ui/button";
import { localAssetsUrl } from "../../constants";

const ProductCard = ({
  images,
  name,
  price,
  priceWithoutOff,
  star,
  off,
  code
}: Product) => (
  <Link
    key={code}
    to={`/product/${code}`}
    className="w-full h-max block shadow rounded-xl relative group transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
  >
    <div className="relative group-hover:blur-xs w-full bg-cover bg-center transition-all ">
      <div className="absolute inset-0 rounded-t-xl bg-neutral-02 z-0"></div>
      <img
        src={localAssetsUrl + images[0]}
        alt={name}
        className="w-full h-[200px] rounded-t-xl object-cover  mix-blend-multiply"
      />
    </div>
    <div className="flex justify-end gap-2 pt-0 items-center absolute opacity-0 group-hover:opacity-100 top-1/2 left-1/2 -translate-x-1/2">
      <Button className="gap-2 transition-all  h-[40px] py-3 px-2 hover:bg-white hover:opacity-70 transform bg-white text-main shadow border-main border text-sm tracking-button-s rounded-lg shadow-shadow-01 flex items-center justify-center cursor-pointer">
        افزودن به سبد خرید
        {/* <ShoppingBag size={17} />  */}
      </Button>
      <div className="bg-white px-2 py-2.5 rounded-lg hover:opacity-70 transition-opacity text-main shadow border-main border ">
        <Share2 className="cursor-pointer" size={17} />
      </div>
      <div className="bg-white px-2 py-2.5 hover:[&>*]:stroke-red-600 rounded-lg text-main shadow border-main border ">
        <Heart className="cursor-pointer transition-colors" size={17} />
      </div>
    </div>
    <div className="py-3 px-2 transition-all group-hover:blur-xs">
      <h3 className="font-bold text-base text-neutral-07 pb-2 truncate">{name}</h3>

      {priceWithoutOff && (
        <div className="flex items-center justify-end gap-2 mt-1">
          <span className="font-VazirRegular text-sm text-neutral-04 line-through">{priceWithoutOff.toLocaleString()}</span>
          <p className="bg-main text-white p-1.5 pb-1 rounded-md text-sm">{off}%</p>
        </div>
      )}
      <div className="flex justify-between items-center">
        <div className="flex gap-0.5 items-center">
          <p className="pt-0.5">{star}</p> <StarIcon className="fill-orange-400 stroke-orange-400" size={15} />
        </div>
        <p className="font-bold text-left text-neutral-07 pt-2">{price.toLocaleString()} تومان</p>
      </div>
    </div>
  </Link>
);

export default ProductCard;
