import { EmptyState, Link } from "@/components/ui";
import styles from "./items-detail-error-state.module.scss";

export function ItemsDetailErrorState() {
  return (
    <EmptyState>
      <div className={styles.errorStateContent}>
        <h3 className={styles.errorStateTitle}>
          Ha sucedido un error al cargar el producto
        </h3>
        <ul className={styles.errorStateList}>
          <li className={styles.errorStateItem}>
            Verifica que el producto exista
          </li>
          <li className={styles.errorStateItem}>Intenta de nuevo más tarde</li>
          <li className={styles.errorStateItem}>Intenta con otro producto</li>
        </ul>
        <Link href="/">Volver al inicio</Link>
      </div>
    </EmptyState>
  );
}
