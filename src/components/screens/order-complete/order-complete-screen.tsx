import React from 'react'
import Container from '../../modules/container'
import { Link, useNavigate } from 'react-router-dom';
import Stepper from '../../modules/stepper';
import { Button } from '../../ui/button';
import Badge from '../../ui/badge';

type OrderProduct = {
    id: string;
    image: string;
    quantity: number;
};

type OrderInfoItem = {
    label: string;
    value: string;
};


const OrderComplateScreen = () => {
    const navigate = useNavigate();

    const handlePurchase = (): void => {
        navigate('/my-account/Index');
    }

    const products: OrderProduct[] = [
        {
            id: 'product-1',
            image: '/Images/product-5.png',
            quantity: 2
        },
        {
            id: 'product-2',
            image: '/Images/product-5-2.svg',
            quantity: 2
        },
        {
            id: 'product-3',
            image: '/Images/product-2.png',
            quantity: 1
        }
    ];

    const orderInfo: OrderInfoItem[] = [
        { label: "کد سفارش:", value: "#0123_45678" },
        { label: "تاریخ:", value: "October 19, 2023" },
        { label: "مجموع:", value: "$1,345.00" },
        { label: "روش پرداخت:", value: "کارت اعتباری" }
    ];

    return (
        <Container>
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center py-10 bg-white">

                    <Stepper
                        title="تکمیل شد!"
                        currentStep={3}
                    />

                    <div
                        className="flex flex-col items-center gap-10
                            w-full max-w-[640px] lg:max-w-[700px]
                            px-6 sm:px-10 
                            py-12 lg:py-20
                            lg:my-10
                            bg-white
                            rounded-xl
                            shadow-[0px_32px_48px_-4px_rgba(0,0,0,0.25)]
                        "
                    >

                        {/* HEADER */}
                        <header className="flex flex-col items-center gap-4 w-full text-center">
                            <h2 className="w-full  text-neutral-04 text-2xl lg:text-[28px] leading-8.5 transition-all">
                                🎉  متشکریم!
                            </h2>

                            <p className="w-full text-2xl sm:text-3xl lg:text-[40px] text-[#23262F] leading-tight transition-all">
                                سفارش شما با موفقیت دریافت شد
                            </p>
                        </header>

                        {/* PRODUCTS */}
                        <div className="flex flex-wrap justify-center gap-10 w-full">
                            {products.map((product: OrderProduct) => (
                                <div
                                    key={product.id}
                                    className="relative bg-neutral-02 transition-all"
                                >
                                    <img
                                        className="w-14 sm:w-20 h-14 sm:h-24 object-cover mix-blend-multiply"
                                        src={product.image}
                                        alt="product"
                                    />

                                    <div className="absolute -top-4 right-0 flex items-center justify-center size-8 bg-neutral-07 rounded-[80px] transition-all">
                                        <Badge
                                            number={product.quantity.toLocaleString('fa-IR')}
                                            className="w-2.5 h-6 font-bold text-[#FCFCFD] text-base leading-6"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ORDER INFO */}
                        <dl
                            className="w-full grid gap-y-2 sm:gap-y-5 sm:grid-cols-[180px_auto] sm:justify-center"
                        >
                            {orderInfo.map((item) => (
                                <React.Fragment key={item.label}>
                                    <dt className="font-bold text-neutral-04 text-sm pb-2 transition-all">
                                        {item.label}
                                    </dt>

                                    <dd className="font-bold text-neutral-07 text-sm pb-2 border-b border-neutral-03 sm:border-none break-all transition-all">
                                        {item.value}
                                    </dd>
                                </React.Fragment>
                            ))}
                        </dl>

                        <Link to={'/user-panel/orders'} className='w-full block'>
                            <Button variant={"main"} className='h-11 w-2/3 !block mx-auto'>
                                مشاهده سفارشات
                            </Button></Link>


                    </div>
                </div>
            </div>
        </Container>
    )
}

export default OrderComplateScreen