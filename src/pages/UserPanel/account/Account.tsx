import React from 'react'
import ButtonCard from '../../../components/ui/button-card';

function Account() {
    return (
        <>
            <div className="inline-flex flex-col items-start gap-10 px-[72px] py-0">
                <form className="inline-flex flex-col items-start gap-6">
                    <h2
                        className="w-fit font-bold text-black text-xl tracking-[0] leading-8 whitespace-nowrap transition-all  "
                    >
                        جزئیات حساب
                    </h2>
                    <div className="flex flex-col w-[707px] items-start gap-3">
                        <label
                            className="font-bold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all  "
                            htmlFor="first-name"
                        >
                           * نام 
                        </label>
                        <div
                            className="flex items-center gap-2 h-10 bg-white px-4 py-0 self-stretch w-full rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all  "
                        >
                            <input
                                className="flex-1 grow outline-none font-VazirRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 transition-all  "
                                placeholder="نام"
                                type="text"
                                id="last-name"
                                name="last-name"
                                required
                                aria-required="true"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-[707px] items-start gap-3">
                        <label
                            className="font-bold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all  "
                            htmlFor="first-name"
                        >
                           * نام خانوادگی 
                        </label>
                        <div
                            className="flex items-center gap-2 h-10 bg-white px-4 py-0 self-stretch w-full rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all  "
                        >
                            <input
                                className="flex-1 grow outline-none font-VazirRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 transition-all  "
                                placeholder="نام خانوادگی"
                                type="text"
                                id="last-name"
                                name="last-name"
                                required
                                aria-required="true"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-[707px] items-start gap-3">
                        <label
                            className="font-bold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all  "
                            htmlFor="first-name"
                        >
                           * نام نمایشی 
                        </label>
                        <div
                            className="flex items-center gap-2 h-10 bg-white px-4 py-0 self-stretch w-full rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all  "
                        >
                            <input
                                className="flex-1 grow outline-none font-VazirRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 transition-all  "
                                placeholder="نام نمایشی"
                                type="text"
                                id="last-name"
                                name="last-name"
                                required
                                aria-required="true"
                            />
                        </div>
                        <p
                            id="display-name-help"
                            className="font-VazirRegular text-neutral-04 text-xs tracking-[0] leading-5 whitespace-nowrap transition-all  "
                        >
                            این نام در بخش حساب کاربری و همچنین در دیدگاه‌ها نمایش داده خواهد شد
                        </p>
                    </div>
                    <div className="flex flex-col w-[707px] items-start gap-3">
                        <label
                            className="font-bold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all  "
                            htmlFor="first-name"
                        >
                           * ایمیل 
                        </label>
                        <div
                            className="flex items-center gap-2 h-10 bg-white px-4 py-0 self-stretch w-full rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all  "
                        >
                            <input
                                className="flex-1 grow outline-none font-VazirRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 transition-all  "
                                placeholder="ایمیل"
                                type="text"
                                id="last-name"
                                name="last-name"
                                required
                                aria-required="true"
                            />
                        </div>
                    </div>
                </form>
                <form className="inline-flex flex-col items-start gap-6">
                    <h2
                        className="w-fit font-bold text-black text-xl tracking-[0] leading-8 whitespace-nowrap transition-all  "
                    >
                        رمز عبور
                    </h2>
                    <div className="flex flex-col w-[707px] items-start gap-3">
                        <label
                            className="font-bold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all  "
                            htmlFor="first-name"
                        >
                            رمز عبور فعلی
                        </label>
                        <div
                            className="flex items-center gap-2 h-10 bg-white px-4 py-0 self-stretch w-full rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all  "
                        >
                            <input
                                className="flex-1 grow outline-none font-VazirRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 transition-all  "
                                placeholder="رمز عبور فعلی"
                                type="text"
                                id="last-name"
                                name="last-name"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-[707px] items-start gap-3">
                        <label
                            className="font-bold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all  "
                            htmlFor="first-name"
                        >
                            رمز عبور جدید
                        </label>
                        <div
                            className="flex items-center gap-2 h-10 bg-white px-4 py-0 self-stretch w-full rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all  "
                        >
                            <input
                                className="flex-1 grow outline-none font-VazirRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 transition-all  "
                                placeholder="رمز عبور جدید"
                                type="text"
                                id="last-name"
                                name="last-name"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-[707px] items-start gap-3">
                        <label
                            className="font-bold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all  "
                            htmlFor="first-name"
                        >
                            تکرار رمز عبور جدید
                        </label>
                        <div
                            className="flex items-center gap-2 h-10 bg-white px-4 py-0 self-stretch w-full rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all  "
                        >
                            <input
                                className="flex-1 grow outline-none font-VazirRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 transition-all  "
                                placeholder="تکرار رمز عبور جدید"
                                type="text"
                                id="last-name"
                                name="last-name"
                            />
                        </div>
                    </div>
                    <ButtonCard
                        title="ذخیره تغییرات"
                        className="inline-flex items-center justify-center gap-2 w-fit  text-base text-white text-center tracking-button-s leading-7 whitespace-nowrap px-10 py-3 bg-neutral-07 rounded-lg border-0 cursor-pointer transition-all  "
                    />
                </form>
            </div>
        </>
    )
}

export default Account;
