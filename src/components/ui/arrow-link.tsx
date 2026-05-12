import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

type ArrowLinkProps = {
  title: string;
  textColor?: string;
  borderColor?: string;
  to: string;
  mobileSmall?: boolean;
};

const ArrowLink = ({
  title,
  textColor,
  borderColor,
  to,
  mobileSmall = false,
}: ArrowLinkProps) => {
  return (
    <button
      className={`inline-flex items-center gap-0.5 hover:drop-shadow-custom transition-all border-b sm:!pb-1 ${borderColor}`}
      aria-label="Shop now for 30% off"
    >
      <div className={`inline-flex items-center ${textColor} gap-1`}>
        <Link
          to={to}
          className={`
                        font-VazirMedium
                        ${mobileSmall ? "text-sm sm:text-base" : "text-base"}
                    `}
        >
          {title}
        </Link>
        <ChevronLeft
          className={`
                        relative cursor-pointer
                        ${mobileSmall ? "size-4 sm:size-4.5" : "size-4.5"}
                    `}
        />
      </div>
    </button>
  );
};

export default ArrowLink;
