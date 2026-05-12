import React from 'react'

function Address() {
    return (
        <>
            <div className="flex flex-col items-start px-18 gap-[19px] flex-1 grow">
                <h2 className='font-bold text-xl text-black leading-8 tracking-[0] whitespace-nowrap transition-all hover:drop-shadow-custom'>
                    آدرس
                </h2>
                <div className="flex items-center justify-start gap-[23px] w-[707px]">
                    <div className='flex flex-col items-start gap-4 w-[342px] p-4 border border-solid border-neutral-04 rounded-lg transition-all hover:shadow-[-0.5px_4px_4px_rgba(0,0,0,0.25)]'>
                        <div className="inline-flex items-center justify-between gap-2 w-full">
                            <div className='font-bold text-base text-black leading-6.5 tracking-[0] transition-all hover:drop-shadow-custom'>
                                 آدرس صورتحساب
                            </div>
                            <div className='flex items-center gap-[5px] cursor-pointer'>
                                <img
                                    className='size-4 text-neutral-04 transition-all hover:drop-shadow-custom'
                                    src="/Images/edit.svg"
                                    alt="edit" />
                                <span className='font-bold text-base text-neutral-04 leading-6.5 tracking-[0] transition-all hover:drop-shadow-custom'>
                                    ویرایش
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col items-start gap-1'>
                            <div className='font-VazirRegular text-sm text-black leading-5.5 tracking-[0] transition-all hover:drop-shadow-custom'>
                                یکتا شییشه گر
                            </div>
                            <div className='font-VazirRegular text-sm text-black leading-5.5 tracking-[0] transition-all hover:drop-shadow-custom'>
                                 ۲۳۴ ۵۶۷ ۸۹۰ (+۱)
                            </div>
                            <div className='font-VazirRegular text-sm text-black leading-5.5 tracking-[0] transition-all hover:drop-shadow-custom'>
                                 ۳۴۵ لانگ آیلند، نیویورک، ایالات متحده
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-start gap-4 w-[342px] p-4 border border-solid border-neutral-04 rounded-lg transition-all hover:shadow-[-0.5px_4px_4px_rgba(0,0,0,0.25)]'>
                        <div className="inline-flex items-center justify-between gap-2 w-full">
                            <div className='font-bold text-base text-black leading-6.5 tracking-[0] transition-all hover:drop-shadow-custom'>
                                آدرس ارسال
                            </div>
                            <div className='flex items-center gap-[5px] cursor-pointer'>
                                <img
                                    className='size-4 text-neutral-04 transition-all hover:drop-shadow-custom'
                                    src="/Images/edit.svg"
                                    alt="edit" />
                                <span className='font-bold text-base text-neutral-04 leading-6.5 tracking-[0] transition-all hover:drop-shadow-custom'>
                                    ویرایش
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col items-start gap-1'>
                            <div className='font-VazirRegular text-sm text-black leading-5.5 tracking-[0] transition-all hover:drop-shadow-custom'>
                                یکتا شیشه گر
                            </div>
                            <div className='font-VazirRegular text-sm text-black leading-5.5 tracking-[0] transition-all hover:drop-shadow-custom'>
                                 ۲۳۴ ۵۶۷ ۸۹۰ (+۱)
                            </div>
                            <div className='font-VazirRegular text-sm text-black leading-5.5 tracking-[0] transition-all hover:drop-shadow-custom'>
                                ۳۴۵ لانگ آیلند، نیویورک، ایالات متحده
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Address
