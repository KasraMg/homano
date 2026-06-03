import { DialogDescription, DialogHeader, DialogTitle } from '../../ui/dialog';
import { Button } from '../../ui/button';
import { useLogin } from '../../../hooks/useLogin';

const Login = ({ setStep }: { setStep: (val: string) => void }) => {
  const { register, errors, handleSubmit, onSubmit } = useLogin();

  return (
    <>
      <DialogHeader>
        <DialogTitle>
          <img className='h-12 mx-auto' src="/Images/logo.jpg" alt="" />
        </DialogTitle>
        <DialogDescription className='text-gray-400 text-center w-full'>
          برای استفاده از خدمات ما، شماره موبایل خود را وارد کنید.
        </DialogDescription>
      </DialogHeader>
      <div className="pl-2">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <label className="block pb-2 text-sm">شماره موبایل</label>
            <input
              className="w-full rounded-xl border border-gray-200 p-2 outline-0"
              {...register('phone')}
            />
            <p className="pt-1 text-xs text-red-600">
              {errors.phone?.message}
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

          <Button
            className="mx-auto !mt-6 !block !w-2/3"
            variant={'main'}
            type="submit"
          >
            ورود
          </Button>
          <p
            onClick={() => setStep('register')}
            className="text-main cursor-pointer text-center text-sm w-max mx-auto"
          >
            <span className='text-black'>حساب کاربری ندارید؟</span> ثبت نام کنید
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
