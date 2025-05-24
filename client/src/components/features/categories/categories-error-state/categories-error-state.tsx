import { EmptyState, Link } from "@/components/ui";
import styles from "./categories-error-state.module.scss";

export function CategoriesErrorState() {
  return (
    <EmptyState>
      <div className={styles.errorStateContent}>
        <h3 className={styles.errorStateTitle}>
          Ha sucedido un error al cargar la categoría
        </h3>
        <ul className={styles.errorStateList}>
          <li className={styles.errorStateItem}>
            Verifica que la categoría exista
          </li>
          <li className={styles.errorStateItem}>Intenta de nuevo más tarde</li>
          <li className={styles.errorStateItem}>Intenta con otra categoría</li>
        </ul>
        <Link href="/">Volver al inicio</Link>
      </div>
    </EmptyState>
  );
}
