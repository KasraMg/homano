import { Controller, useForm } from 'react-hook-form';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';

type FormValues = {
  fullName: string;
  nationalCode: string;
  email: string;
  birthDate: string;
  mobile: string;
  gender: string;
};
import { Edit2, Shield, User } from 'lucide-react';
import { Button } from '../../../ui/button';
import { useEffect } from 'react';
import { useUser } from '../../../../hooks/useUser';
import ChangePasswordModal from './partials/change-password-modal';

const AccountScreen = () => {
  const { data } = useUser();

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      //   fullName: 'سینا یوسفی',
      //   nationalCode: '2284324665',
      //   email: 'sina.yousefi@email.com',
      //   birthDate: '1368/05/20',
      //   mobile: '09123456789',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  useEffect(() => {
    if (data) {
      reset({
        fullName: data.name,
        nationalCode: data.nationalCode,
        email: data.email,
        birthDate: data.birthDate || '۱۴۰۵/۰۴/۱۰',
        mobile: data.phone,
      });
    }
  }, [data, reset]);
  return (
    <section className="hover:drop-shadow-custom my-10 w-full rounded-md border bg-white p-6 shadow-lg transition-all">
      <div className="mb-8">
        <div className="flex items-center justify-start gap-3">
          <div className="bg-neutral-01 flex size-9 items-center justify-center rounded-md">
            <User className="text-secondary-color-blue" />
          </div>
          <h2 className="font-VazirBold text-neutral-07 flex items-center text-xl sm:!text-2xl">
            اطلاعات حساب کاربری
          </h2>
        </div>
        <p className="font-VazirRegular mt-2 text-sm text-gray-500">
          اطلاعات شخصی و تنظیمات حساب کاربری خود را مدیریت کنید.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="order-2 space-y-6 lg:order-1 sm:!mt-0 mt-8">
          <div className="hover:drop-shadow-custom space-y-4 rounded-md sm:!border-x sm:!border-b border-t pt-6 bg-white sm:!p-4 text-center sm:!shadow-lg transition-all">
            <h2 className="font-VazirBold text-neutral-07 mb-4 text-right text-lg">
              اطلاعات ورود
            </h2>
            <ChangePasswordModal />
          </div>
        </div>

        <div className="hover:drop-shadow-custom rounded-md sm:!border bg-white sm:!p-6 sm:!shadow-lg transition-all md:col-span-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="font-VazirMedium text-neutral-07 text-sm">
                  نام و نام خانوادگی
                </label>

                <input
                  className="border-neutral-03 rounded-md border p-2 text-sm text-gray-600"
                  {...register('fullName', {
                    required: 'نام و نام خانوادگی الزامی است',
                    minLength: {
                      value: 3,
                      message: 'حداقل ۳ کاراکتر وارد کنید',
                    },
                  })}
                />

                {errors.fullName && (
                  <span className="scroll-pt-2.5 text-sm text-red-500">
                    {errors.fullName.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-VazirMedium text-neutral-07 text-sm">
                  کد ملی
                </label>
                <input
                  className="border-neutral-03 rounded-md border p-2 text-sm text-gray-600"
                  {...register('nationalCode', {
                    required: 'کد ملی الزامی است',
                    pattern: {
                      value: /^\d{10}$/,
                      message: 'کد ملی باید دقیقا ۱۰ رقم باشد',
                    },
                  })}
                />

                {errors.nationalCode && (
                  <span className="scroll-pt-2.5 text-sm text-red-500">
                    {errors.nationalCode.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-VazirMedium text-neutral-07 text-sm">
                  ایمیل
                </label>

                <input
                  className="border-neutral-03 rounded-md border p-2 text-sm text-gray-600"
                  type="email"
                  {...register('email', {
                    required: 'ایمیل الزامی است',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'ایمیل معتبر نیست',
                    },
                  })}
                />
                {errors.email && (
                  <span className="scroll-pt-2.5 text-sm text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-VazirMedium text-neutral-07 text-sm">
                  تاریخ تولد
                </label>

                <Controller
                  name="birthDate"
                  control={control}
                  rules={{
                    required: 'تاریخ تولد الزامی است',
                  }}
                  render={({ field }) => (
                    <DatePicker
                      inputClass="border-neutral-03 rounded-md border p-2 text-sm text-gray-600"
                      calendar={persian}
                      locale={persian_fa}
                      value={field.value}
                      onChange={field.onChange}
                      format="YYYY/MM/DD"
                      calendarPosition="bottom-right"
                    />
                  )}
                />

                {errors.birthDate && (
                  <span className="scroll-pt-2.5 text-sm text-red-500">
                    {errors.birthDate.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-VazirMedium text-neutral-07 text-sm">
                  شماره موبایل
                </label>

                <input
                  className="border-neutral-03 rounded-md border p-2 text-sm text-gray-600"
                  dir="ltr"
                  {...register('mobile', {
                    required: 'شماره موبایل الزامی است',
                    pattern: {
                      value: /^09\d{9}$/,
                      message: 'شماره موبایل معتبر نیست',
                    },
                  })}
                />
                {errors.mobile && (
                  <span className="scroll-pt-2.5 text-sm text-red-500">
                    {errors.mobile.message}
                  </span>
                )}
              </div>
            </div>

            <Button type="submit" variant={'main'} className="mt-6 w-full">
              ثبت
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AccountScreen;
