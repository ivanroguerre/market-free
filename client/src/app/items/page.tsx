import {
  ItemsBreadcrumb,
  ItemsListItem,
} from "@/components/features/items-list";
import { Stack, StackItem } from "@/components/layout";
import { marketFreeClient } from "@/services";
import Link from "next/link";
import styles from "./page.module.scss";

export default async function ItemsPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const { q: query = "" } = await searchParams;
  const items = await marketFreeClient.searchProductsByName(query);

  // Extract categories from the first item if available
  const categories = items[0]?.categories.map((cat) => cat.name) || [];

  return (
    <div className={styles.page}>
      <ItemsBreadcrumb items={categories} />
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
    </div>
  );
}
