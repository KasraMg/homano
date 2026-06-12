import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../../../../ui/carousel";
import { localAssetsUrl } from "../../../../../constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BannersSkeleton from "./banners-skeleton";

const Banners = ({ data, }: { data: { image: string }[] }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    setActiveIndex(api.selectedScrollSnap());
    api.on("select", () => setActiveIndex(api.selectedScrollSnap()));
  }, [api]);

  return (
    data ? (
      <Carousel
        setApi={setApi}
        className="relative w-full"
        opts={{
          direction: "rtl",
          align: "start",
          containScroll: "trimSnaps",
          dragFree: false,
        }}
      >
        <CarouselContent>
          {data.map(
            (s, i) => (
              <CarouselItem key={i} className="basis-full">
                <img src={localAssetsUrl + s.image} className="md:!h-[280px] lg:!h-[380px] h-[200px] object-cover rounded-md w-full" alt="بنر" />
              </CarouselItem>
            ),
          )}
        </CarouselContent>

        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-8 -translate-y-1/2">
          <button
            onClick={() => api?.scrollPrev()}
            disabled={activeIndex === 0}
            className={`rounded-full w-[52px] h-[52px] hidden sm:flex items-center justify-center transition-all
                  ${activeIndex === 0
                ? "bg-white text-neutral-400"
                : "bg-white text-neutral-07  "
              }`}
          >
            <ChevronRight className="size-8" />
          </button>

          <button
            onClick={() => api?.scrollNext()}
            disabled={activeIndex === data.length - 1}
            className={`rounded-full w-[52px] h-[52px] hidden sm:flex items-center justify-center transition-all
                  ${activeIndex === data.length - 1
                ? "bg-white text-neutral-400"
                : "bg-white text-neutral-07  "
              }`}
          >
            <ChevronLeft className="size-8" />
          </button>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`transition-all drop-shadow-custom ${i === activeIndex
                ? "w-[30px] h-2 rounded-full bg-neutral-01 border border-solid border-neutral-07"
                : "size-2 rounded-full bg-neutral-01"
                }`}
            />
          ))}
        </div>
      </Carousel>
    ) : <BannersSkeleton />


  );
};

export default Banners;
