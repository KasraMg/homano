import { localBackendUrl } from '../constants';
import { useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';

const fetchData = async (productId: number) => {
  const headers: { authorization?: string } = {};
  if (Cookies.get('token')) {
    headers.authorization = `Bearer ${Cookies.get('token')}`;
  }
  const res = await fetch(`${localBackendUrl}/product/${productId}`, {
    headers,
  });
  const data = await res.json();
  return data;
};

const useProduct = (productId: number) => {
  const { data, isPending } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => fetchData(productId),
  });
  return { data, isPending };
};

export default useProduct;
