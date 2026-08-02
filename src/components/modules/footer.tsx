import { Link } from 'react-router-dom';
import Newsletter from './news-letter';

const Footer = () => (
  <footer>
    <Newsletter />
    <div className="bg-neutral-07 w-full px-8 pt-12 pb-7 md:px-40 lg:px-40">
      <div className="mb-16 flex flex-col items-center justify-between gap-6 md:!gap-10">
        <div className="mb-6 flex flex-col items-center gap-4 text-center md:mb-0 md:flex-row md:gap-8 md:text-left lg:flex-row lg:gap-12">
          <Link to={'/'}>
            <img
              className="h-24 mix-blend-exclusion grayscale-100"
              src="/Images/logo-black.jpg"
              alt=""
            />
          </Link>
          <div className="bg-neutral-04 my-2 h-px w-6 md:my-0 md:h-6 md:w-px"></div>
          <p className="text-neutral-03 text-right text-base">
            فروشگاه هدیه و دکوراسیون
          </p>
        </div>

        <nav className="flex flex-col items-center gap-4 md:flex-row md:gap-10 lg:flex-row lg:gap-12">
          <Link to="/" className="text-neutral-01 text-base">
            خانه
          </Link>
          <Link to="/shop" className="text-neutral-01 text-base">
            فروشگاه
          </Link>
          <Link to="/blogs" className="text-neutral-01 text-base">
            مقالات
          </Link>
          <Link to="/rules" className="text-neutral-01 text-base">
            قوانین
          </Link>
          <Link to="/contact-us" className="text-neutral-01 text-base">
            تماس با ما
          </Link>
        </nav>
      </div>

      <div className="border-neutral-04 flex flex-col items-center justify-between gap-6 border-t pt-4 pb-5 md:flex-row lg:flex-row lg:pt-6 lg:pb-6">
        <div className="order-1 flex gap-6 md:order-2">
          <Link to="/" aria-label="Instagram">
            <img
              className="size-6 lg:size-7"
              src="/Images/instagram.svg"
              alt="Instagram"
            />
          </Link>
          <Link to="/" aria-label="Facebook">
            <img
              className="size-6 lg:size-7"
              src="/Images/facebook.svg"
              alt="Facebook"
            />
          </Link>
          <Link to="/" aria-label="YouTube">
            <img
              className="size-6 lg:size-7"
              src="/Images/youtube.svg"
              alt="YouTube"
            />
          </Link>
        </div>

        <div className="order-2 flex flex-col items-center gap-3 text-center md:order-1 md:flex-row md:gap-7 md:text-left lg:flex-row lg:gap-10">
          <p className="text-neutral-03 order-2 text-xs md:order-1 lg:text-sm">
            © 2026 هومانو. تمامی حقوق محفوظ است
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
