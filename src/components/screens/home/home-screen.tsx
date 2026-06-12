import Hero from "./partials/hero";
import Categories from "./partials/categories/categories";
import Products from "./partials/products/products";
import ServicesSection from "../../../components/modules/services-section/services-section";
import SaleBanner from "../../modules/sale-banner";
import Container from "../../modules/container";
import Blogs from "./partials/blogs/blogs";
import useLanding from "../../../hooks/useLanding";
import Banners from "./partials/banners/banners";

const HomeScreen = () => {
  const { data } = useLanding()

  return (
    <Container>
      <Banners
        data={data?.banner}
      />
      <div className="space-y-20 pb-20">
        <h2 className="w-[57.5] pt-10 text-xl md:text-3xl xl:text-4xl text-right tracking-hero transition-all">
          بهترین قیمت و تنوع لوازم خانگی در هومانو
        </h2>
        <Categories data={data?.categories} />
        <Products data={data?.products} />
        <ServicesSection />
        <SaleBanner
          showSaleText
          title={
            <>
              صدها <br /> قیمت جدید و پایین‌تر!
            </>
          }
          description="حالا بیش از هر زمان دیگری مقرون‌به‌صرفه است که به هر اتاق خانه‌تان ظاهری شیک و تازه بدهید."
        />
        <Blogs data={data?.articles} />
      </div>
    </Container>
  );
};

export default HomeScreen;
