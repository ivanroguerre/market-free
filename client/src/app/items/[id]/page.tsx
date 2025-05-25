import type { Metadata } from "next";

import { ItemsBreadcrumb } from "@/components/features/items-list";
import {
  ItemsDetail,
  ItemsDetailErrorState,
} from "@/components/features/items-detail";
import { marketFreeClient } from "@/services";
import styles from "./page.module.scss";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = await params;

  try {
    const itemDetail = await marketFreeClient.getProductById(id);
    return {
      title: `Market Free - ${itemDetail.title}`,
      description: itemDetail.description,
    };
  } catch {
    return {
      title: `Market Free - Producto`,
      description: "Producto no encontrado",
    };
  }
}

export default async function ItemPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  try {
    const itemDetail = await marketFreeClient.getProductById(id);
    const categories = itemDetail.categories || [];

    return (
      <div className={styles.page}>
        <ItemsBreadcrumb categories={categories} />
        <ItemsDetail itemDetail={itemDetail} />
      </div>
    );
  } catch {
    return (
      <div className={styles.page}>
        <ItemsDetailErrorState />
      </div>
    );
  }
}
