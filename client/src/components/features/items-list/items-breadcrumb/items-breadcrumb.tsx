import { Breadcrumb, BreadcrumbItem } from "@/components/ui";
import styles from "./items-breadcrumb.module.scss";

interface ItemsBreadcrumbProps {
  items: string[];
}

export function ItemsBreadcrumb({ items }: ItemsBreadcrumbProps) {
  return (
    <Breadcrumb>
      {items.map((item, index) => (
        <BreadcrumbItem key={index} className={styles.breadcrumbItem}>{item}</BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}