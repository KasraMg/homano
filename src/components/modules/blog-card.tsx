import { Link } from "react-router-dom";
import { BlogItem } from "../../types/blog.types";
import { localAssetsUrl } from "../../constants";

const BlogCard = ({
  name,
  short_description,
  slug,
  image,
  createdAt
}: BlogItem) => (
  <Link
    to={`/blog/${slug}`}
    className="flex flex-col gap-4 bg-neutral-02 transition-colors shadow hover:bg-neutral-03 cursor-pointer rounded-xl"
  >
    <img
      className="w-full h-[200px] object-cover rounded-t-xl bg-cover bg-center"
      src={localAssetsUrl + image}
      alt={name}
    />
    <div className="px-3 pb-4">
      <h3 className="leading-1.4 text-[#23262F] text-xl mb-2 transition-all">
        {name}
      </h3>
      <p className="text-sm text-justify break-words">
        {short_description}
      </p>

      <p className="font-VazirRegular pt-4 text-left text-xs text-neutral-04 leading-5 tracking-[0] transition-all">
        {createdAt}
      </p>
    </div>
  </Link>
);

export default BlogCard;
