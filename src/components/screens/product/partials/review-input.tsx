import React from 'react'
import StarRating from './star-rating';

const ReviewInput: React.FC = () => (
    <div className="flex flex-col w-full items-end justify-center gap-10 pt-4">
        <form className="flex w-full items-center justify-between pl-6 pr-4 py-4 relative bg-white rounded-2xl border-2 border-neutral-03">
            <textarea
                placeholder="نظر خود را بنویسید"
                className="relative w-fit ml-6 text-neutral-05 text-base tracking-normal leading-relaxed bg-transparent border-0 outline-0 flex-1 transition-all  "
                aria-label="نوشتن نظر"
            />
            <StarRating />
            <div className="inline-flex items-center justify-center gap-4">
                <button type="button" className="relative w-6 h-6" aria-label="Add emoji">
                    <img
                        className="absolute top-0.5 left-0.5 w-5 h-5 text-blue-500"
                        src="/Images/Emoji.svg"
                        alt="Emoji"
                    />
                </button>
                <button
                    type="submit"
                    className="box-border inline-flex items-center justify-center gap-2 max-sm:px-0 px-10 max-sm:h-10 h-10 max-sm:w-10 w-44 bg-neutral-07 rounded-full"
                >
                    <div className="max-sm:hidden text-white  text-base text-center tracking-button-s leading-7 whitespace-nowrap transition-all  ">
                        ثبت نظر
                    </div>
                    <img
                        src="/Images/arrow-right-2.svg"
                        alt="ارسال"
                        className="hidden max-sm:block"
                    />
                </button>
            </div>
        </form>
    </div>
);

export default ReviewInput;
