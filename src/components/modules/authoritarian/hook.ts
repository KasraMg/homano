import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const registerSchema = yup.object({
  username: yup
    .string()
    .required('نام کاربری الزامی است')
    .min(3, 'حداقل ۳ کاراکتر وارد کنید'),
  mobile: yup
    .string()
    .required('شماره موبایل الزامی است')
    .matches(/^09\d{9}$/, 'شماره موبایل معتبر نیست (مثلاً: 09123456789)'),
  password: yup
    .string()
    .required('رمز عبور الزامی است')
    .min(6, 'حداقل ۶ کاراکتر'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'تکرار رمز عبور مطابقت ندارد')
    .required('تکرار رمز عبور الزامی است'),
});
const loginSchema = yup.object({
  mobile: yup
    .string()
    .required('شماره موبایل الزامی است')
    .matches(/^09\d{9}$/, 'شماره موبایل معتبر نیست (مثلاً: 09123456789)'),
  password: yup
    .string()
    .required('رمز عبور الزامی است')
    .min(6, 'حداقل ۶ کاراکتر'),
});

export const useRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data: any) => {
    console.log('✅ فرم ارسال شد:', data);
    alert('ثبت‌نام موفقیت‌آمیز بود!');
  };

  return { register, errors, handleSubmit, onSubmit };
};

export const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: any) => {
    console.log('✅ فرم ارسال شد:', data);
    alert('ثبت‌نام موفقیت‌آمیز بود!');
  };

  return { register, errors, handleSubmit, onSubmit };
};
