import Link from "next/link";

import {
  ItemsBreadcrumb,
  ItemsListItem,
  ItemsListEmptyState,
  ItemsListErrorState,
} from "@/components/features/items-list";
import { Stack, StackItem } from "@/components/layout";
import { marketFreeClient } from "@/services";
import styles from "./page.module.scss";

export default async function ItemsPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const { q: query = "" } = await searchParams;

  try {
    const items = await marketFreeClient.searchProductsByName(query);
    const categories = items[0]?.categories || [];

    return (
      <div className={styles.page}>
        {items.length > 0 ? (
          <>
            <ItemsBreadcrumb categories={categories} />
            <Stack role="list">
              {items.map((item, index) => (
                <StackItem key={item.id} role="listitem">
                  <Link href={`/items/${item.id}`}>
                    {/* This is a heuristic to prioritize the first 4 items as those will probably be the first visible items */}
                    <ItemsListItem item={item} priority={index < 4} />
                  </Link>
                </StackItem>
              ))}
            </Stack>
          </>
        ) : (
          <ItemsListEmptyState />
        )}
      </div>
    );
  } catch {
    return (
      <div className={styles.page}>
        <ItemsListErrorState />
      </div>
    );
  }
}
