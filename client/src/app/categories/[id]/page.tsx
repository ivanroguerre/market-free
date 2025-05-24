import { CategoriesEmptyState } from "@/components/features/categories";
import { ItemsListItem } from "@/components/features/items-list";
import { Stack, StackItem } from "@/components/layout";
import { marketFreeClient } from "@/services";
import Link from "next/link";
import styles from "./page.module.scss";

export default async function CategoriesPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const items = await marketFreeClient.searchProductsByCategory(id);
  const categoryName = items[0]?.categories?.[0]?.name || "";

  // TODO: add empty state and skeleton loader
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
}
