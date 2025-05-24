import { EmptyState, Link } from "@/components/ui";
import styles from "./categories-empty-state.module.scss";

interface CategoriesEmptyStateProps {
  wrongCategory?: boolean;
}

export function CategoriesEmptyState({
  wrongCategory = false,
}: CategoriesEmptyStateProps) {
  return (
    <EmptyState>
      <div className={styles.emptyStateContent}>
        <h3 className={styles.emptyStateTitle}>
          {wrongCategory
            ? "No se encontró la categoría"
            : "No se encontraron resultados para la categoría"}
        </h3>
        <ul className={styles.emptyStateList}>
          <li className={styles.emptyStateItem}>Intenta con otra categoría</li>
        </ul>
        <Link href="/">Volver al inicio</Link>
      </div>
    </EmptyState>
  );
}
