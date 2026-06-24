import { useMutation, useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { localBackendUrl } from '../constants';
import { toast } from 'sonner';

const createFeedback = async (
  productCode: number,
  body: { comment: string; rating: number },
) => {
  const response = await fetch(
    localBackendUrl + `/createFeedback/${productCode}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${Cookies.get('token')}`,
      },

      body: JSON.stringify(body),
    },
  );
  const data = await response.json();
  return data;
};

const fetchData = async (productCode: number) => {
  const response = await fetch(
    localBackendUrl + `/getProductFeedbacks/${productCode}`,
  );
  const data = await response.json();
  return data;
};

const useFeedback = (productCode?: number) => {
  const { data, isPending } = useQuery({
    queryKey: ['product-feedbacks'],
    queryFn: () => fetchData(Number(productCode)),
    enabled: !!productCode,
  });

  const createMutation = useMutation({
    mutationFn: (params: {
      productCode: number;
      data: { comment: string; rating: number };
    }) => createFeedback(params.productCode, params.data),

    onSuccess: (data) => {
      toast.success(data.message || 'نظر شما با موفقیت ثبت شد');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'مشکلی در ثبت نظر پیش آمد');
    },
  });

  return { createMutation, data, isPending };
};

export default useFeedback;
