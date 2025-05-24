import { ItemsBreadcrumb, ItemsListItem } from "@/components/features/items-list";
import { Stack, StackItem } from "@/components/layout";
import styles from "./page.module.scss";

const categories = ["Tecnología", "Celulares", "Smartphones"];
const items = {
  author: {
    name: "Juan",
    lastname: "Pérez",
  },
  categories: ["Tecnología", "Celulares", "Smartphones"],
  items: [
    {
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
    },
    {
      id: "MLA333444",
      title: "Samsung Galaxy S22",
      price: {
        currency: "ARS",
        amount: 750000,
        decimals: 0,
      },
      picture: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      condition: "new",
      free_shipping: false,
    },
    {
      id: "MLA555666",
      title: "Fjallraven - Foldsack No. 1 Backpack",
      price: {
        currency: "ARS",
        amount: 109950,
        decimals: 0,
      },
      picture: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      condition: "new",
      free_shipping: true,
    },
    {
      id: "MLA777888",
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: {
        currency: "ARS",
        amount: 22300,
        decimals: 0,
      },
      picture: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      condition: "new",
      free_shipping: false,
    }
  ],
};

export default function ItemsPage() {
  return (
    <div className={styles.page}>
      <ItemsBreadcrumb items={categories} />
      <Stack>
        {items.items.map((item) => (
          <StackItem key={item.id}>
            <ItemsListItem item={item} />
          </StackItem>
        ))}
      </Stack>
    </div>
  );
}
