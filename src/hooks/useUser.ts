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

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result;
};

const changePassword = async (data: {
  currentPassword: string;
  newPassword: string;
}) => {
  const response = await fetch(`${localBackendUrl}/changePassword`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('token')}`,
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result;
};

export const useUser = () => {
  const editUsermutation = useMutation({
    mutationFn: (data: any) => editUser(data),
    mutationKey: ['editUser'],
    onSuccess(data) {
      toast.success(data.message);
    },
    onError(data) {
      toast.error(data.message);
    },
  });

  const changePasswordMutation = useMutation({
    mutationFn: (data: any) => changePassword(data),
    mutationKey: ['changePassword'],
    onSuccess(data) {
      toast.success(data.message);
      Cookies.set('token', data.token);
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
  return { data, isPending, editUsermutation, changePasswordMutation };
};
