import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { localBackendUrl } from '../constants';
import Cookies from 'js-cookie';

const addToOrder = async (args: { color: string; code: number }) => {
  console.log(`${localBackendUrl}/addToCart`);
  const response = await fetch(`${localBackendUrl}/addToCart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${Cookies.get('token')}`,
    },
    body: JSON.stringify(args),
  });
  const data = await response.json();
  return data;
};
const useOrder = () => {
  const mutation = useMutation({
    mutationFn: (data: { color: string; code: number }) => addToOrder(data),
    mutationKey: ['create-order'],
    onSuccess: (data) => {
      console.log(data);

      toast.success(data.message);
    },
  });
  return { mutation };
};

export default useOrder;
