import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

type Mode = 'shop' | 'blog';

type FilterAndSortpanelProps = {
  mode?: Mode;
  defaultActiveButton?: number;
};

const FilterAndSortpanel = ({
  mode = 'shop',
  defaultActiveButton = 2,
}: FilterAndSortpanelProps) => {
  const [activeButton, setActiveButton] = useState<number>(defaultActiveButton);

  // --- CATEGORIES ---
  const [isCatOpen, setIsCatOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] =
    useState<string>('اتاق نشیمن');
  const catDropdownRef = useRef<HTMLDivElement | null>(null);

  // --- PRICE ---
  const [isPriceOpen, setIsPriceOpen] = useState<boolean>(false);
  const [selectedPrice, setSelectedPrice] = useState<string>('همه قیمت ها');
  const priceDropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const handleMobileActive = () => {
      if (mediaQuery.matches && activeButton < 3) {
        setActiveButton(3);
      }
    };

    handleMobileActive();
    mediaQuery.addEventListener('change', handleMobileActive);

    return () => {
      mediaQuery.removeEventListener('change', handleMobileActive);
    };
  }, [activeButton]);

                             

  const categories = [
    'همه اتاق‌ها',
    'اتاق نشیمن',
    'اتاق خواب',
    'حمام',
    'آشپزخانه',
    'ناهارخوری',
    'فضای بیرونی',
  ];

  const prices = [
    'همه قیمت‌ها',
    '۰ تا ۵۰ دلار',
    '۵۰ تا ۱۰۰ دلار',
    '۱۰۰ تا ۲۰۰ دلار',
    '۲۰۰ تا ۵۰۰ دلار',
    'بیش از ۵۰۰ دلار',
  ];
 
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        catDropdownRef.current &&
        !catDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCatOpen(false);
      }
      if (
        priceDropdownRef.current &&
        !priceDropdownRef.current.contains(event.target as Node)
      ) {
        setIsPriceOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div>
      <div className="flex w-full flex-col gap-6 md:flex-row md:flex-wrap md:items-end md:justify-between">
        {mode === 'shop' && (
          <div className="flex w-full flex-col gap-2 md:w-auto md:flex-row md:justify-center xl:w-auto xl:justify-center">
            <div
              className="relative flex w-full flex-col items-start gap-2 md:w-[220px]"
              ref={catDropdownRef}
            >
              <label className="font-bold text-neutral-04 hover:drop-shadow-custom text-base leading-[26px] whitespace-nowrap transition-all">
                دسته بندی ها
              </label>
              <button
                onClick={() => setIsCatOpen(!isCatOpen)}
                className="border-neutral-03 font-bold text-neutral-07 flex h-10 w-full cursor-pointer items-center justify-between rounded-lg border-2 border-solid bg-transparent py-2 pr-2 pl-4 text-sm transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
              >
                {selectedCategory}
                <img
                  className={`transition-transform duration-300 ${isCatOpen ? 'rotate-180' : 'rotate-0'}`}
                  alt="Dropdown arrow"
                  src="/Images/arrow-down.svg"
                />
              </button>

              <nav
                className={`shadow-depth-4 relative z-50 mt-2 flex w-full flex-col gap-2.5 overflow-hidden rounded-xl border-[1.5px] border-[#f3f5f6] bg-white p-2 transition-all duration-300 ease-out ${
                  isCatOpen
                    ? 'max-h-96 translate-y-0 opacity-100'
                    : 'pointer-events-none max-h-0 -translate-y-2 opacity-0'
                } md:absolute md:bottom-[110%] md:left-0 md:w-full`}
                role="navigation"
                aria-label="Category selection menu"
              >
                <ul className="w-full" role="list">
                  {categories.map((cat) => (
                    <li key={cat} className="w-full">
                      <button
                        onClick={() => {
                          setSelectedCategory(cat);
                          setIsCatOpen(false);
                        }}
                        className={`flex w-full items-center gap-2 rounded-lg p-2 transition-all ${
                          selectedCategory === cat
                            ? 'bg-neutral-02 text-neutral-07 font-VazirBold'
                            : 'text-neutral-04 hover:bg-neutral-02'
                        }`}
                      >
                        <span className="whitespace-nowrap">{cat}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* ---------- PRICE ---------- */}
            <div
              className="relative flex w-full flex-col items-start gap-2 md:w-[220px]"
              ref={priceDropdownRef}
            >
              <label className="font-bold text-neutral-04 hover:drop-shadow-custom text-base leading-[26px] whitespace-nowrap transition-all">
                قیمت
              </label>
              <button
                onClick={() => setIsPriceOpen(!isPriceOpen)}
                className="border-neutral-03 font-bold text-neutral-07 flex h-10 w-full cursor-pointer items-center justify-between rounded-lg border-2 border-solid bg-transparent py-2 pr-2 pl-4 text-sm transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
              >
                {selectedPrice}
                <img
                  className={`transition-transform duration-300 ${isPriceOpen ? 'rotate-180' : 'rotate-0'}`}
                  alt="Dropdown arrow"
                  src="/Images/arrow-down.svg"
                />
              </button>

              <nav
                className={`shadow-depth-4 relative z-50 mt-2 flex w-full flex-col gap-2.5 overflow-hidden rounded-xl border-[1.5px] border-[#f3f5f6] bg-white p-2 transition-all duration-300 ease-out ${
                  isPriceOpen
                    ? 'max-h-96 translate-y-0 opacity-100'
                    : 'pointer-events-none max-h-0 -translate-y-2 opacity-0'
                } md:absolute md:bottom-[110%] md:left-0 md:w-full`}
                role="navigation"
                aria-label="Price selection menu"
              >
                <ul className="w-full" role="list">
                  {prices.map((price) => (
                    <li key={price} className="w-full">
                      <button
                        onClick={() => {
                          setSelectedPrice(price);
                          setIsPriceOpen(false);
                        }}
                        className={`flex w-full items-center gap-2 rounded-lg p-2 transition-all ${
                          selectedPrice === price
                            ? 'bg-neutral-02 text-neutral-07 font-VazirBold'
                            : 'text-neutral-04 hover:bg-neutral-02'
                        }`}
                      >
                        <span className="whitespace-nowrap">{price}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        )}

        {/* ----------- MODE: BLOG (All Blog + Featured) ---------- */}
        {mode === 'blog' && (
          <nav className="inline-flex items-center gap-10">
            <Link
              to="#"
              className="hover:drop-shadow-custom inline-flex items-center gap-1 border-b border-solid border-[#111111] transition-all"
              aria-current="page"
            >
              <span className="font-InterSemiBold text-black-900 w-fit text-sm leading-5.5 tracking-[0] whitespace-nowrap">
                All Blog
              </span>
            </Link>
            <Link
              to="#"
              className="hover:drop-shadow-custom inline-flex items-center gap-1 transition-all"
            >
              <span className="font-InterSemiBold w-fit text-sm leading-5.5 tracking-[0] whitespace-nowrap text-[#807E7E]">
                Featured
              </span>
            </Link>
          </nav>
        )}
      </div>
    </div>
  );
};

export default FilterAndSortpanel;
