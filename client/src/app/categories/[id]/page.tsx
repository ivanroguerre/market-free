import Link from "next/link";

import {
  CategoriesEmptyState,
  CategoriesErrorState,
} from "@/components/features/categories";
import { ItemsListItem } from "@/components/features/items-list";
import { Stack, StackItem } from "@/components/layout";
import { marketFreeClient } from "@/services";
import styles from "./page.module.scss";

export default async function CategoriesPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  try {
    const items = await marketFreeClient.searchProductsByCategory(id);
    const categoryName = items[0]?.categories?.[0]?.name || "";

    return (
      <div className={styles.page}>
        {items.length > 0 ? (
          <>
            <h1 className={styles.categoryName}>Categoría {categoryName}</h1>
            <Stack>
              {items.map((item, index) => (
                <StackItem key={item.id}>
                  <Link href={`/items/${item.id}`}>
                    {/* This is a heuristic to prioritize the first 4 items as those will probably be the first visible items */}
                    <ItemsListItem item={item} priority={index < 4} />
                  </Link>
                </StackItem>
              ))}
            </Stack>
          </>
        ) : (
          <CategoriesEmptyState />
        )}
      </div>
    );
  } catch {
    return (
      <div className={styles.page}>
        <CategoriesErrorState />
      </div>
    );
  }
}
