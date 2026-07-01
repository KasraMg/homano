import React from 'react'
import PageHierarchy from '../../../modules/page-hierarchy'
import { Camera, Edit2, Shield, User } from 'lucide-react'

const AccountScreen = () => {
  return (
   <section className="w-full bg-white rounded-md shadow-lg my-10 p-6 border transition-all hover:drop-shadow-custom">
            <PageHierarchy items={["پیشخوان", "حساب کاربری"]} />

            {/* Header Section */}
            <div className="mb-8">
                <div className="flex items-center justify-start gap-3">
                    <div className="flex items-center justify-center size-9 rounded-md bg-neutral-01">
                        <User className="text-secondary-color-blue" />
                    </div>
                    <h2 className="flex items-center text-2xl font-VazirBold text-neutral-07">
                        اطلاعات حساب کاربری
                    </h2>
                </div>
                <p className="font-VazirRegular text-sm text-gray-500 mt-2">
                    اطلاعات شخصی و تنظیمات حساب کاربری خود را مدیریت کنید.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* right Column (Profile & Security) */}
                <div className="space-y-6 order-2 lg:order-1">
                    {/* Profile Card */}
                    <div className="bg-white p-6 rounded-md border shadow-lg text-center transition-all hover:drop-shadow-custom">
                        <img
                            src="/Images/avatar_2.svg"
                            alt="Profile"
                            className="size-24 rounded-full mx-auto mb-4 object-cover"
                        />
                        <h2 className="text-lg font-VazirBold text-neutral-07">سینا یوسفی</h2>
                        <button className="mt-4 mx-auto font-VazirMedium text-sm flex items-center justify-center gap-2 border border-main text-neutral-04 cursor-pointer transition-all hover:text-white hover:bg-main hover:border-main px-6 py-2 rounded-md">
                            <Camera size={18} />
                            تغییر تصویر پروفایل
                        </button>
                    </div>

                    {/* Security Card */}
                    <div className="bg-white p-4 rounded-md border shadow-lg text-center space-y-4 transition-all hover:drop-shadow-custom">
                        <h2 className="font-VazirBold text-lg text-neutral-07 mb-4 text-right">
                            اطلاعات ورود
                        </h2>

                        <div className="flex items-center gap-2 p-3 border rounded-md transition-all hover:shadow-[0_4px_4px_rgb(0,0,0,0.25)]">
                            <Edit2 size={16} className="text-gray-400 cursor-pointer shrink-0" />
                            <div className="flex flex-col items-start text-right">
                                <span className="font-VazirRegular text-sm">تغییر رمز عبور</span>
                                <span className="font-VazirRegular text-xs text-gray-400 whitespace-nowrap">
                                    برای امنیت بیشتر رمز عبور خود را تغییر دهید
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 p-3 border rounded-md transition-all hover:shadow-[0_4px_4px_rgb(0,0,0,0.25)]">
                            <Shield size={16} className="text-gray-400 cursor-pointer shrink-0" />
                            <div className="flex flex-col items-start text-right">
                                <span className="font-VazirRegular text-sm">احراز هویت دو مرحله ای</span>
                                <span className="font-VazirRegular text-xs text-gray-400 whitespace-nowrap">
                                    ورود خود را با کد یکبار مصرف ایمن کنید
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* left Column (Personal Info) */}
                <div className="md:col-span-2 bg-white p-6 rounded-md border shadow-lg transition-all hover:drop-shadow-custom">
                    <h2 className="font-VazirBold text-lg text-neutral-07 mb-4 text-right">
                        اطلاعات شخصی
                    </h2>
{/* 
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            label="نام و نام خانوادگی"
                            value="سینا یوسفی"
                            icon={<User size={18} />}
                            showEditIcon={true}
                        />

                        <input
                            label="کد ملی"
                            value="1234567890"
                            icon={<CreditCard size={18} />}
                            digits="fa"
                            showEditIcon={true}
                        />

                        <input
                            label="ایمیل"
                            value="sina.yousefi@email.com"
                            icon={<Mail size={18} />}
                            showEditIcon={true}
                        />

                        <input
                            label="تاریخ تولد"
                            value="1368/05/20"
                            icon={<Calendar size={18} />}
                            digits="fa"
                            showEditIcon={true}
                        />

                        <input
                            label="شماره موبایل"
                            value="0912 345 6789"
                            icon={<Phone size={18} />}
                            digits="fa"
                            dir="ltr"
                            showEditIcon={true}
                        />

                        <div className="flex flex-col gap-2 w-full">
                            <label className="font-VazirMedium text-sm text-neutral-07">جنسیت</label>

                            <Select defaultValue="male" dir="rtl">
                                <SelectTrigger className="font-VazirMedium text-sm min-h-12 text-right w-full leading-none">
                                    <SelectValue placeholder="انتخاب کنید" />
                                </SelectTrigger>

                                <SelectContent className="font-VazirMedium">
                                    <SelectItem value="male">مرد</SelectItem>
                                    <SelectItem value="female">زن</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
  )
}

export default AccountScreen