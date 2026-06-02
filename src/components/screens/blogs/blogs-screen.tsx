import Container from '../../modules/container'
import Breadcrumb from '../../modules/breadcrumb'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select'
import { BlogItem } from '../../../types/blog.types'
import BlogCard from '../../modules/blog-card'

const BlogsScreen = () => {
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
            <div className='pt-5'>
                <Breadcrumb title='مقالات' />
                <div className='w-max mx-auto text-center sm:!px-0 px-3 pb-12 pt-10'>
                    <p className='text-2xl pb-5'>دنبال چه مقاله ای هستی؟</p>
                    <input placeholder='بهترین برند...' className='shadow-m w-[290px] sm:!w-[400px] py-2 px-4 h-13 rounded-xl border border-gray-300' />
                </div>
                <Select
                // onValueChange={(value) => {
                //     field.onChange(value)
                //     setValue("city", "")
                // }}
                // value={field.value}
                >
                    <SelectTrigger
                        className={"sm:!w-[300px] w-full sm:!mx-0 mx-auto mb-5 !h-11"}
                    >
                        <SelectValue placeholder="دسته بندی ها" />
                    </SelectTrigger>
                    <SelectContent dir='rtl'>
                        <SelectItem
                            value={'مبلمان'}
                        >
                            {'مبلمان'}
                        </SelectItem>
                    </SelectContent>
                </Select>

                <div className="grid grid-cols-1 sm:!grid-cols-2 md:!grid-cols-3 lg:!grid-cols-4 gap-x-[25px] gap-y-[40px] pb-20">
                    {blogs.map((blog) => (
                        <BlogCard key={blog.id} {...blog} />
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default BlogsScreen