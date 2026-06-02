import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";


type SectionTitleProps = {
    title: string;
    linkText: string;
    to: string;
}

const SectionTitle = ({
    title,
    linkText,
    to
}: SectionTitleProps) => {
    return (
        <div
            className={`flex justify-between items-center pb-12 flex-wrap`}
        >
            <h2 className="text-2xl sm:text-4.5xl text-black leading-none tracking-headline-7">
                {title}
            </h2>

            <Link
                to={to}
                className={`flex items-center gap-1 transition-opacity hover:opacity-75 py-1 mt-1`}
            >
                <span className="sm:!text-base text-sm text-neutral-07">
                    {linkText}
                </span>
                <ChevronLeft
                    className="size-5"
                />
            </Link>
        </div>
    );
};

export default SectionTitle;
