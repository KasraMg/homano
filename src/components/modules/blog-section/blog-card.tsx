import { BlogItem } from "../../../types/blog.types";
import { Link } from "react-router-dom";

const BlogCard = ({
  id,
  image,
  title,
  fullTitle,
  date,
  showFull,
}: BlogItem) => (
  <Link
    to={""}
    className="flex flex-col gap-4 bg-neutral-02 transition-colors shadow hover:bg-neutral-03 cursor-pointer rounded-xl"
  >
    <img
      className="w-full h-[200px] object-cover rounded-t-xl bg-cover bg-center"
      src={image}
      alt={title}
    />
    <div className="px-3 pb-4">
      {showFull ? (
        <>
          <h3 className=" leading-1.4 text-[#23262F] text-xl mb-4 transition-all">
            {fullTitle}
          </h3>
          <p className="font-VazirRegular text-xs text-neutral-04 leading-5 tracking-[0] transition-all">
            {date}
          </p>
        </>
      ) : (
        <>
          <h3 className=" leading-1.4 text-[#23262F] text-xl mb-2 transition-all">
            {title}
          </h3>
          <p className="text-sm text-justify">
            mquam praesentium praesentium deserunt praesentium eos nobis quae
            dicta maxime, pariatur ducimus. Eligendi esse aut omnis.
          </p>

          <p className="font-VazirRegular pt-4 text-left text-xs text-neutral-04 leading-5 tracking-[0] transition-all">
            {date}
          </p>
        </>
      )}
    </div>
  </Link>
);

export default BlogCard;
