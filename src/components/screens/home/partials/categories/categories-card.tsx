import React from "react";
import ArrowLink from "../../../../ui/arrow-link";
import { CategoriesProps } from "../../../../../types/category.types";

const Categories: React.FC<CategoriesProps> = ({
  image,
  title,
  isTop,
  imageClass, 
}) => (
  <div
    className={`${isTop ? "bg-main" : "bg-neutral-02"} group relative rounded-xl h-full hover:-translate-0.5 transition-transform`}
  >
    {isTop ? (
      <div>
        <div className="pr-6 pt-5 mb-4">
          <h3 className=" text-white text-headline-5 mb-3">
            {title}
          </h3>
          <ArrowLink
            title="مشاهده فروشگاه"
            textColor="text-neutral-07"
            borderColor="border-white [&>*]:!text-white"
            to="/Shop"
            mobileSmall
          />
        </div>

        <img
          src={image}
          alt={title}
          className={`relative object-contain mx-auto mix-blend-multiply w-3/4 ${imageClass || ""}`}
        />
      </div>
    ) : (
      <div className="items-center justify-center sm:justify-evenly flex gap-3 h-full py-5">
        <img
          src={image}
          alt={title}
          className={`relative sm:!h-[150px] h-[120px] sm:w-1/2 w-[170px] lg:!h-[200px] object-contain mix-blend-darken ${imageClass || ""}`}
        />
        <div>
          <h3 className=" text-neutral-07  sm:!text-2xl lg:!text-3xl max-sm:text-xl text-headline-5 mb-3">
            {title}
          </h3>
          <ArrowLink
            title="مشاهده فروشگاه"
            textColor="text-neutral-07"
            borderColor="sm:!border-neutral-07 border-neutral-100"
            to="/Shop"
            mobileSmall
          />
        </div>
      </div>
    )}
  </div>
);

export default Categories;
