import { Product } from "../../../../types/product.types";
import { Review } from "../../../../types/review.types";
import ButtonCard from "../../../ui/button-card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../ui/select";
import Comments from "./comments";
import ReviewInput from "./review-input";




const REVIEWS_DATA: Review[] = [
  {
    id: 1,
    name: "یکتا شیشه گر",
    avatar: "/Images/avatar_1.svg",
    rating: 4,
    comment:
      "سه هفته پیش این محصول را خریدم و حالا برگشتم تا بگویم واقعاً محصول فوق‌العاده‌ای است. از استفاده از آن خیلی لذت می‌برم و کیفیت آن کاملاً رضایت‌بخش است.",
    time: "حدود ۱ ساعت پیش",
  },
  {
    id: 2,
    name: "پیمان محمدی",
    avatar: "/Images/avatar_2.svg",
    rating: 5,
    comment:
      "سه هفته پیش این محصول را خریدم و حالا برگشتم تا بگویم واقعاً محصول فوق‌العاده‌ای است. از استفاده از آن خیلی لذت می‌برم و کیفیت آن کاملاً رضایت‌بخش است.",
    time: "حدود ۱ ساعت پیش",
  },
  {
    id: 3,
    name: "عرفان رشادی",
    avatar: "/Images/avatar_3.svg",
    rating: 5,
    comment:
      "سه هفته پیش این محصول را خریدم و حالا برگشتم تا بگویم واقعاً محصول فوق‌العاده‌ای است. از استفاده از آن خیلی لذت می‌برم و کیفیت آن کاملاً رضایت‌بخش است.",
    time: "حدود ۱ ساعت پیش",
  },
  {
    id: 4,
    name: "هانیه نجارزاده",
    avatar: "/Images/avatar_4.svg",
    rating: 5,
    comment:
      "سه هفته پیش این محصول را خریدم و حالا برگشتم تا بگویم واقعاً محصول فوق‌العاده‌ای است. از استفاده از آن خیلی لذت می‌برم و کیفیت آن کاملاً رضایت‌بخش است.",
    time: "حدود ۱ ساعت پیش",
  },
  {
    id: 5,
    name: "سپیده",
    avatar: "/Images/avatar_5.svg",
    rating: 5,
    comment:
      "سه هفته پیش این محصول را خریدم و حالا برگشتم تا بگویم واقعاً محصول فوق‌العاده‌ای است. از استفاده از آن خیلی لذت می‌برم و کیفیت آن کاملاً رضایت‌بخش است.",
    time: "حدود ۱ ساعت پیش",
  },
];

const Reviews = ({ data }: { data: Product }) => {


  return (
    <section className="flex flex-col items-start gap-12 bg-white w-full px-4 py-12">
      <div className="relative w-full">
        <h2 className="self-stretch  text-[#23262F] text-2xl tracking-headline-6 leading-[34px] transition-all  ">
          نظر شما
        </h2>
        <ReviewInput />
      </div>

      <div className="flex flex-col items-start gap-10 w-full">
        <div className="flex w-full items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-4">
          <h3 className=" text-black text-2xl tracking-headline-6 leading-[34px] relative w-fit whitespace-nowrap transition-all  ">
            نظرات کاربران <span className="text-sm text-gray-400 pr-1">(11 نظر)</span>
          </h3>
          <Select defaultValue="newest">
            <SelectTrigger
              className="w-[200px] !border-gray-300 !h-12 text-base !rounded-lg"
            >
              <SelectValue placeholder="جدیدترین" />
            </SelectTrigger>

            <SelectContent dir="rtl" className="w-full rounded-lg border border-gray-200 shadow-lg">
              <SelectItem
                value="newest"
                className="text-neutral-07 text-base"
              >
                جدیدترین
              </SelectItem>

              <SelectItem
                value="oldest"
                className="text-neutral-07 text-base"
              >
                قدیمی‌ترین
              </SelectItem>

              <SelectItem
                value="highest"
                className="text-neutral-07 text-base"
              >
                بیشترین امتیاز
              </SelectItem>

              <SelectItem
                value="lowest"
                className="text-neutral-07 text-base"
              >
                کمترین امتیاز
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 items-center gap-6 relative w-full">
          {REVIEWS_DATA.map((review: Review) => (
            <Comments key={review.id} review={review} />
          ))}
        </div>
        <ButtonCard
          title="مشاهده بیشتر"
          className="mx-auto text-neutral-07 text-base text-center leading-7 tracking-button-s whitespace-nowrap box-border inline-flex items-center justify-center gap-2 px-10 py-1.5 rounded-full border border-neutral-07 transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        />
      </div>
    </section>
  );
};

export default Reviews;
