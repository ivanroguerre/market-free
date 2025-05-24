import { Item } from "@/types";

export const getCategoriesFromItems = (items: Item[]): Item["category"][] => {
  const categoriesMap = new Map<number, Item["category"]>();
  items.forEach((item) => {
    if (!categoriesMap.has(item.category.id)) {
      categoriesMap.set(item.category.id, item.category);
    }
  });
  return Array.from(categoriesMap.values());
};
