import Image from "next/image";

import { Button } from "@/components/ui";
import type { ItemDetail } from "@/services";
import {
  ItemsDetailCard,
  ItemsDetailCardDescription,
  ItemsDetailCardImage,
  ItemsDetailCardInfo,
} from "@/components/features/items-detail";
import styles from "./items-detail.module.scss";

interface ItemsDetailProps {
  itemDetail: ItemDetail;
}

export function ItemsDetail({ itemDetail }: ItemsDetailProps) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(itemDetail.price);

  const conditionText = itemDetail.condition === "new" ? "Nuevo" : "Usado";
  const soldText = `${itemDetail.soldQuantity} ${
    itemDetail.soldQuantity === 1 ? "vendido" : "vendidos"
  }`;

  return (
    <ItemsDetailCard>
      <ItemsDetailCardImage>
        <Image
          src={itemDetail.images[0]}
          alt={itemDetail.title}
          fill
          sizes="(max-width: 768px) 100%, 196px"
          className={styles.image}
        />
      </ItemsDetailCardImage>
      <ItemsDetailCardInfo className={styles.itemsDetailCardInfo}>
        <div>
          <span className={styles.conditionSold}>
            {conditionText} - {soldText}
          </span>
          <h1 className={styles.title}>{itemDetail.title}</h1>
        </div>
        <span className={styles.price}>{formattedPrice}</span>
        <Button className="buy-button">Comprar</Button>
      </ItemsDetailCardInfo>
      <ItemsDetailCardDescription className={styles.itemsDetailCardDescription}>
        <h2 className={styles.descriptionHeading}>Descripción del producto</h2>
        <p>{itemDetail.description}</p>
      </ItemsDetailCardDescription>
    </ItemsDetailCard>
  );
}
