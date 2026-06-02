import { Calendar, User, UserCircle } from 'lucide-react'
import Container from '../../modules/container'
import { BlogItem } from '../../../types/blog.types';
import BlogCard from '../../modules/blog-card';
import Autoplay from 'embla-carousel-autoplay';
import product from '../../../pages/product/product';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../../ui/carousel';

const BlogScreen = () => {

    const blogs: BlogItem[] = [
        {
            id: 1,
            image: "/Images/blog-1.png",
            title: "۷ روش برای دکور خانه",
            fullTitle: "۷ روش برای دکوراسیون خانه مانند یک حرفه‌ای",
            date: "۱۲ اکتبر ۲۰۲۳",
        },
        {
            id: 2,
            image: "/Images/blog-2.png",
            title: "سازماندهی آشپزخانه",
            fullTitle: "نگاهی به یک آشپزخانه زیبا و منظم",
            date: "۱۴ اکتبر ۲۰۲۳",
        },
        {
            id: 3,
            image: "/Images/blog-3.png",
            title: "دکور اتاق‌خواب",
            fullTitle: "دکوراسیون اتاق‌خواب برای کودکان",
            date: "۱۶ اکتبر ۲۰۲۳",
        },
        {
            id: 4,
            image: "/Images/blog-4.png",
            title: "خانه مدرن تگزاسی",
            fullTitle: "خانه مدرن تگزاسی زیبا و کاملاً مناسب کودکان است",
            date: "۱۸ اکتبر ۲۰۲۳",
        },
        {
            id: 5,
            image: "/Images/blog-5.png",
            title: "خانه مدرن تگزاسی",
            fullTitle: "خانه مدرن تگزاسی زیبا و کاملاً مناسب کودکان است",
            date: "۲۰ اکتبر ۲۰۲۳",
        },
        {
            id: 6,
            image: "/Images/blog-6.png",
            title: "خانه مدرن تگزاسی",
            fullTitle: "خانه مدرن تگزاسی زیبا و کاملاً مناسب کودکان است",
            date: "۲۱ اکتبر ۲۰۲۳",
        },
        {
            id: 7,
            image: "/Images/blog-7.png",
            title: "خانه مدرن تگزاسی",
            fullTitle: "خانه مدرن تگزاسی زیبا و کاملاً مناسب کودکان است",
            date: "۲۲ اکتبر ۲۰۲۳",
        },
        {
            id: 8,
            image: "/Images/blog-8.png",
            title: "خانه مدرن تگزاسی",
            fullTitle: "خانه مدرن تگزاسی زیبا و کاملاً مناسب کودکان است",
            date: "۲۵ اکتبر ۲۰۲۳",
        }
    ];
    return (
        <Container>
            <div className="mx-auto flex flex-col gap-y-8 pt-4 pb-20 bg-white px-4">
                <div className="flex flex-col w-full gap-6 pt-6">
                    <h1
                        className="md:!text-4xl sm:!text-3xl text-xl"
                    >
                        چگونه یک حمام شلوغ را به مکانی برای آرامش تبدیل کنیم
                    </h1>

                    <div className="flex flex-wrap items-center gap-6">
                        <div className="flex items-center gap-2">
                            <UserCircle className='stroke-neutral-04' />
                            <span className="font-VazirRegular text-base text-neutral-04">
                                حمیدرضا بختیار
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Calendar className='stroke-neutral-04' />
                            <time className="font-VazirRegular text-base text-neutral-04">
                                ۱۶ اکتبر ۲۰۲۳
                            </time>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6 w-full">
                    <img
                        className="w-full max-w-full rounded-xl h-[400px] object-cover"
                        src="/Images/img-placeholder-3.png"
                        alt="Modern bathroom"
                    />

                    <div className="flex flex-col gap-3 w-full max-w-[1100px]">

                        <p className="font-VazirRegular text-base leading-7 text-black">
                            حمام شما هر روز کارهای زیادی را انجام می‌دهد. ببینید چگونه می‌توانید همه این کارها را به‌خوبی مدیریت کنید و در عین حال فضایی برای راحتی و آرامش نیز داشته باشید.
                        </p>

                        <h2 className=" text-[24px] md:text-[28px]">
                            مرکز نظافت با تهویه داخلی
                        </h2>

                        <p className="font-VazirRegular text-base leading-7 text-black">
                            با استفاده از یک میله و پرده دوش می‌توانید فضایی مکمل برای کمد وسایل نظافت ایجاد کنید. تجهیزات نه‌چندان زیبا از دید پنهان می‌شوند اما همچنان به راحتی در دسترس هستند و جریان هوا نیز به خشک شدن رطوبت کمک می‌کند.
                        </p>
                    </div>
                </div>



                <div className="hidden md:flex flex-col gap-10 w-full">

                    {/* Images side by side */}
                    <div className="flex gap-6 w-full">

                        <img
                            className="w-1/2 h-auto object-cover"
                            src="/Images/articles-details-1.svg"
                            alt="Bathroom storage"
                        />

                        <img
                            className="w-1/2 h-auto object-cover"
                            src="/Images/articles-details-2.svg"
                            alt="Bathroom shelving"
                        />
                    </div>

                    <div className="flex flex-col gap-4 w-full">

                        <h2 className=" text-[28px] text-black">
                            فضای ذخیره‌سازی با تأثیر آرام‌بخش
                        </h2>

                        <p className="font-VazirRegular text-base leading-7 text-black">
                            داشتن وسایل زیاد به این معنی نیست که همه آن‌ها باید داخل کمد قرار بگیرند. بسیاری از وسایل حمام بهتر است در معرض دید باشند؛ هم برای دسترسی سریع‌تر و هم به خاطر ظاهر زیبایشان. اضافه کردن یک یا دو گیاه می‌تواند حال و هوایی آرام برای کل فضا ایجاد کند.
                        </p>

                        <h2 className=" text-[28px] text-black">
                            مرتب‌سازی وسایل برای دسترسی آسان
                        </h2>

                        <p className="font-VazirRegular text-base leading-7 text-black">
                            حتی اگر کمدی برای نگهداری همه وسایل داشته باشید، بهتر است کمی مقاومت کنید. از ظرف‌ها یا باکس‌ها برای دسته‌بندی فعالیت‌های مختلف مانند اسپا خانگی، لوازم آرایش یا بهداشت شخصی استفاده کنید تا در هر لحظه بتوانید آن‌ها را به‌راحتی بردارید یا سر جایشان بگذارید.
                        </p>
                    </div>
                </div>


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

                <div className="flex flex-col md:flex-row gap-6 w-full">

                    {/* Image always first */}
                    <img
                        className="w-full md:w-1/2 h-auto object-cover"
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


            <Carousel
                plugins={[
                    Autoplay({
                        delay: 3000,
                        stopOnFocusIn: false,
                        stopOnMouseEnter: false,
                        stopOnInteraction: false,
                        stopOnLastSnap: false,
                    }),
                ]}
                opts={{
                    direction: "rtl",
                    loop: true,
                    align: "start",
                    containScroll: "trimSnaps",
                }}
                className="w-full mb-12"
            >
                <CarouselContent parentContentCls="py-5 px-2" className="px-4">
                    {blogs.map((blog) => (
                        <CarouselItem
                            key={blog.id}
                            className="min-w-full min-x-full xl:!min-w-[25%] xl:!max-w-[25%] lg:!min-w-[30%] lg:!max-w-[30%] md:!min-w-[45%] md:!max-w-[45%] sm:!pl-4"
                        >
                            <BlogCard key={blog.id} {...blog} />
                        </CarouselItem>

                    ))}


                </CarouselContent>
                <CarouselPrevious
                    direction="rtl"
                    className="hidden sm:flex absolute bg-main text-white left-2 top-1/2 -translate-y-1/2 z-10"
                />

                <CarouselNext
                    direction="rtl"
                    className="hidden sm:flex absolute bg-main text-white right-2 top-1/2 -translate-y-1/2 z-10"
                />
            </Carousel>


        </Container>
    )
}

export default BlogScreen