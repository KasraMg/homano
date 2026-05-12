import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import type {
  EmblaCarouselType,
  EmblaOptionsType,
  EmblaPluginType,
} from "embla-carousel";
export type CarouselApi = EmblaCarouselType;
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "../../lib/utils";
import { Button } from "./button";

// Context Types
interface CarouselContextType {
  carouselRef: (node: HTMLDivElement | null) => void;
  api: EmblaCarouselType | undefined;
  opts: EmblaOptionsType | undefined;
  orientation: "horizontal" | "vertical";
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
}

const CarouselContext = React.createContext<CarouselContextType | null>(null);

// Hook
export function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

// Carousel Root
interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  opts?: EmblaOptionsType;
  plugins?: EmblaPluginType[];
  setApi?: (api: EmblaCarouselType) => void;
}

export function Carousel({
  orientation = "horizontal",
  opts,
  plugins = [],
  setApi,
  className,
  children,
  ...props
}: CarouselProps) {
  const axis = orientation === "horizontal" ? "x" : "y";

  const [carouselRef, api] = useEmblaCarousel({ ...opts, axis }, plugins);

  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((embla: EmblaCarouselType | undefined) => {
    if (!embla) return;
    setCanScrollPrev(embla.canScrollPrev());
    setCanScrollNext(embla.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        opts,
        orientation,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

// Carousel Content
interface CarouselContentProps extends React.HTMLAttributes<HTMLDivElement> {
  parentContentCls?: string;
}

export function CarouselContent({
  className,
  parentContentCls,
  ...props
}: CarouselContentProps) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div
      ref={carouselRef}
      className={`overflow-hidden ${parentContentCls ? parentContentCls : ""}`}
      data-slot="carousel-content"
    >
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className,
        )}
        {...props}
      />
    </div>
  );
}

// Carousel Item
interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CarouselItem({ className, ...props }: CarouselItemProps) {
  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className,
      )}
      {...props}
    />
  );
}

// Previous Button
interface CarouselPreviousProps extends React.ComponentProps<typeof Button> {
  direction?: String;
}

export function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon",
  direction,
  ...props
}: CarouselPreviousProps) {
  const { orientation, scrollPrev, scrollNext, canScrollPrev } = useCarousel();
  const isRTL = direction === "rtl";

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -left-12 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollPrev}
      onClick={isRTL ? scrollNext : scrollPrev}
      {...props}
    >
      <ChevronLeft />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
}

// Next Button
interface CarouselNextProps extends React.ComponentProps<typeof Button> {
  direction?: String;
}

export function CarouselNext({
  className,
  variant = "outline",
  size = "icon",
  direction,
  ...props
}: CarouselNextProps) {
  const { orientation, scrollNext, scrollPrev, canScrollNext } = useCarousel();
  const isRTL = direction === "rtl";

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -right-12 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollNext}
      onClick={isRTL ? scrollPrev : scrollNext}
      {...props}
    >
      <ChevronRight />
      <span className="sr-only">Next slide</span>
    </Button>
  );
}
