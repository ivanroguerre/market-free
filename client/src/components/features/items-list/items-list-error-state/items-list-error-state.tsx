import { EmptyState, Link } from "@/components/ui";
import styles from "./items-list-error-state.module.scss";

export function ItemsListErrorState() {
  return (
    <EmptyState>
      <div className={styles.errorStateContent}>
        <h3 className={styles.errorStateTitle}>
          Ha sucedido un error al cargar los productos
        </h3>
        <ul className={styles.errorStateList}>
          <li className={styles.errorStateItem}>
            Intenta con otros términos de búsqueda
          </li>
          <li className={styles.errorStateItem}>Intenta de nuevo más tarde</li>
          <li className={styles.errorStateItem}>
            Intenta con otro término de búsqueda
          </li>
        </ul>
        <Link href="/">Volver al inicio</Link>
      </div>
    </EmptyState>
  );
}
