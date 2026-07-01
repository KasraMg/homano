import React, { useState } from 'react';
import {
  Handbag,
  CheckCircle,
  XCircle,
  Clock,
  ChevronLeft,
} from 'lucide-react';
import PageHierarchy from '../../../modules/page-hierarchy';

type OrderStatus = 'delivered' | 'canceled' | 'pending';

interface Order {
  id: string;
  status: OrderStatus;
  statusLabel: string;
  products: number;
  price: string;
  date: string;
  image: string;
}

const allOrders: Order[] = [
  {
    id: '#125678',
    status: 'delivered',
    statusLabel: 'تحویل شده',
    products: 3,
    price: '28,450,000',
    date: '1403/02/25',
    image: '/Images/product-20.jpg',
  },
  {
    id: '#125684',
    status: 'pending',
    statusLabel: 'در انتظار',
    products: 2,
    price: '15,890,000',
    date: '1403/02/22',
    image: '/Images/product-21.jpg',
  },
  {
    id: '#125601',
    status: 'delivered',
    statusLabel: 'تحویل شده',
    products: 1,
    price: '7,750,000',
    date: '1403/02/15',
    image: '/Images/product-22.jpg',
  },
  {
    id: '#125550',
    status: 'canceled',
    statusLabel: 'لغو شده',
    products: 1,
    price: '6,300,000',
    date: '1403/02/10',
    image: '/Images/product-23.jpg',
  },
];

const OrdersScreen: React.FC = () => {
  const [filter, setFilter] = useState<'all' | OrderStatus>('all');

  const filteredOrders =
    filter === 'all'
      ? allOrders
      : allOrders.filter((order) => order.status === filter);

  const filterButtons = [
    { label: 'همه', value: 'all' },
    { label: 'تحویل شده', value: 'delivered' },
    { label: 'لغو شده', value: 'canceled' },
  ];

  return (
    <section className="hover:drop-shadow-custom my-10 w-full rounded-md border bg-white p-6 shadow-lg transition-all">
      <div className="itmes-center flex justify-start gap-3">
        <div className="bg-neutral-01 flex size-9 items-center justify-center rounded-md">
          <Handbag className="text-secondary-color-blue" />
        </div>
        <h2 className="font-VazirBold text-neutral-07 flex items-center text-2xl">
          سفارش‌های من
        </h2>
      </div>
      <div className="my-6 flex items-center justify-between">
        <div className="font-VazirMedium flex gap-4 text-sm">
          {filterButtons.map((btn) => {
            const Icon =
              btn.value === 'delivered'
                ? CheckCircle
                : btn.value === 'canceled'
                  ? XCircle
                  : btn.value === 'pending'
                    ? Clock
                    : null;

            return (
              <button
                key={btn.value}
                onClick={() => setFilter(btn.value as any)}
                className={`group flex cursor-pointer items-center gap-2 rounded-md border px-6 py-2 transition-all ${
                  filter === btn.value
                    ? 'bg-main border-main hover:bg-main/90 text-white'
                    : 'text-neutral-07 hover:bg-main border bg-white hover:text-white'
                }`}
              >
                {btn.value === 'delivered' && (
                  <CheckCircle
                    size={16}
                    className={`transition-colors ${
                      filter === 'delivered'
                        ? 'text-white'
                        : 'text-green-700 group-hover:text-white'
                    }`}
                  />
                )}
                {btn.value === 'canceled' && (
                  <XCircle
                    size={16}
                    className={`transition-colors ${
                      filter === 'canceled'
                        ? 'text-white'
                        : 'text-red-700 group-hover:text-white'
                    }`}
                  />
                )}

                <span>{btn.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="hover:drop-shadow-custom relative flex items-center justify-between rounded-md bg-white px-4 py-6 shadow-sm transition-all"
          >
            <div className="flex items-start gap-10">
              <img
                src={order.image}
                alt="Product"
                className="h-30 w-45 rounded-md object-cover"
              />
              <div className="space-y-7">
                <div className="flex flex-col">
                  <p className="font-VazirMedium text-neutral-07 text-sm">
                    {' '}
                    شماره سفارش{' '}
                  </p>
                  <p className="font-VazirMedium text-base">{order.id}</p>
                </div>
                <div className="flex flex-col">
                  <p className="font-VazirMedium text-neutral-07 text-sm">
                    تاریخ ثبت سفارش
                  </p>
                  <p className="font-VazirMedium text-base">{order.date}</p>
                </div>
              </div>
            </div>
            <div className="space-y-7">
              <div
                className={`font-VazirMedium inline-flex items-center gap-2 rounded-md px-4 py-2 text-xs ${
                  order.status === 'delivered'
                    ? 'bg-green-100 text-green-700'
                    : order.status === 'canceled'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-gray-100 text-gray-700'
                }`}
              >
                {order.status === 'delivered' && <CheckCircle size={16} />}
                {order.status === 'canceled' && <XCircle size={16} />}
                {order.status === 'pending' && <Clock size={16} />}
                {order.statusLabel}
              </div>
              <div className="flex flex-col">
                <p className="font-VazirMedium text-neutral-07 text-center text-sm">
                  {order.products} محصول
                </p>
                <p className="font-VazirMedium text-base">
                  {order.price} تومان
                </p>
              </div>
            </div>
            <div className="hover:bg-main flex size-8 items-center justify-center rounded-full border border-gray-100 bg-white shadow-md transition-all hover:text-white">
              <ChevronLeft className="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrdersScreen;
