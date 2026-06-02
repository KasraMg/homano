import CategoryCard from "./categories-card";

const Categories = () => (
  <section className="w-full bg-white flex flex-nowrap flex-col md:flex-row gap-6">
    <div className="md:w-1/2 md:!block hidden">
      <CategoryCard
        image="/Images/category-1.jpg"
        title="اتاق نشیمن"
        imageClass="!mix-blend-lighten"
        isTop={true}
      />
    </div>

    <div className="md:w-1/2 w-full flex flex-col gap-6">
      <div className="md:!hidden block w-full">
        <CategoryCard
          image="/Images/category-1.jpg"
          title="اتاق نشیمن"
          imageClass="!mix-blend-lighten"
          isTop={false}
        />
      </div>
      <CategoryCard
        image="/Images/category-2.png"
        title="اتاق خواب"
        isTop={false}
        hasInnerLeftBorder={true}
      />
      <CategoryCard
        image="/Images/category-3.png"
        title="آشپزخانه"
        isTop={false}
        hasInnerLeftBorder={false}
      />
    </div>
  </section>
);

export default Categories;
