import type { Metadata } from "next";

import { HomePageContent } from "@/components/features/home";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Market Free | Buscar productos",
  description: "Busca productos en la plataforma de Market Free",
};

export default function HomePage() {
  return (
    <div className={styles.page}>
      <HomePageContent />
    </div>
  );
}
