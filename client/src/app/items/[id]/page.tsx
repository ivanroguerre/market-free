import { ItemsBreadcrumb } from "@/components/features/items-list";
import { ItemsDetail } from "@/components/features/items-detail";
import { marketFreeClient } from "@/services";
import styles from "./page.module.scss";

export default async function ItemPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const itemDetail = await marketFreeClient.getProductById(id);
  const categories = itemDetail.categories || [];

  return (
    <div className={styles.page}>
      <ItemsBreadcrumb items={categories} />
      <ItemsDetail itemDetail={itemDetail} />
    </div>
  );
}
