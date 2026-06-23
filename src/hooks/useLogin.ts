import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { localBackendUrl } from '../constants';
import { toast } from 'sonner';
import Cookies from 'js-cookie';

interface LoginRequest {
  phone: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
  token: string;
  user: {
    id: number;
    phone: string;
    password: string;
  };
}

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

export const loginUser = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await fetch(`${localBackendUrl}/auth/login`, {
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

export const useLogin = (endFunction?: () => void) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: LoginRequest) => loginUser(data),
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
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: any) => {
    mutation.mutate(data);
  };

  return { register, errors, handleSubmit, onSubmit };
};
