import { ItemsBreadcrumb } from "@/components/features/items-list";
import styles from "./page.module.scss";

const categories = ["Tecnología", "Celulares", "Smartphones"];

export default function ItemsPage() {
  return (
    <div className={styles.page}>
      <ItemsBreadcrumb items={categories} />
    </div>
  );
}
