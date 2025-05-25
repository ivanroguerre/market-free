import styles from "./home-page-content.module.scss";

export function HomePageContent() {
  return (
    <div className={styles.homePageContent}>
      <h1 className={styles.title}>Bienvenido a Market Free</h1>

      <section className={styles.instructions}>
        <h2>¿Cómo buscar productos?</h2>
        <div className={styles.instructionBlock}>
          <h3>Búsqueda de productos</h3>
          <p>
            Utiliza el formulario de búsqueda en la parte superior para
            encontrar productos específicos. Actualmente contamos con un
            catálogo reducido de productos, pero estamos trabajando en
            expandirlo. Puedes intentar con búsquedas mayoritariamente en
            inglés. Sabemos que palabras como: <strong>shirt</strong>,{" "}
            <strong>shoes</strong> o <strong>watch</strong> funcionan bien.
          </p>
        </div>

        <div className={styles.instructionBlock}>
          <h3>Navegación por categorías</h3>
          <p>
            La navegación por migas de pan (breadcrumb) te permite explorar
            productos por categorías. Cada nivel te muestra subcategorías más
            específicas, ayudándote a encontrar exactamente lo que buscas.
          </p>
        </div>
      </section>
    </div>
  );
}
