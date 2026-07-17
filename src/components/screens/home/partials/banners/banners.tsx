import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '../../../../ui/carousel';
import { localAssetsUrl } from '../../../../../utils/constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BannersSkeleton from './banners-skeleton';
import { useNavigate } from 'react-router-dom';

const Banners = ({ data }: { data: { url: string; image: string }[] }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!api) return;

    setActiveIndex(api.selectedScrollSnap());
    api.on('select', () => setActiveIndex(api.selectedScrollSnap()));
  }, [api]);

  return data ? (
    <Carousel
      setApi={setApi}
      className="relative w-full"
      opts={{
        direction: 'rtl',
        align: 'start',
        containScroll: 'trimSnaps',
        dragFree: false,
      }}
    >
      <CarouselContent>
        {data.map((s, i) => (
          <CarouselItem key={i} className="basis-full">
            <img
              onClick={() => navigate(s.url)}
              src={localAssetsUrl + s.image}
              className="h-[200px] w-full cursor-pointer rounded-md object-cover md:!h-[280px] lg:!h-[380px]"
              alt="بنر"
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="absolute top-1/2 right-0 left-0 flex -translate-y-1/2 justify-between px-8">
        <button
          onClick={() => api?.scrollPrev()}
          disabled={activeIndex === 0}
          className={`hidden h-[52px] w-[52px] items-center justify-center rounded-full transition-all sm:flex ${
            activeIndex === 0
              ? 'bg-white text-neutral-400'
              : 'text-neutral-07 bg-white'
          }`}
        >
          <ChevronRight className="size-8" />
        </button>

        <button
          onClick={() => api?.scrollNext()}
          disabled={activeIndex === data.length - 1}
          className={`hidden h-[52px] w-[52px] items-center justify-center rounded-full transition-all sm:flex ${
            activeIndex === data.length - 1
              ? 'bg-white text-neutral-400'
              : 'text-neutral-07 bg-white'
          }`}
        >
          <ChevronLeft className="size-8" />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {data.map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={`drop-shadow-custom transition-all ${
              i === activeIndex
                ? 'bg-neutral-01 border-neutral-07 h-2 w-[30px] rounded-full border border-solid'
                : 'bg-neutral-01 size-2 rounded-full'
            }`}
          />
        ))}
      </div>
    </Carousel>
  ) : (
    <BannersSkeleton />
  );
};

export default Banners;
