"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Header } from "@/components/layout";
import { Input } from "@/components/form";
import styles from "./search-items-header.module.scss";

export function SearchItemsHeader() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/items?q=${encodeURIComponent(searchTerm.trim())}`);
  };

  return (
    <Header className={styles.header}>
      <div className={styles.container}>
        <Image src="/images/logo.png" alt="Logo" width={44} height={32} />
        <form className={styles.inputContainer} onSubmit={handleSubmit}>
          <Input 
            className={styles.searchInput} 
            placeholder={placeholder} 
            name="search"
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className={styles.searchButton} type="submit">
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
        </form>
      </div>
    </Header>
  );
}
