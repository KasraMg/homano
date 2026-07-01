import React from "react";
import { ChevronLeft } from "lucide-react";

type PageHierarchyProps = {
    items?: string[];
}

const PageHierarchy: React.FC<PageHierarchyProps> = ({ items = [] }) => {
    return (
        <div className="container">

            {/* ✅ Mobile Back Button */}
            <div className="flex items-center gap-2 my-4 md:hidden">
                <img
                    src="/Images/chevron-right.svg"
                    alt="Back"
                    className="size-3 rotate-180"
                />
                <span className="font-VazirMedium text-sm text-neutral-04">
                    بازگشت
                </span>
            </div>

            {/* ✅ Desktop Breadcrumb */}
            <nav className="hidden md:inline-flex items-start gap-4 relative my-4">
                <ul className="inline-flex items-start gap-4 *:font-VazirMedium *:text-sm *:leading-6 *:text-neutral-04">
                    {items.map((item, index) => {
                        const isLast = index === items.length - 1;

                        return (
                            <li key={index}>
                                <div
                                    className={`inline-flex items-center gap-1 transition-all hover:drop-shadow-custom ${isLast ? "text-black" : ""
                                        }`}
                                >
                                    <div className="w-fit">{item}</div>

                                    {!isLast && (
                                        <ChevronLeft
                                            className="size-3"
                                            
                                        />
                                    )}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default PageHierarchy;

