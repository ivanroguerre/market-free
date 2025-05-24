import { ItemsDetail } from "@/components/features/items-detail";
import styles from "./page.module.scss";

const item = {
  author: {
    name: "Juan",
    lastname: "Pérez",
  },
  item: {
    id: "MLA111222",
    title: "iPhone 13 128GB",
    price: {
      currency: "ARS",
      amount: 800000,
      decimals: 0,
    },
    picture: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    condition: "new",
    free_shipping: true,
    sold_quantity: 23,
    description: "El nuevo iPhone 13 con increíble rendimiento y cámara.",
  },
};

export default function ItemPage() {
  return (
    <div className={styles.page}>
      <ItemsDetail item={item.item} author={item.author} />
    </div>
  );
}
