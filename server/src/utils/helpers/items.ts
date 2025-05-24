import type { Item, ItemDetail } from "@/types";
import type { Product } from "@/services/api";

export function getCategoriesFromProducts(
  products: Product[]
): Product["category"][] {
  const categoriesMap = new Map<number, Product["category"]>();
  products.forEach((product) => {
    if (!categoriesMap.has(product.category.id)) {
      categoriesMap.set(product.category.id, product.category);
    }
  });
  return Array.from(categoriesMap.values());
}

export function transformToItem(
  product: Product,
  categories: Product["category"][]
): Item {
  return {
    id: product.id,
    title: product.title,
    price: product.price,
    categories: categories.map((category) => ({
      id: category.id,
      name: category.name,
    })),
    images: product.images,
  };
}

export function transformToItemDetail(
  product: Product,
  categories: Product["category"][]
): ItemDetail {
  return {
    id: product.id,
    title: product.title,
    price: product.price,
    description: product.description,
    categories: categories.map((category) => ({
      id: category.id,
      name: category.name,
    })),
    images: product.images,
  };
}
