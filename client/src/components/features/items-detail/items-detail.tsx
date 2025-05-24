import Image from "next/image";

import { Button } from "@/components/ui";
import {
  ItemsDetailCard,
  ItemsDetailCardDescription,
  ItemsDetailCardImage,
  ItemsDetailCardInfo,
} from "@/components/features/items-detail";
import styles from "./items-detail.module.scss";

interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
}

interface Author {
  name: string;
  lastname: string;
}

interface ItemsDetailProps {
  author: Author;
  item: Item;
}

export function ItemsDetail({ item }: ItemsDetailProps) {
  const formatPrice = (price: Price) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: price.currency,
      minimumFractionDigits: price.decimals,
      maximumFractionDigits: price.decimals,
    }).format(price.amount);
  };

  const conditionText = item.condition === "new" ? "Nuevo" : "Usado";
  const soldText = `${item.sold_quantity} ${
    item.sold_quantity === 1 ? "vendido" : "vendidos"
  }`;

  return (
    <ItemsDetailCard>
      <ItemsDetailCardImage>
        <Image
          src={item.picture}
          alt={item.title}
          fill
          //   sizes="(max-width: 768px) 160px, 196px"
          className={styles.image}
        />
      </ItemsDetailCardImage>
      <ItemsDetailCardInfo className={styles.itemsDetailCardInfo}>
        <div>
          <span className={styles.conditionSold}>
            {conditionText} - {soldText}
          </span>
          <h1 className={styles.title}>{item.title}</h1>
        </div>
        <span className={styles.price}>{formatPrice(item.price)}</span>
        <Button className="buy-button">Comprar</Button>
      </ItemsDetailCardInfo>
      <ItemsDetailCardDescription className={styles.itemsDetailCardDescription}>
        <h2 className={styles.descriptionHeading}>Descripción del producto</h2>
        <p>{item.description}</p>
      </ItemsDetailCardDescription>
    </ItemsDetailCard>
  );
}
