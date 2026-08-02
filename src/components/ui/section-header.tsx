import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

type SectionTitleProps = {
  title: string;
  linkText: string;
  to: string;
};

const SectionTitle = ({ title, linkText, to }: SectionTitleProps) => {
  return (
    <div className={`flex flex-wrap items-center justify-between pb-4 md:!pb-12`}>
      <h2 className="md:text-4.5xl tracking-headline-7 text-2xl leading-none text-black">
        {title}
      </h2>

      <Link
        to={to}
        className={`flex items-center gap-1 py-1 transition-opacity hover:opacity-75`}
      >
        <span className="text-neutral-07 text-sm sm:!text-base">
          {linkText}
        </span>
        <ChevronLeft className="size-5" />
      </Link>
    </div>
  );
};

export default SectionTitle;
