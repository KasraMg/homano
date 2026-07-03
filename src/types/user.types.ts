import { Product } from './product.types';

export interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: 'admin' | 'user' | 'moderator';
  cart: CartItem[];
  wishlist: WishlistItem[];
  nationalCode: string | null;
  birthDate: string | null;
  impersonatedBy: string | null;
  createdAt: string; //
  updatedAt: string;
  addresses: Address[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  color: string;
  _id: string;
}

export interface WishlistItem {
  _id: string;
  product: Product;
  createdAt?: string;
  updatedAt?: string;
}
export interface Address {
  _id: number;
  postalCode: string;
  address: string;
  city: {
    cityName: string;
    cityId: string;
    provinceId: string;
  };
  province: {
    provinceId: string;
    provinceName: string;
  };
}
