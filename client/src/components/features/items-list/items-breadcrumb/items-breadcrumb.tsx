import { Breadcrumb, BreadcrumbItem, Link } from "@/components/ui";
import type { Item } from "@/services";
import styles from "./items-breadcrumb.module.scss";

interface ItemsBreadcrumbProps {
  categories: Item["categories"];
}

export function ItemsBreadcrumb({ categories }: ItemsBreadcrumbProps) {
  return (
    <Breadcrumb>
      {categories.map((category) => (
        <BreadcrumbItem key={category.id} className={styles.breadcrumbItem}>
          <Link href={`/categories/${category.id}`}>{category.name}</Link>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}
