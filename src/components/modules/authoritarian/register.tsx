import React from 'react';
import { useRegister } from './hook';
import { Button } from '../../ui/button';
import { DialogDescription, DialogHeader, DialogTitle } from '../../ui/dialog';

const Register = ({ setStep }: { setStep: (val: string) => void }) => {
  const { register, errors, handleSubmit, onSubmit } = useRegister();

  return (
    <>
      <DialogHeader>
        <DialogTitle>
          <img className='h-12 mx-auto' src="/Images/logo.jpg" alt="" />
        </DialogTitle>
        <DialogDescription className='text-gray-400 text-center w-full'>
          لطفا فرم زیر را تکمیل کنید
        </DialogDescription>
      </DialogHeader>
      <div className="pl-2">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className='gap-3 grid md:!grid-cols-2'>
            <div>
              <label className="block pb-2 text-sm">نام کاربری</label>
              <input
                className="w-full rounded-xl border border-gray-200 p-2 outline-0"
                {...register('username')}
              />
              <p className="pt-1 text-xs text-red-600">
                {errors.username?.message}
              </p>
            </div>
            <div>
              <label className="block pb-2 text-sm">شماره موبایل</label>
              <input
                className="w-full rounded-xl border border-gray-200 p-2 outline-0"
                {...register('mobile')}
              />
              <p className="pt-1 text-xs text-red-600">
                {errors.mobile?.message}
              </p>
            </div>
            <div>
              <label className="block pb-2 text-sm">رمز عبور</label>
              <input
                className="w-full rounded-xl border border-gray-200 p-2 outline-0"
                type="password"
                {...register('password')}
              />
              <p className="pt-1 text-xs text-red-600">
                {errors.password?.message}
              </p>
            </div>
            <div>
              <label className="block pb-2 text-sm">تکرار رمز عبور</label>
              <input
                className="w-full rounded-xl border border-gray-200 p-2 outline-0"
                type="password"
                {...register('confirmPassword')}
              />
              <p className="pt-1 text-xs text-red-600">
                {errors.confirmPassword?.message}
              </p>
            </div>
          </div>

          <Button
            className="mx-auto !mt-6 !block !w-2/3"
            variant={'main'}
            type="submit"
          >
            ثبت‌نام
          </Button>
          <p
            onClick={() => setStep('login')}
            className="text-main w-full cursor-pointer text-center text-sm"
          >
            <span className='text-black'>حساب کاربری دارید؟</span> وارد شوید
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
