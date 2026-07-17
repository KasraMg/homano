import { BlogItem } from '../../../../../types/blog.types';
import BlogCard from '../../../../modules/blog-card';
import SectionTitle from '../../../../ui/section-header';
import BlogsSkeleton from './blogs-skeleton';

const Blogs = ({ data }: { data: BlogItem[] }) => {
  return (
    <div>
      <SectionTitle title="مقالات جدید" linkText="سایر مقالات" to="/blogs" />
      {data ? (
        <div className="grid grid-cols-1 gap-x-[25px] gap-y-[40px] pt-4 sm:!pt-0 md:!grid-cols-2 lg:!grid-cols-3 xl:!grid-cols-4">
          {data.map((blog) => (
            <BlogCard key={blog.slug} {...blog} />
          ))}
        </div>
      ) : (
        <BlogsSkeleton />
      )}
    </div>
  );
};

export default Blogs;
