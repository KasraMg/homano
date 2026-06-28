import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { localBackendUrl } from '../constants';
import Cookies from 'js-cookie';

const addToCart = async (args: { color: string; code: number }) => {
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

const updateItemQuantity = async (args: { id: string; action: string }) => {
  const response = await fetch(`${localBackendUrl}/updateCartItemQuantity`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${Cookies.get('token')}`,
    },
    body: JSON.stringify(args),
  });
  const data = await response.json();
  return data;
};
const removeFromCart = async (id: string) => {
  const response = await fetch(`${localBackendUrl}/removeFromCart/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${Cookies.get('token')}`,
    },
  });
  const data = await response.json();
  return data;
};

const useOrder = () => {
  const removeItemMutation = useMutation({
    mutationFn: (id: string) => removeFromCart(id),
    mutationKey: ['remove-order'],
    onSuccess: (data) => {
      toast.success(data.message);
    },
  });
  const updateQuantityMutation = useMutation({
    mutationFn: (data: { id: string; action: string }) =>
      updateItemQuantity(data),
    mutationKey: ['update-order'],
    onSuccess: (data) => {
      toast.success(data.message);
    },
  });
  const mutation = useMutation({
    mutationFn: (data: { color: string; code: number }) => addToCart(data),
    mutationKey: ['create-order'],
    onSuccess: (data) => {
      toast.success(data.message);
    },
  });
  return { mutation, updateQuantityMutation, removeItemMutation };
};

export default useOrder;
