import Header from "../../modules/header";
import Hero from "./partials/hero";
import Categories from "./partials/categories/categories";
import Products from "./partials/products/products";
import ServicesSection from "../../../components/modules/services-section/services-section";
import SaleBanner from "../../modules/sale-banner"; 
import Container from "../../modules/container";
import Blogs from "./partials/blogs";

const HomeScreen = () => {
  return (
    <Container>
      <Header
        images={[
          "/Images/img-placeholder-1.png",
          "/Images/img-placeholder-2.png",
          "/Images/img-placeholder-3.png",
        ]}
        isSlidable={true}
        withGradient={true}
      />
      <div className="space-y-20 pb-20">
        <Hero />
        <Categories />
        <Products />
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
        <Blogs />
      </div>
    </Container>
  );
};

export default HomeScreen;
