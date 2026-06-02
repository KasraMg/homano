 import { BlogItem } from '../../../../types/blog.types'; 
import BlogCard from '../../../modules/blog-card';
import SectionTitle from '../../../ui/section-header';

const Blogs = () => {
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
        <div>
            <SectionTitle
                title="مقالات جدید"
                linkText="سایر مقالات"
                to="/blogs" 
            />
            <div className="grid grid-cols-1 sm:!grid-cols-2 md:!grid-cols-3 lg:!grid-cols-4 gap-x-[25px] gap-y-[40px]">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} {...blog} />
                ))}
            </div>
        </div>
    )
}

export default Blogs