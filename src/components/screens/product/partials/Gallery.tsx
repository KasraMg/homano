import React, { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "../../../ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";



const Gallery = ({
  images = [
    "/Images/product-5.png",
    "/Images/slider-area-1.svg",
    "/Images/slider-area-2.svg",
    "/Images/slider-area-3.svg",
  ],
}: {
  images?: string[];
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  const thumbnails = images.slice(1);

  useEffect(() => {
    if (!api) return;
    setActiveIndex(api.selectedScrollSnap());
    api.on("select", () => setActiveIndex(api.selectedScrollSnap()));
  }, [api]);

  return (
    <div className="flex flex-col gap-6 w-full relative">
      <Carousel
        className="w-[350px]"
        setApi={setApi}
        opts={{
          direction: "rtl",
          align: "start",
          containScroll: "trimSnaps",
          dragFree: false,
          loop: true
        }}
      >
        <CarouselContent>
          {images.map((src, i) => (
            <CarouselItem key={i}>
              <div className="relative w-full overflow-hidden rounded-lg transition-all">
                <div className="w-full h-full">
                  <img
                    src={src}
                    alt={`product-${i}`}
                    className="rounded-md h-[300px] object-contain mx-auto"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* arrows moved OUTSIDE map */}
      <div className="absolute inset-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
        <button
          onClick={() => api?.scrollPrev()}
          disabled={activeIndex === 0}
          className={`size-10 rounded-full flex items-center justify-center transition-all pointer-events-auto
                        ${activeIndex === 0 ? "bg-white text-neutral-400" : "bg-white text-neutral-07"}
                    `}
        >
          <ChevronRight className="size-6" />
        </button>

        <button
          onClick={() => api?.scrollNext()}
          disabled={activeIndex === images.length - 1}
          className={`size-10 rounded-full flex items-center justify-center transition-all pointer-events-auto
                        ${activeIndex === images.length - 1 ? "bg-white text-neutral-400" : "bg-white text-neutral-07"}
                    `}
        >
          <ChevronLeft className="size-6" />
        </button>
      </div>

      {/* thumbnails */}
      <div className="hidden sm:flex justify-center gap-4 w-full">
        {thumbnails.map((img, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i + 1)}
            className={`flex-1 cursor-pointer aspect-square max-w-[56px] size-[56px] bg-cover bg-center rounded-md transition-all 
                            ${activeIndex === i + 1 ? "ring-2 ring-neutral-07" : ""}
                        `}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
