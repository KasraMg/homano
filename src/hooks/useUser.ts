import { useQuery } from '@tanstack/react-query';
import { localBackendUrl } from '../constants';
import Cookies from 'js-cookie';

export const fetchMe = async () => {
  const token = Cookies.get('token');

  const response = await fetch(`${localBackendUrl}/getMe`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
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

export const useUser = () => {
  return useQuery({
    queryKey: ['me'],
    queryFn: fetchMe,
    enabled: true,
    retry: false,
  });
};
