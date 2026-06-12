import { BlogItem } from '../../../../types/blog.types';
import BlogCard from '../../../modules/blog-card';
import SectionTitle from '../../../ui/section-header';

const Blogs = ({ data }: { data: BlogItem[] }) => {
    return (
        data ?
            <div>
                <SectionTitle
                    title="مقالات جدید"
                    linkText="سایر مقالات"
                    to="/blogs"
                />
                <div className="grid grid-cols-1 sm:!grid-cols-2 md:!grid-cols-3 lg:!grid-cols-4 gap-x-[25px] gap-y-[40px]">
                    {data.map((blog) => (
                        <BlogCard key={blog.slug} {...blog} />
                    ))}
                </div>
            </div>
            : ''
    )
}

export default Blogs