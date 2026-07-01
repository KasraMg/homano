import React, { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { TicketCheck, Plus, Search, ChevronLeft, Send } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "../../../../components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../../components/ui/select";
import PageHierarchy from '../../../../components/modules/page-hierarchy';


interface Ticket {
    id: string;
    subject: string;
    category: string;
    status: string;
    updated: string;
}

const tickets: Ticket[] = [
    { id: '#۱۲۵۴۸', subject: 'سوال درباره زمان ارسال سفارش', category: 'ارسال', status: 'پاسخ داده شده', updated: '۲۲ اردیبهشت ۱۴۰۳' },
    { id: '#۱۲۵۴۷', subject: 'مشکل در ثبت سفارش', category: 'سفارشات', status: 'بسته شده', updated: '۲۰ اردیبهشت ۱۴۰۳' },
    { id: '#۱۲۵۴۶', subject: 'درخواست راهنمایی برای انتخاب محصول', category: 'فنی', status: 'در انتظار پاسخ', updated: '۱۹ اردیبهشت ۱۴۰۳' },
    { id: '#۱۲۵۴۵', subject: 'پیگیری وضعیت سفارش', category: 'پشتیبانی محصول', status: 'در حال بررسی', updated: '۱۸ اردیبهشت ۱۴۰۳' },
    { id: '#۱۲۵۴۴', subject: 'سوال درباره شرایط بازگشت کالا', category: 'بازگشت کالا', status: 'بسته شده', updated: '۱۷ اردیبهشت ۱۴۰۳' },
];

const getStatusColor = (status: string): string => {
    switch (status) {
        case 'پاسخ داده شده': return 'bg-green-100 text-green-700';
        case 'بسته شده': return 'bg-gray-100 text-gray-500';
        case 'در حال بررسی': return 'bg-orange-100 text-orange-600';
        case 'در انتظار پاسخ': return 'bg-blue-50 text-blue-400';
        default: return 'bg-gray-100';
    }
};

const ticketSchema = z.object({
    subject: z.string().min(5, { message: "موضوع باید حداقل ۵ کاراکتر باشد" }),
    category: z
        .string({ message: "انتخاب دسته‌بندی الزامی است" })
        .min(1, { message: "انتخاب دسته‌بندی الزامی است" }),
    message: z.string().min(10, { message: "متن پیام باید حداقل ۱۰ کاراکتر باشد" }),
});

type TicketFormValues = z.infer<typeof ticketSchema>;

const TicketsScreen: React.FC = () => {
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<TicketFormValues>({
        resolver: zodResolver(ticketSchema),
        defaultValues: {
            subject: "",
            category: "",
            message: "",
        },
    });

    const [filterStatus, setFilterStatus] = useState<string>("all");
    const [openTicketModal, setOpenTicketModal] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage: number = 3;

    const onSubmit: SubmitHandler<TicketFormValues> = (data) => {
        console.log("داده‌های ارسالی:", data);
        setOpenTicketModal(false);
        reset();
    };

    const filteredTickets: Ticket[] = filterStatus === "all"
        ? tickets
        : tickets.filter((ticket: Ticket) => ticket.status === filterStatus);

    const totalPages: number = Math.ceil(filteredTickets.length / itemsPerPage);
    const startIndex: number = (currentPage - 1) * itemsPerPage;
    const paginatedTickets: Ticket[] = filteredTickets.slice(startIndex, startIndex + itemsPerPage);

    const handleStatusChange = (value: string): void => {
        setFilterStatus(value);
        setCurrentPage(1);
    };

    return (
        <section className="bg-white rounded-md shadow-lg my-10 p-6 border">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <div className="flex items-center justify-start gap-3">
                        <div className="flex items-center justify-center size-9 rounded-md bg-neutral-01">
                            <TicketCheck className="text-secondary-color-blue" />
                        </div>
                        <h2 className="flex items-center text-2xl font-VazirBold text-neutral-07">تیکت های من</h2>
                    </div>
                    <p className="font-VazirRegular text-sm text-gray-500 mt-2">
                        در این بخش می‌توانید وضعیت و پاسخ تیکت‌های خود را مشاهده کنید.
                    </p>
                </div>

                <Dialog open={openTicketModal} onOpenChange={setOpenTicketModal}>
                    <DialogTrigger asChild>
                        <button className="px-6 py-3 rounded-md flex items-center gap-2 bg-main text-white border--main transition-colors hover:bg-main/90 cursor-pointer">
                            <Plus size={18} />
                            ایجاد تیکت جدید
                        </button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-[450px] font-VazirRegular" dir="rtl">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <DialogHeader>
                                <DialogTitle className="text-center font-VazirBold mb-4">ایجاد تیکت جدید</DialogTitle>
                            </DialogHeader>

                            <div className="flex flex-col gap-4">
                                <div>
                                    <label className="block text-sm mb-2 text-neutral-05">موضوع *</label>

                                    {/* <CustomInput
                                        register={register("subject")}
                                        placeholder="موضوع تیکت خود را وارد کنید"
                                        inputClassName={`w-full px-3 py-1.5 border rounded-md border-gray-200 shadow-sm outline-none transition-all hover:shadow-[0_4px_4px_rgb(0,0,0,0.25)] ${errors.subject ? 'border-red-500' : 'border-gray-200'}`}
                                    /> */}

                                    {errors.subject && (
                                        <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm mb-2 text-neutral-05">دسته بندی *</label>
                                    <Controller
                                        name="category"
                                        control={control}
                                        render={({ field }) => (
                                            <Select dir='rtl' onValueChange={field.onChange} value={field.value}>
                                                <SelectTrigger className={`w-full ${errors.category ? 'border-red-500' : ''}`}>
                                                    <SelectValue placeholder="انتخاب دسته بندی" />
                                                </SelectTrigger>
                                                <SelectContent className='font-VazirMedium text-sm'>
                                                    <SelectItem value="cat1">پشتیبانی محصول</SelectItem>
                                                    <SelectItem value="cat2">سفارشات</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    {errors.category && (
                                        <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm mb-2 text-neutral-05">متن پیام *</label>
                                    <textarea
                                        {...register("message")}
                                        className={`w-full p-3 border rounded-md border-gray-200 h-32 shadow-sm outline-none transition-all hover:shadow-[0_4px_4px_rgb(0,0,0,0.25)] ${errors.message ? 'border-red-500' : 'border-gray-200'}`}
                                        placeholder="متن پیام خود را با جزئیات وارد کنید..."
                                    />
                                    {errors.message && (
                                        <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-between mt-4">
                                <button
                                    type="submit"
                                    className="px-5 py-2 bg-main text-white border-main transition-colors hover:bg-main/90 rounded-md flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <Send size={16} />
                                    ارسال
                                </button>

                                <DialogClose asChild>
                                    <button className="px-6 py-2 border rounded-md text-gray-600 cursor-pointer transition-all hover:text-white hover:bg-main">
                                        انصراف
                                    </button>
                                </DialogClose>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="flex items-center justify-between gap-4 my-6">
                <Select value={filterStatus} onValueChange={handleStatusChange}>
                    <SelectTrigger
                        className="w-[160px] font-VazirRegular text-base text-neutral-07 hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-right"
                        dir="rtl"
                    >
                        <SelectValue placeholder="همه وضعیت ها" />
                    </SelectTrigger>

                    <SelectContent position="popper">
                        <SelectItem value="all" className="font-VazirRegular">همه وضعیت ها</SelectItem>
                        <SelectItem value="پاسخ داده شده" className="font-VazirRegular">پاسخ داده شده</SelectItem>
                        <SelectItem value="در انتظار پاسخ" className="font-VazirRegular">در انتظار پاسخ</SelectItem>
                        <SelectItem value="در حال بررسی" className="font-VazirRegular">در حال بررسی</SelectItem>
                        <SelectItem value="بسته شده" className="font-VazirRegular">بسته شده</SelectItem>
                    </SelectContent>
                </Select>

                <div className="relative">
                    <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-04 cursor-pointer z-10" />

                    {/* <CustomInput
                        type="text"
                        placeholder="جستجو در تیکت‌ها..."
                        inputClassName="h-10 w-full rounded-md border border bg-white px-4 font-VazirRegular text-sm outline-none transition-all placeholder:text-neutral-04 focus:border-gray-400 sm:w-80"
                    /> */}
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-center border rounded-md overflow-hidden">
                    <thead>
                        <tr className="bg-gray-50 text-neutral-07 font-VazirMedium text-xs border-b border-gray-100">
                            <th className="py-4">شماره تیکت</th>
                            <th className="py-4">موضوع</th>
                            <th className="py-4">دسته بندی</th>
                            <th className="py-4">وضعیت</th>
                            <th className="py-4">آخرین بروزرسانی</th>
                            <th className="py-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedTickets.map((ticket: Ticket) => (
                            <tr
                                key={ticket.id}
                                className="border rounded-md shadow-sm overflow-hidden mt-1 border-gray-50 hover:bg-gray-50 transition-colors"
                            >
                                <td className="py-5 font-VazirMedium">{ticket.id}</td>
                                <td className="py-5 font-VazirMedium text-sm text-gray-700">{ticket.subject}</td>
                                <td className="py-5 font-VazirMedium text-sm text-gray-600">{ticket.category}</td>
                                <td className="py-5">
                                    <span className={`flex items-center justify-center gap-1.5 px-0.5 py-2 font-VazirMedium rounded-md text-xs ${getStatusColor(ticket.status)}`}>
                                        <span className="size-1.5 rounded-full bg-current"></span>
                                        {ticket.status}
                                    </span>
                                </td>
                                <td className="py-5 font-VazirMedium text-sm text-gray-500">{ticket.updated}</td>
                                <td className="py-5">
                                    <button className="flex items-center justify-center gap-2 mx-auto p-2 border border-gray-200 rounded-lg font-VazirMedium text-sm transition-all hover:bg-main hover:text-white cursor-pointer">
                                        مشاهده جزئیات
                                        <ChevronLeft size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* <CustomPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            /> */}
        </section>
    );
};

export default TicketsScreen;











