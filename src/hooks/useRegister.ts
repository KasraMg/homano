import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { localBackendUrl } from '../constants';
import { toast } from 'sonner';
import Cookies from 'js-cookie';

interface RegisterRequest {
  phone: string;
  password: string;
}

interface RegisterResponse {
  success: boolean;
  message: string;
  token: string;
  user: {
    id: number;
    phone: string;
    password: string;
  };
}

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

export const registerUser = async (
  data: RegisterRequest,
): Promise<RegisterResponse> => {
  const response = await fetch(`${localBackendUrl}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'خطا در ارتباط با سرور');
  }

  return response.json();
};

export const useRegister = (endFunction?: () => void) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: RegisterRequest) => registerUser(data),
    onSuccess: (data) => {
      Cookies.set('token', data.token);
      toast.success(data.message);
      queryClient.refetchQueries({ queryKey: ['me'] });
      endFunction?.();
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

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
    mutation.mutate(obj);
  };

  return { register, errors, handleSubmit, onSubmit };
};
