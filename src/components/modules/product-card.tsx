import {
  Heart,
  Share2,
  ShoppingBag,
  StarIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "../../types/product.types";
import { Button } from "../ui/button";
import { localAssetsUrl } from "../../constants";
import ShareModal from "./share-modal";
import Favorite from "./favorite";

const ProductCard = ({
  images,
  name,
  price,
  priceWithoutOff,
  star,
  off,
  code,
  slug
}: Product) => (
  <div
    key={code}
    className="w-full h-max block shadow rounded-xl relative group transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
  >
    <Link
      to={`/product/${code}/${String(slug).replaceAll(" ", "-")}`} className="relative group-hover:blur-xs w-full bg-cover bg-center transition-all ">
      <div className="absolute inset-0 rounded-t-xl bg-neutral-02 z-0"></div>
      <img
        src={localAssetsUrl + images[0]}
        alt={name}
        className="w-full h-[200px] rounded-t-xl object-cover  mix-blend-multiply"
      />
    </Link>
    <div className="flex justify-end gap-2 pt-0 items-center absolute opacity-0 group-hover:opacity-100 top-1/2 left-1/2 -translate-x-1/2">
      <Button className="gap-2 transition-all h-[40px] py-3 px-2 hover:bg-white hover:opacity-70 transform bg-white border-black text-black border text-sm tracking-button-s rounded-lg shadow-shadow-01 flex items-center justify-center cursor-pointer">
        افزودن به سبد خرید
        <ShoppingBag className="text-red-500" size={17} /> 
      </Button>
      <ShareModal className="px-2 py-2.5 border border-black rounded-lg hover:opacity-70" link={location.href} />
    </div>

    <Link
      to={`/product/${code}/${String(slug).replaceAll(" ", "-")}`} className="py-3 px-2 block transition-all group-hover:blur-xs">
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
    </Link>
  </div>
);

export default ProductCard;
