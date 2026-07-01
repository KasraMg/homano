import React from 'react'
import { MapPin, MapPinHouse, BriefcaseBusiness, Plus, ShieldCheck } from 'lucide-react';
import PageHierarchy from '../../../modules/page-hierarchy';
import AddressCard from './partials/address-card';

const AddressScreen = () => {
    return (
        <section className="flex-1 p-6 bg-white min-h-screen border my-10 rounded-md shadow-sm transition-all hover:drop-shadow-custom">
            <PageHierarchy
                items={["پیشخوان", "آدرس ها"]}
            />
            {/* هدر بخش آدرس‌ها */}
            <div className="flex justify-between items-center mb-8">
                <div className="flex itmes-center justify-start gap-3">
                    <div className="flex items-center justify-center size-9 rounded-md bg-[#e8ddd4]">
                        <MapPin className="" />
                    </div>
                    <h2 className="flex items-center text-2xl font-VazirBold text-[#3B2F2F]">آدرس های من</h2>
                </div>
                <button className="px-6 py-3 rounded-md flex items-center gap-2 bg-[#7A5C48] text-white border-[#7A5C48] transition-colors hover:bg-[#6b4a35] cursor-pointer">
                    <Plus size={18} />
                    افزودن آدرس جدید
                </button>
            </div>

            {/* لیست آدرس‌ها */}
            <div className="space-y-4">
                <AddressCard
                    label="خانه"
                    address="تهران، میدان ونک، خیابان ملاصدرا، نبش خیابان شیخ بهایی، پلاک ۱۲، واحد ۳"
                    postalCode="۱۹۹۸۷۶۵۳۱۱"
                    phone="۰۹۱۲۳۴۵۶۷۸۹"
                    icon={MapPinHouse}
                />

                <AddressCard
                    label="محل کار"
                    address="تهران، خیابان جمهوری اسلامی، بین خیابان حافظ و خیابان ادیب، پلاک ۱۲، واحد ۳"
                    postalCode="۱۹۹۸۷۶۵۳۱۱"
                    phone="۰۹۱۲۳۴۵۶۷۸۹"
                    icon={BriefcaseBusiness}
                />

            </div>

            {/* فوتر کوچک هشدار */}
            <div className="mt-8 p-3 flex items-center justify-center gap-2 text-gray-500 text-sm bg-orange-50 rounded-md">
                <ShieldCheck />
                <p className='font-VazirMedium'>اطلاعات آدرس‌های شما کاملاً محرمانه بوده و تنها برای پردازش سفارش‌ها استفاده می‌شود.</p>
            </div>
        </section>
    );
};

export default AddressScreen;