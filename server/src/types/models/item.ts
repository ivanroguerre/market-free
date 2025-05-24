export interface Item {
  id: number;
  title: string;
  price: number;
  categories: {
    id: number;
    name: string;
  }[];
  images: string[];
  freeShipping: boolean;
}

export interface ItemDetail {
  id: number;
  title: string;
  price: number;
  description: string;
  categories: {
    id: number;
    name: string;
  }[];
  images: string[];
  freeShipping: boolean;
  soldQuantity: number;
  condition: "new" | "used";
}
