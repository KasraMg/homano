import { Product } from "./product.types";

export interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: "admin" | "user" | "moderator";  
  cart: CartItem[];
  wishlist: WishlistItem[];
  impersonatedBy: string | null;
  createdAt: string; //  
  updatedAt: string;  
}

export interface CartItem { 
  product: Product;  
  quantity: number; 
  color:string
}

export interface WishlistItem {
  _id: string;
  product: string; 
  createdAt?: string;
  updatedAt?: string;
}