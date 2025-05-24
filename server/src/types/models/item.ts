export interface Item {
  id: number;
  title: string;
  price: number;
  category: {
    id: number;
    name: string;
  };
  images: string[];
}

export interface ItemDetail {
  id: number;
  title: string;
  price: number;
  description: string;
  category?: {
    id: number;
    name: string;
  };
  images: string[];
}

export interface TransformedItem {
  id: number;
  title: string;
  price: number;
  categories: {
    id: number;
    name: string;
  }[];
  images: string[];
}

export interface TransformedItemDetail {
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
