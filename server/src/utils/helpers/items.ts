import type { Product } from "@/services/api";

export const getCategoriesFromItems = (
  items: Product[]
): Product["category"][] => {
  const categoriesMap = new Map<number, Product["category"]>();
  items.forEach((item) => {
    if (!categoriesMap.has(item.category.id)) {
      categoriesMap.set(item.category.id, item.category);
    }
  });
  return Array.from(categoriesMap.values());
};
