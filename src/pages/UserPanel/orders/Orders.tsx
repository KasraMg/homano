import React from 'react'

type Order = {
    id: string;
    date: string;
    status: string;
    price: string;
}

const Orders  = () => {

    const ordersData: Order[] = [
        {
            id: "۳۴۵۶_۷۶۸ #",
            date: "۱۷ اکتبر ۲۰۲۳",
            status: "تحویل شده",
            price: "197440000"
        },
        {
            id: "۳۴۵۶_۹۸۰ #",
            date: "۱۱ اکتبر ۲۰۲۳",
            status: "تحویل شده",
            price: "55200000"
        },
        {
            id: "۳۴۵۶_۱۲۰ #",
            date: "۲۴ آگوست ۲۰۲۳",
            status: "تحویل شده",
            price: "375200000"
        },
        {
            id: "۳۴۵۶_۰۳۰ #",
            date: "۱۲ آگوست ۲۰۲۳",
            status: "تحویل شده",
            price: "135200000"
        }
    ];

    return (
        <>
            <div className="inline-flex flex-col items-start gap-10 px-[72px] py-0">
                <h2
                    className="w-fit font-bold text-black text-xl tracking-[0] leading-8 whitespace-nowrap transition-all  "
                >
                    تاریخچه سفارش‌ها
                </h2>
                <table className="inline-flex flex-col items-start">

                    <thead className="block">
                        <tr className="flex w-[707px] items-center justify-between pt-0 pb-2 px-0 border-b border-solid border-neutral-03">
                            <th className="flex w-40 font-VazirRegular text-neutral-04 text-sm transition-all  ">شناسه سفارش</th>
                            <th className="flex w-40 font-VazirRegular text-neutral-04 text-sm transition-all  ">تاریخ</th>
                            <th className="flex w-40 font-VazirRegular text-neutral-04 text-sm transition-all  ">وضعیت</th>
                            <th className="flex w-40 font-VazirRegular text-neutral-04 text-sm transition-all  ">قیمت</th>
                        </tr>
                    </thead>

                    <tbody className="block">
                        {ordersData.map((order) => (
                            <tr
                                key={order.id}
                                className="flex w-[707px] items-center justify-between px-0 py-6 border-b border-solid border-neutral-03"
                            >
                                <td className="flex w-40 font-VazirRegular text-neutral-07 text-sm transition-all  ">
                                    {order.id}
                                </td>
                                <td className="flex w-40 font-VazirRegular text-neutral-07 text-sm transition-all  ">
                                    {order.date}
                                </td>
                                <td className="flex w-40 font-VazirRegular text-neutral-07 text-sm transition-all  ">
                                    {order.status}
                                </td>
                                <td className="flex w-40 font-VazirRegular text-neutral-07 text-sm transition-all  ">
                                    {Number(order.price).toLocaleString('fa-IR')} تومان
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>
        </>
    )
}

export default Orders;
