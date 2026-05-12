import { Star } from "lucide-react";
import { Review } from "../../../../types/review.types";
import CustomRating from "../../../ui/custom-rating";


const Comments = ({ review }: { review: Review }) => (
  <div className="w-full items-start gap-10  p-4 relative border-b border-solid shadow-m rounded-xl border-neutral-03">
    <div className="flex gap-3 items-center">
      <img
        className="relative size-18 rounded-full bg-cover bg-[50%_50%]"
        src={review.avatar}
        alt={`${review.name} تصویر پروفایل`}
      />
      <div className="space-y-2">
        <div className="flex gap-2 items-center">
          <p className="font-VazirMedium">{review.name}</p>
          <p
            className="font-VazirRegular text-xs whitespace-nowrap"
          >
            {review.time}
          </p>
        </div>
        <div className="flex gap-1">
          <Star className="fill-orange-500 stroke-orange-500" size={19}/>
          <Star className="fill-orange-500 stroke-orange-500" size={19}/>
          <Star className="fill-orange-500 stroke-orange-500" size={19}/>
          <Star className="fill-orange-500 stroke-orange-500" size={19}/>
          <Star className="fill-orange-500 stroke-orange-500" size={19}/>
        </div>
      </div>
    </div>
    <p className="w-full font-VazirRegular pt-3 text-[#353945] text-base tracking-[0] leading-[26px]">
      {review.comment}
    </p>
  </div>
);

export default Comments;
