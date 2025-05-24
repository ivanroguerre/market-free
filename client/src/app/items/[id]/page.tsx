import { ItemsDetailCard } from "@/components/features/items-detail";
import styles from "./page.module.scss";

export default function ItemPage() {
  return (
    <div className={styles.page}>
      <ItemsDetailCard>
        <div>
          Hola
        </div>
        <div>
          Mundo
        </div>
        <div>
          Cruel
        </div>
      </ItemsDetailCard>
    </div>
  );
}
