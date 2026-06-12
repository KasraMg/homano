import { localBackendUrl } from '../constants';
import { useQuery } from '@tanstack/react-query';

const useLanding = () => {
  const fetchData = async () => {
    const response = await fetch(`${localBackendUrl}/landing`);
    const data = await response.json();
    return data;
  };

  const { data } = useQuery({
    queryKey: ['landing'],
    queryFn: fetchData,
  });

  return { data };
};

export default useLanding;
