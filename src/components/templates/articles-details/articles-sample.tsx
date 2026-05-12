import React from "react";
import BlogSection from "../../modules/blog-section/blog-section";

const ArticlesSample  = () => {
  return (
    <>
      <div className="container w-full overflow-x-hidden">
        <div className="mx-auto flex flex-col gap-14 pt-4 pb-20 bg-white px-4">
          <div className="flex flex-col w-full gap-6 mt-6">
            <span className="font-bold text-xs text-black">
              مقاله
            </span>
            <h1
              className=" w-full max-w-[834px]
            text-[28px] md:text-[36px] lg:text-[44px] xl:text-[54px]
            text-neutral-07 leading-tight xl:leading-14.5
             tracking-headline-6 xl:tracking-headline-3
              transition-all  "
            >
              چگونه یک حمام شلوغ را به مکانی برای آرامش تبدیل کنیم
            </h1>

            <div className="flex flex-wrap items-center gap-6">

              <div className="flex items-center gap-2 transition-all  ">
                <img className="size-6" src="/Images/User.svg" alt="user" />
                <span className="font-VazirRegular text-base text-neutral-04">
                  حمیدرضا بختیار
                </span>
              </div>

              <div className="flex items-center gap-2 transition-all  ">
                <img className="w-6 h-6" src="/Images/calendar.svg" alt="calendar" />
                <time className="font-VazirRegular text-base text-neutral-04">
                  ۱۶ اکتبر ۲۰۲۳
                </time>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full">

            <img
              className="w-full max-w-full h-auto object-cover transition-all  "
              src="/Images/img-placeholder-3.png"
              alt="Modern bathroom"
            />

            <div className="flex flex-col gap-3 w-full max-w-[1100px]">

              <p className="font-VazirRegular text-base leading-7 text-black transition-all  ">
                حمام شما هر روز کارهای زیادی را انجام می‌دهد. ببینید چگونه می‌توانید همه این کارها را به‌خوبی مدیریت کنید و در عین حال فضایی برای راحتی و آرامش نیز داشته باشید.
              </p>

              <h2 className=" text-[24px] md:text-[28px] transition-all  ">
                مرکز نظافت با تهویه داخلی
              </h2>

              <p className="font-VazirRegular text-base leading-7 text-black transition-all  ">
                با استفاده از یک میله و پرده دوش می‌توانید فضایی مکمل برای کمد وسایل نظافت ایجاد کنید. تجهیزات نه‌چندان زیبا از دید پنهان می‌شوند اما همچنان به راحتی در دسترس هستند و جریان هوا نیز به خشک شدن رطوبت کمک می‌کند.
              </p>
            </div>
          </div>

          {/* ================================================= */}
          {/* ========== Two Images Section (Desktop) ========== */}
          {/* ================================================= */}

          {/* ✅ Desktop Version */}
          <div className="hidden md:flex flex-col gap-10 w-full">

            {/* Images side by side */}
            <div className="flex gap-6 w-full">

              <img
                className="w-1/2 h-auto object-cover transition-all  "
                src="/Images/articles-details-1.svg"
                alt="Bathroom storage"
              />

              <img
                className="w-1/2 h-auto object-cover transition-all  "
                src="/Images/articles-details-2.svg"
                alt="Bathroom shelving"
              />
            </div>

            <div className="flex flex-col gap-4 w-full">

              <h2 className=" text-[28px] text-black transition-all  ">
                فضای ذخیره‌سازی با تأثیر آرام‌بخش
              </h2>

              <p className="font-VazirRegular text-base leading-7 text-black transition-all  ">
                داشتن وسایل زیاد به این معنی نیست که همه آن‌ها باید داخل کمد قرار بگیرند. بسیاری از وسایل حمام بهتر است در معرض دید باشند؛ هم برای دسترسی سریع‌تر و هم به خاطر ظاهر زیبایشان. اضافه کردن یک یا دو گیاه می‌تواند حال و هوایی آرام برای کل فضا ایجاد کند.
              </p>

              <h2 className=" text-[28px] text-black transition-all  ">
                مرتب‌سازی وسایل برای دسترسی آسان
              </h2>

              <p className="font-VazirRegular text-base leading-7 text-black transition-all  ">
                حتی اگر کمدی برای نگهداری همه وسایل داشته باشید، بهتر است کمی مقاومت کنید. از ظرف‌ها یا باکس‌ها برای دسته‌بندی فعالیت‌های مختلف مانند اسپا خانگی، لوازم آرایش یا بهداشت شخصی استفاده کنید تا در هر لحظه بتوانید آن‌ها را به‌راحتی بردارید یا سر جایشان بگذارید.
              </p>
            </div>
          </div>

          {/* ================================================= */}
          {/* ========== Two Images Section (Mobile) ========== */}
          {/* ================================================= */}

          {/* ✅ Mobile Version */}
          <div className="flex flex-col gap-10 md:hidden w-full">

            {/* Image 1 + Text */}
            <div className="flex flex-col gap-4">
              <img
                className="w-full h-auto object-cover"
                src="/Images/articles-details-1.svg"
                alt="Bathroom storage"
              />

              <h2 className=" text-[24px]">
                فضای ذخیره‌سازی با تأثیر آرام‌بخش
              </h2>

              <p className="font-VazirRegular text-base leading-7 text-black">
                داشتن وسایل زیاد به این معنی نیست که همه آن‌ها باید داخل کمد قرار بگیرند. بسیاری از وسایل حمام بهتر است در معرض دید باشند؛ هم برای دسترسی سریع‌تر و هم به خاطر ظاهر زیبایشان. اضافه کردن یک یا دو گیاه می‌تواند حال و هوایی آرام برای کل فضا ایجاد کند.
              </p>
            </div>

            {/* Image 2 + Text */}
            <div className="flex flex-col gap-4">
              <img
                className="w-full h-auto object-cover"
                src="/Images/articles-details-2.svg"
                alt="Bathroom shelving"
              />

              <h2 className=" text-[24px]">
                مرتب‌سازی وسایل برای دسترسی آسان
              </h2>

              <p className="font-VazirRegulartext-base leading-7 text-black">
                حتی اگر کمدی برای نگهداری همه وسایل داشته باشید، بهتر است کمی مقاومت کنید. از ظرف‌ها یا باکس‌ها برای دسته‌بندی فعالیت‌های مختلف مانند اسپا خانگی، لوازم آرایش یا بهداشت شخصی استفاده کنید تا در هر لحظه بتوانید آن‌ها را به‌راحتی بردارید یا سر جایشان بگذارید.
              </p>
            </div>
          </div>

          {/* ================================================= */}
          {/* ========== Third Image Section (Responsive) ====== */}
          {/* ================================================= */}

          <div className="flex flex-col md:flex-row gap-6 w-full">

            {/* Image always first */}
            <img
              className="w-full md:w-1/2 h-auto object-cover transition-all  "
              src="/Images/articles-details-3.svg"
              alt="Towel organization"
            />

            {/* Text always under image in mobile */}
            <div className="flex flex-col gap-3 w-full md:w-1/2">

              <h2 className=" text-[24px] md:text-[28px]">
                یک اکوسیستم از حوله‌ها
              </h2>

              <p className="font-VazirRegular text-base leading-7 text-black">
                قفسه‌ها یا قلاب‌هایی که اجازه می‌دهند هوا در اطراف هر حوله جریان داشته باشد، باعث می‌شوند حوله‌ها مدت بیشتری تازه بمانند. آن‌ها سریع‌تر خشک می‌شوند و نیاز به شستشوی مکرر کاهش می‌یابد.
              </p>

              <h2 className=" text-[24px] md:text-[28px]">
                مخفی کردن وسایل نظافت
              </h2>

              <p className="font-VazirRegular text-base leading-7 text-black">
                مرتب بودن ابزارهای نظافت باعث می‌شود هم استفاده از آن‌ها راحت‌تر باشد و هم بازگرداندنشان به جای خود. وقتی به آن‌ها نیازی ندارید، پرده را ببندید و از آرامشی که ایجاد می‌شود لذت ببرید.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BlogSection
        showHeader={true}
        headerTitle="ممکن است این مطالب را هم دوست داشته باشید"
        count={3}
        showFullCards={true}
      />
    </>
  );
}

export default ArticlesSample;
