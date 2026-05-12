import React from "react";
import BlogCard from "./blog-card";
import SectionHeader from "../../ui/section-header";
import ButtonCard from "../../ui/button-card";
import { BlogItem } from "../../../types/blog.types";

type BlogSectionProps = {
  showHeader?: boolean;
  headerTitle?: string;
  count?: number;
  showFullCards?: boolean;
};

const BlogSection = ({
  showHeader = true,
  headerTitle = "مقاله ها",
  count = 4,
  showFullCards = false,
}: BlogSectionProps) => {
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
    },
    {
      id: 9,
      image: "/Images/blog-9.png",
      title: "خانه مدرن تگزاسی",
      fullTitle: "خانه مدرن تگزاسی زیبا و کاملاً مناسب کودکان است",
      date: "۲۸ اکتبر ۲۰۲۳",
    },
  ];

  return (
    <section className="w-full bg-white">
      {showHeader && (
        <SectionHeader
          title={headerTitle}
          linkText="سایر مقاله ها"
          to="/articles"
          mbClass="mb-10"
          mobileLayout="inline"
        />
      )}

      <div className="grid grid-cols-1 sm:!grid-cols-2 md:!grid-cols-3 lg:!grid-cols-4 gap-x-[25px] gap-y-[40px]">
        {blogs.slice(0, count).map((blog) => (
          <BlogCard key={blog.id} {...blog} showFull={showFullCards} />
        ))}
      </div>
      {count === 9 && (
        <div className="w-full flex justify-center mt-20">
          <ButtonCard
            title="مشاهده بیشتر"
            onClick={() => console.log("Show more clicked")}
            className=" text-neutral-07 text-base text-center leading-7 tracking-button-s whitespace-nowrap box-border inline-flex items-center justify-center gap-2 px-10 py-1.5 rounded-full border border-neutral-07 cursor-pointer transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
          />
        </div>
      )}
    </section>
  );
};

export default BlogSection;
