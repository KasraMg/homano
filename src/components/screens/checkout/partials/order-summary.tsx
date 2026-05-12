
export const OrderSummary = () => {

  return (
    <div
      className="bg-neutral-02 rounded-xl shadow-m p-6"
    >
      <div
        className="font-bold text-neutral-07 self-stretch text-xl leading-7 transition-all"
      >
        خلاصه سفارش
      </div>

      <div className="flex flex-col items-start self-stretch w-full">

        <div
          className="flex items-center justify-between px-0 py-[13px] self-stretch w-full border-b border-solid border-neutral-03"
        >
          <div
            className="font-VazirRegular text-base text-neutral-07 leading-6.5 tracking-[0] transition-all  ">
            نحوه ارسال
          </div>
          <div
            className="font-bold text-base text-neutral-07 leading-6.5 tracking-[0] transition-all  ">
            رایگان
          </div>
        </div>
        <div
          className="flex items-center justify-between px-0 py-[13px] self-stretch w-full border-b border-solid border-neutral-03"
        >
          <div
            className="font-VazirRegular text-base text-neutral-07 leading-6.5 tracking-[0] transition-all  ">
            کد تخفیف
          </div>
          <div
            className="font-bold text-base text-neutral-07 leading-6.5 tracking-[0] transition-all  ">
            asdfDD
          </div>
        </div>
        <div
          className="flex items-center justify-between px-0 py-[13px] self-stretch w-full"
        >
          <div
            className="font-semibold text-xl text-neutral-07 leading-7 tracking-[0] transition-all  ">
            صورت حساب
          </div>
          <div
            className="font-semibold text-xl text-neutral-07 leading-7 tracking-[0] transition-all  ">
            37440000 تومان
          </div>
        </div>
      </div>
    </div>

  )
}
