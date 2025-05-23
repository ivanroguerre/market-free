import { HTMLAttributes, forwardRef } from "react";
import styles from "./items-list-card-content.module.scss";

export type ItemsListCardContentProps = HTMLAttributes<HTMLDivElement>;

export const ItemsListCardContent = forwardRef<HTMLDivElement, ItemsListCardContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={`${styles.itemsListCardContent} ${className || ""}`}
        ref={ref}
        {...props}
      />
    );
  }
);

ItemsListCardContent.displayName = "ItemsListCardContent";