import { useQuery } from '@tanstack/react-query';
import { localBackendUrl } from '../constants';

const useShop = () => {
  const fetchData = async () => {
    const response = await fetch(`${localBackendUrl}/products`);
    const data = await response.json();
    return data;
  };

  const { data, isPending } = useQuery({
    queryKey: ['shop'],
    queryFn: fetchData,
  });

  return { data, isPending };
};

export default useShop;
