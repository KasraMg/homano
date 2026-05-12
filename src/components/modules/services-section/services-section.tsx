import ServiceCard from './service-card';

export type ServicesSectionProps = {
  withBackground?: boolean;
  withPaddingBottom?: boolean;
};

const ServicesSection = ({}: ServicesSectionProps) => {
  const Cards = (
    <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-4 lg:!gap-6">
      <ServiceCard
        icon="/Images/service-1.svg"
        title="ارسال رایگان"
        description="برای سفارش‌های بالای ۲۰۰ دلار"
      />
      <ServiceCard
        icon="/Images/service-2.svg"
        title="بازگشت وجه"
        description="ضمانت بازگشت تا ۳۰ روز"
      />
      <ServiceCard
        icon="/Images/service-3.svg"
        title="پرداخت امن"
        description="پرداخت امن توسط Stripe"
      />
      <ServiceCard
        icon="/Images/service-4.svg"
        title="پشتیبانی ۲۴/۷"
        description="پشتیبانی از طریق تلفن و ایمیل"
      />
    </div>
  );

  return (
    <section className={`w-full bg-white transition-all`}>
      <h2 className=" sm:text-4.5xl tracking-headline-7 hover:drop-shadow-custom pb-15 text-xl leading-none text-black transition-all">
        {' '}
        چرا ۳اِلِگِنت رو انتخاب کنیم؟
      </h2>
      {Cards}
    </section>
  );
};

export default ServicesSection;
