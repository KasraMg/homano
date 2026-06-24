import { LoaderCircle } from "lucide-react";
import useFeedback from "../../../../hooks/useFeedback";
import { Product } from "../../../../types/product.types";
import { Review } from "../../../../types/review.types";
import ButtonCard from "../../../ui/button-card";
import Comments from "./comments";
import ReviewInput from "./review-input";


const Reviews = ({ data }: { data: Product }) => {
  const { data: comments, isPending } = useFeedback(data.code)
  console.log(comments);


  return (
    <section id="comments" className="flex flex-col items-start gap-12 bg-white w-full px-4 py-12">
      <div className="relative w-full">
        <h2 className="self-stretch  text-[#23262F] text-2xl tracking-headline-6 leading-[34px] transition-all  ">
          نظر شما
        </h2>
        <ReviewInput productCode={data.code} />
      </div>

      <div className="flex flex-col items-start gap-10 w-full">
        {!isPending ? (
          comments.feedbacks.length > 0 ?
            <>
              <div className="grid grid-cols-2 items-center gap-6 relative w-full">
                {comments.feedbacks.map((review: Review, index: number) => (
                  <Comments key={index + 1} review={review} />
                ))}
              </div>
              {comments.page > 1 ? (
                <ButtonCard
                  title="مشاهده بیشتر"
                  className="mx-auto text-neutral-07 text-base text-center leading-7 tracking-button-s whitespace-nowrap box-border inline-flex items-center justify-center gap-2 px-10 py-1.5 rounded-full border border-neutral-07 transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                />
              ) : ""}

            </> : <p className="text-2xl w-full text-center">نظری یافت نشد</p>
        ) : <LoaderCircle className="animate-spin mx-auto block" />}

      </div>
    </section>
  );
};

export default Reviews;
