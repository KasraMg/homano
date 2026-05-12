import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom';

type FormDataType = {
    name: string;
    username: string;
    email: string;
    password: string;
    terms: boolean;
    remember: boolean;
}

const AuthForm  = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormDataType>({
        name: '',
        username: '',
        email: '',
        password: '',
        terms: false,
        remember: false,
    });

    const [searchParams] = useSearchParams();
    const [mode, setMode] = useState<'signup' | 'signin'>('signup');

    useEffect(() => {
        const currentMode = searchParams.get('mode');
        if (currentMode === 'signin') {
            setMode('signin');
        } else {
            setMode('signup');
        }
    }, [searchParams]);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value, type, checked } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <main className="bg-white w-screen min-h-screen">
            <div className="relative flex w-full h-screen">
                <aside className="group relative w-1/2 h-full flex items-center justify-center bg-neutral-02 transition-all  ">
                    <img
                        className="w-full h-full object-cover mix-blend-multiply transition-all duration-300 group-hover:drop-shadow-[0_4px_0_rgba(0,0,0,0.25)]"
                        src="/Images/my-account.png"
                        alt="brand image"
                    />
                    <div className="absolute top-8">
                        <p className=" font-medium text-2xl text-center">
                            <Link
                                to="/"
                                className="text-neutral-07 text-2xl transition-all  "
                            >
                                ۳اِلِگِنت
                            </Link>
                            <span className="text-neutral-04">. </span>
                        </p>
                    </div>
                </aside>

                <section className="w-1/2 flex flex-col justify-center bg-neutral-01">
                    <div className="ml-22 mr-40">
                        <header className="mb-6">
                            <h1 className={`inline-block text-[40px] leading-[44px] text-neutral-07  tracking-headline-4 transition-all hover:drop-shadow-custom mb-6
                             ${mode === 'signup'
                                    ? 'font-medium'
                                    : 'font-extrabold'
                                }`}>
                                {mode === 'signup' ? 'ثبت نام' : 'ورود'}
                            </h1>

                            {mode === 'signup' ? (
                                <p className="block font-VazirRegular text-neutral-04 text-base leading-[26px] transition-all  ">
                                    قبلاً ثبت‌نام کرده‌اید؟
                                    <Link
                                        to="/register?mode=signin"
                                        className="font-bold text-base leading-[26px] text-secondary-color-green ml-1 transition-all hover:underline"
                                    >
                                        ورود
                                    </Link>
                                </p>
                            ) : (
                                <p className="font-VazirRegular text-neutral-04 text-base leading-[26px] transition-all  ">
                                    حساب کاربری ندارید؟
                                    <Link
                                        to="/register?mode=signup"
                                        className="font-bold text-base leading-[26px] text-secondary-color-green ml-1 transition-all hover:underline"
                                    >
                                        ثبت نام
                                    </Link>
                                </p>
                            )}
                        </header>

                        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                            {mode === 'signup' && (
                                <>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="نام شما"
                                        className="font-VazirRegular h-10 text-base text-neutral-04 placeholder:text-neutral-04 leading-[26px] border-b border-neutral-03 pb-3.5 outline-none transition-all  "
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="نام کاربری"
                                        className="font-VazirRegular h-10 text-base text-neutral-04 placeholder:text-neutral-04 leading-[26px] border-b border-neutral-03 pb-3.5 outline-none transition-all  "
                                        value={formData.username}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="ایمیل"
                                        className="font-VazirRegular h-10 text-base text-neutral-04 placeholder:text-neutral-04 leading-[26px] border-b border-neutral-03 pb-3.5 outline-none transition-all  "
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </>
                            )}

                            {mode === 'signin' && (
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="نام کاربری یا ایمیل"
                                    className="font-VazirRegular h-10 text-base text-neutral-04 placeholder:text-neutral-04 leading-[26px] border-b border-neutral-03 pb-3.5 outline-none transition-all  "
                                    value={formData.username}
                                    onChange={handleInputChange}
                                />
                            )}

                            <div className="relative flex items-center justify-between">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="رمز عبور"
                                    className="font-VazirRegular h-10 text-base text-neutral-04 placeholder:text-neutral-04 leading-[26px] w-full border-b border-neutral-03 pb-3.5 outline-none transition-all  "
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                                <span
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute left-3 top-[15px] -translate-y-1/2 cursor-pointer transition-all  "
                                >
                                    <img src="/Images/eye.svg" alt="eye" />
                                </span>
                            </div>

                            {mode === 'signup' ? (
                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        name="terms"
                                        className="size-5 accent-secondary-color-green"
                                        checked={formData.terms}
                                        onChange={handleInputChange}
                                    />
                                    <label
                                        htmlFor="terms"
                                        className="font-VazirRegular text-base text-neutral-04 leading-[26px] transition-all  "
                                    >
                                        با{' '}
                                        <a
                                            href="#"
                                            className="font-bold text-base text-neutral-07 leading-[26px]"
                                        >
                                            سیاست حریم خصوصی
                                        </a>{' '}
                                        و
                                        <a
                                            href="#"
                                            className="font-bold text-base text-neutral-07 leading-[26px] ml-1"
                                        >
                                            شرایط استفاده
                                        </a>{' '}
                                        موافقم
                                    </label>
                                </div>
                            ) : (
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            id="remember"
                                            name="remember"
                                            className="size-5 accent-secondary-color-green"
                                            checked={formData.remember}
                                            onChange={handleInputChange}
                                        />
                                        <label
                                            htmlFor="remember"
                                            className="font-VazirRegular text-base text-neutral-04 leading-[26px] transition-all  "
                                        >
                                            مرا به خاطر بسپار
                                        </label>
                                    </div>

                                    <a href="#" className="font-bold text-base text-neutral-07 leading-[26px] transition-all hover:underline">
                                        فراموشی رمز عبور؟
                                    </a>
                                </div>
                            )}
                            <button
                                type="submit"
                                className="w-full py-2.5  bg-neutral-07 text-white tex-base leading-[28px] tracking-button-s rounded-lg hover:opacity-90 transition"
                            >
                                {mode === 'signup' ? 'ثبت نام' : 'ورود'}
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default AuthForm;
