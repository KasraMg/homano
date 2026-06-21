import { localBackendUrl } from '../constants';
import { useQuery } from '@tanstack/react-query';

const useProduct = (productId: number) => {
  const fetchData = async () => {
    const res = await fetch(`${localBackendUrl}/product/${productId}`);
    const data = await res.json();
    return data;
  };

  const { data, isPending } = useQuery({
    queryKey: ['product', productId],
    queryFn: fetchData,
  });
  return { data, isPending };
};

export default useProduct;
