import React from "react";
import {
  Heart,
  Share,
  Share2,
  ShoppingBag,
  StarHalf,
  StarIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ProductCardProps } from "../../types/product.types";
import { Button } from "../ui/button";

const ProductCard = ({
  image,
  title,
  price,
  originalPrice,
  discount,
}: ProductCardProps) => (
  <Link
    to={""}
    className="w-full block shadow rounded-xl relative group transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
  >
    <div className="relative p-5 group-hover:blur-xs w-full bg-cover bg-center transition-all ">
      <div className="absolute inset-0 rounded-t-xl bg-neutral-02 z-0"></div>
      <img
        src={image}
        alt={title}
        className="w-full h-[180px] rounded-t-xl object-contain  mix-blend-multiply"
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

    {discount && (
      <div className="px-2.5 text-sm py-1 -rotate-z-20 absolute -left-2 -top-2 rounded transition-all bg-main group-hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <span className="font-bold text0base leading-none text-neutral-01 transition-all  ">
          {discount}
        </span>
      </div>
    )}
    <div className="py-3 px-2 transition-all group-hover:blur-xs group- ">
      <div className="flex justify-between gap-2 items-center">
        <h3 className="font-bold text-base text-neutral-07">{title}</h3>

        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <StarIcon className="fill-orange-400 stroke-orange-400" size={15} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3 mt-1">
        <span className="font-bold text-sm text-neutral-07">{price}</span>
        {originalPrice && (
          <span className="font-VazirRegular text-sm text-neutral-04 line-through">
            {originalPrice}
          </span>
        )}
      </div>
    </div>
  </Link>
);

export default ProductCard;
