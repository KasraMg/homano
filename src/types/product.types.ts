export type Product = {
  category: { slug: string; name: string };
  slug: string;
  code: number;
  createdAt: string;
  images: string[];
  name: string;
  off: number;
  price: number;
  priceWithoutOff: number;
  star: number;
  colors: Array<{
    _id: string;
    name: string;
    code: string;
  }>;
  description: string;
  details: Array<{
    key: string;
    value: string;
    _id: string;
  }>;
  updatedAt: string;
  __v: number;
};
