import { useMutation, useQuery } from '@tanstack/react-query';
import { localBackendUrl } from '../constants';
import Cookies from 'js-cookie';
import { toast } from 'sonner';

export const fetchMe = async () => {
  const response = await fetch(`${localBackendUrl}/getMe`, {
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
    },
  });
  if (!response.ok) {
    if (response.status === 401) {
      Cookies.remove('token');
      throw new Error('Unauthorized');
    }
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'خطا در دریافت اطلاعات کاربر');
  }
  return response.json();
};

const editUser = async (data: {
  email?: string;
  phone?: string;
  birthDate?: string;
  name?: string;
  nationalCode?: string;
}) => {
  const response = await fetch(`${localBackendUrl}/editUser`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('token')}`,
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    if (response.status === 401) {
      Cookies.remove('token');
      throw new Error('Unauthorized');
    }
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'خطا در دریافت اطلاعات کاربر');
  }
  return response.json();
};

export const useUser = () => {
  const mutation = useMutation({
    mutationFn: (data: any) => editUser(data),
    mutationKey: ['editUser'],
    onSuccess(data) {
      toast.success(data.message);
    },
    onError(data) {
      toast.error(data.message);
    },
  });
  const { data, isPending } = useQuery({
    queryKey: ['me'],
    queryFn: fetchMe,
    enabled: true,
    retry: false,
  });
  return { data, isPending, mutation };
};
