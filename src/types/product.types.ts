export type ProductCardProps = {
  id: string | number;
  image: string;
  title: string;
  color?: string;
  price: string | number;
  originalPrice?: string;
  isNew?: boolean;
  discount?: string;
  description?: string;
  measurements?: {
    width: string;
    height: string;
    length: string;
    weight: string;
    packageCount: number;
  };
}