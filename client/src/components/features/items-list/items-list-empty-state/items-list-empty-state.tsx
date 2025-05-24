import { EmptyState, Link } from "@/components/ui";
import styles from "./items-list-empty-state.module.scss";

export function ItemsListEmptyState() {
  return (
    <EmptyState>
      <div className={styles.emptyStateContent}>
        <h3 className={styles.emptyStateTitle}>
          No se encontraron resultados para tu búsqueda
        </h3>
        <ul className={styles.emptyStateList}>
          <li className={styles.emptyStateItem}>
            Intenta con otros términos de búsqueda
          </li>
          <li className={styles.emptyStateItem}>
            Revisa la ortografía de las palabras
          </li>
        </ul>
        <Link href="/">Volver al inicio</Link>
      </div>
    </EmptyState>
  );
}
