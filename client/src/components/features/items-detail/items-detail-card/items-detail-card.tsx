import { HTMLAttributes, forwardRef } from "react";
import styles from "./items-detail-card.module.scss";

export type ItemsDetailCardProps = HTMLAttributes<HTMLDivElement>;

export const ItemsDetailCard = forwardRef<HTMLDivElement, ItemsDetailCardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={`${styles.itemsDetailCard} ${className || ""}`}
        ref={ref}
        {...props}
      />
    );
  }
);

ItemsDetailCard.displayName = "ItemsDetailCard";
