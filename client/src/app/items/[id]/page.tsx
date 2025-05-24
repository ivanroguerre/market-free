import {
  ItemsDetailCard,
  ItemsDetailCardDescription,
  ItemsDetailCardImage,
  ItemsDetailCardInfo,
} from "@/components/features/items-detail";
import styles from "./page.module.scss";

export default function ItemPage() {
  return (
    <div className={styles.page}>
      <ItemsDetailCard>
        <ItemsDetailCardImage>Hola</ItemsDetailCardImage>
        <ItemsDetailCardInfo>Mundo</ItemsDetailCardInfo>
        <ItemsDetailCardDescription>Cruel</ItemsDetailCardDescription>
      </ItemsDetailCard>
    </div>
  );
}
