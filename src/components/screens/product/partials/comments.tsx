import { Star } from "lucide-react";
import { Review } from "../../../../types/review.types";  

const Comments = ({ review }: { review: Review }) => {  
  return (
    <div className="w-full items-start gap-10  p-4 relative border-b border-solid shadow-m rounded-xl border-neutral-03">
      <div className="flex gap-3 items-center">
        <img
          className="relative size-18 rounded-full bg-cover bg-[50%_50%]"
          src={(review as any).avatar ?? '/Images/User.svg'}
          alt={`${review.user?.name} تصویر پروفایل`}
        />
        <div className="space-y-2">
          <div className="flex gap-2 items-center">
            <p className="font-VazirMedium">{review.user?.name}</p>
            <p
              className="font-VazirRegular text-xs whitespace-nowrap"
            >
              {review.createdAt}
            </p>
          </div>
          <div className="flex gap-1">
            {[...Array(review.rating)].map(() => (
              <Star className="fill-orange-500 stroke-orange-500" size={19} />
            ))}
          </div>
        </div>
      </div>
      <p className="w-full font-VazirRegular pt-3 text-[#353945] text-base tracking-[0] leading-[26px]">
        {review.comment}
      </p>
    </div>
  )
};

export default Comments;
