import { zodResolver } from '@hookform/resolvers/zod';
import { Edit2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Dialog, DialogContent, DialogTrigger } from '../../../../ui/dialog';
import { Button } from '../../../../ui/button';

const schema = z
  .object({
    currentPassword: z.string().min(1, 'رمز عبور فعلی را وارد کنید'),
    newPassword: z
      .string()
      .min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد'),
    confirmPassword: z.string().min(1, 'تکرار رمز عبور را وارد کنید'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'تکرار رمز عبور با رمز جدید یکسان نیست',
  });

type FormValues = z.infer<typeof schema>;

const ChangePasswordModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer rounded-md border p-3 transition-all hover:shadow-[0_4px_4px_rgb(0,0,0,0.25)]">
          <Edit2 size={16} className="shrink-0 text-gray-400" />

          <div className="flex flex-col items-start text-right">
            <span className="text-sm">تغییر رمز عبور</span>

            <span className="text-xs text-gray-400">
              برای امنیت بیشتر رمز عبور خود را تغییر دهید
            </span>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent
        dir="rtl"
        className="max-w-md rounded-lg px-7 pt-10 pb-7"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          <div>
            <label className="mb-2 block text-sm">
              رمز عبور فعلی
            </label>

            <input
              type="password"
              {...register('currentPassword')}
              className="h-12 w-full rounded-lg border px-4 outline-none focus:border-primary"
            />

            {errors.currentPassword && (
              <p className="mt-1 text-xs text-red-500">
                {errors.currentPassword.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm">
              رمز عبور جدید
            </label>

            <input
              type="password"
              {...register('newPassword')}
              className="h-12 w-full rounded-lg border px-4 outline-none focus:border-primary"
            />

            {errors.newPassword && (
              <p className="mt-1 text-xs text-red-500">
                {errors.newPassword.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm">
              تکرار رمز عبور جدید
            </label>

            <input
              type="password"
              {...register('confirmPassword')}
              className="h-12 w-full rounded-lg border px-4 outline-none focus:border-primary"
            />

            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 h-12 rounded-lg bg-primary text-white disabled:opacity-50"
          >
            ذخیره تغییرات
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePasswordModal;