import { HTMLAttributes, forwardRef } from "react";
import styles from "./items-list-card.module.scss";

export type ItemsListCardProps = HTMLAttributes<HTMLDivElement>;

export const ItemsListCard = forwardRef<HTMLDivElement, ItemsListCardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={`${styles.itemsListCard} ${className || ""}`}
        ref={ref}
        {...props}
      />
    );
  }
);

ItemsListCard.displayName = "ItemsListCard";