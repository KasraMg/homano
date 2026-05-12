import React from "react";

const Newsletter = () => (
  <section className="w-full h-[360px] flex rounded-t-xl items-center justify-center bg-[#F2F4F6] lg:bg-[url(/Images/newsletter.png)] lg:bg-cover lg:bg-center">
    <div className="relative text-center w-[528px] h-full transition-all">
      <div className="mt-28 w-full h-[166px] sm:!px-0 px-4">
        <h2 className=" text-neutral-07 text-[28px] sm:text-[40px] mb-2 leading-8.5 sm:leading-11 tracking-headline-6 sm:tracking-headline-4 transition-all  ">
          به خبرنامه ما بپیوندید
        </h2>
        <p className="font-VazirRegular text-sm sm:text-lg text-neutral-07 mb-8 leading-5.5 sm:leading-7.5 tracking-[0] transition-all  ">
          برای دریافت تخفیف‌ها، محصولات جدید و پیشنهادهای ویژه ثبت‌نام کنید
        </p>

        <form className="flex flex-col items-center">
          <div className="flex items-center gap-2 border-b border-neutral-04/50 py-2 w-full h-[52px] max-w-md">
            <img
              className="size-6 mr-2 transition-all  "
              src="/Images/email.svg"
              alt="Email"
            />
            <input
              type="email"
              placeholder="آدرس ایمیل"
              className="flex-1 border-none outline-none  text-base text-neutral-04 tracking-button-s transition-all  "
              aria-label="آدرس ایمیل"
              required
            />
            <button
              type="submit"
              className=" text-base tracking-button-s text-neutral-04 cursor-pointer transition-all  "
            >
              ثبت‌نام
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default Newsletter;
