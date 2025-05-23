"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Header } from "@/components/layout";
import { Input } from "@/components/ui";
import styles from "./search-items-header.module.scss";

export function SearchItemsHeader() {
  const [placeholder, setPlaceholder] = useState(
    "Buscar productos, marcas y más..."
  );

  // In mobile, the full placeholder is too long, so we need to shorten it
  useEffect(() => {
    const handleResize = () => {
      setPlaceholder(
        window.innerWidth < 768
          ? "Buscar..."
          : "Buscar productos, marcas y más..."
      );
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Header className={styles.header}>
      <div className={styles.container}>
        <Image src="/images/logo.png" alt="Logo" width={44} height={32} />
        <div className={styles.inputContainer}>
          <Input className={styles.searchInput} placeholder={placeholder} />
          <button className={styles.searchButton} type="button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 15C12.3137 15 15 12.3137 15 9C15 5.68629 12.3137 3 9 3C5.68629 3 3 5.68629 3 9C3 12.3137 5.68629 15 9 15Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 19L14.65 14.65"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </Header>
  );
}
