import { Breadcrumb, BreadcrumbItem, Link } from "@/components/ui";
import type { Item } from "@/services";
import styles from "./items-breadcrumb.module.scss";

interface ItemsBreadcrumbProps {
  items: Item["categories"];
}

export function ItemsBreadcrumb({ items }: ItemsBreadcrumbProps) {
  return (
    <Breadcrumb>
      {items.map((item) => (
        <BreadcrumbItem key={item.id} className={styles.breadcrumbItem}>
          {/* TODO: add category page and redirect to it */}
          <Link href={`#`}>{item.name}</Link>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}
