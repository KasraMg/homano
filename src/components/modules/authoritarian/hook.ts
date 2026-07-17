import { yupResolver } from '@hookform/resolvers/yup';
import { useRegister as useRegisterEndpoint } from '../../../api/useRegister';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useLogin as useLoginEndpoint } from '../../../api/useLogin';

const registerSchema = yup.object({
  name: yup
    .string()
    .required('نام کاربری الزامی است')
    .min(3, 'حداقل ۳ کاراکتر وارد کنید'),
  phone: yup
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

export const useRegister = (endFunction?: () => void) => {
  const { mutation } = useRegisterEndpoint();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data: any) => {
    const obj = {
      phone: data.phone,
      name: data.name,
      password: data.password,
    };
    mutation.mutate(obj, {
      onSuccess() {
        endFunction?.();
      },
    });
  };

  return {
    register,
    errors,
    handleSubmit,
    isPending: mutation.isPending,
    onSubmit,
  };
};

const loginSchema = yup.object({
  phone: yup
    .string()
    .required('شماره موبایل الزامی است')
    .matches(/^09\d{9}$/, 'شماره موبایل معتبر نیست (مثلاً: 09123456789)'),
  password: yup
    .string()
    .required('رمز عبور الزامی است')
    .min(6, 'حداقل ۶ کاراکتر'),
});

export const useLogin = (endFunction?: () => void) => {
  const { mutation } = useLoginEndpoint();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: any) => {
    mutation.mutate(data, {
      onSuccess() {
        endFunction?.();
      },
    });
  };
  return {
    register,
    errors,
    isPending: mutation.isPending,
    handleSubmit,
    onSubmit,
  };
};
