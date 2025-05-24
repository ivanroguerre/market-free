export interface Item {
  id: number;
  title: string;
  price: number;
  categories: {
    id: number;
    name: string;
  }[];
  images: string[];
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
}
