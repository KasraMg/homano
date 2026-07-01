import { PencilIcon, Trash } from 'lucide-react';

const AddressCard = ({ label, address, postalCode, phone, icon: Icon }: {
    label: string, address: string, postalCode: string, phone: string, icon: any
}) => {
    return (
        <div className="rounded-md border border-stone-200 bg-white shadow-sm p-6 transition-all hover:drop-shadow-custom">
            <p className="inline font-VazirMedium text-base bg-orange-50 text-gray-900 px-4 py-1 rounded-full">
                {label}
            </p>
            <div className="flex items-center justify-between gap-4 mt-4">
                <div className="flex items-center gap-4">
                    <div className="bg-orange-50 p-4 rounded-full text-gray-900">
                        {Icon && <Icon size={24} />}
                    </div>
                    <div>
                        <p className="text-gray-700 font-VazirMedium text-base">{address}</p>
                        <div className="mt-4 flex gap-6 font-VazirRegular text-sm text-gray-500">
                            <span>کد پستی: {postalCode}</span>
                            <span className="border-l border-gray-300 h-4"></span>
                            <span>تلفن: {phone}</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className='flex flex-col items-center gap-1'>
                        <button className="p-3 rounded-lg shadow-sm bg-white text-gray-900 transition-all hover:drop-shadow-custom">
                            <PencilIcon size={20} />
                        </button>
                        <p className="font-VazirRegular text-base text-gray-500"> ویرایش</p>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <button className="p-3 rounded-lg shadow-sm bg-white text-gray-900 transition-all hover:drop-shadow-custom">
                            <Trash size={20} />
                        </button>
                        <p className="font-VazirRegular text-base text-gray-500">حذف</p>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default AddressCard;
