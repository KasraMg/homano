import { ServiceCardProps } from "../../../types/service.types";

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-start gap-4 relative sm:!p-5 p-3 rounded-xl shadow bg-neutral-02 h-full group transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      <div className="absolute bg-main p-3 rounded-full left-0 md:!-left-3 -top-5">
        <img
          style={{ filter: "invert(5)" }}
          className="sm:!size-7 size-5 transition-all group- "
          src={icon}
          alt={title}
        />
      </div>
      <div className="sm:!pt-0 pt-3">
        <h3 className=" text-neutral-07 sm:!text-xl mb-2 transition-all group- ">
          {title}
        </h3>
        <p className="font-VazirRegular text-sm text-neutral-04 transition-all group- ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
