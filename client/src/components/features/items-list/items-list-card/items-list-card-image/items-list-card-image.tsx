import { HTMLAttributes, forwardRef } from "react";
import styles from "./items-list-card-image.module.scss";

export type ItemsListCardImageProps = HTMLAttributes<HTMLDivElement>;

export const ItemsListCardImage = forwardRef<HTMLDivElement, ItemsListCardImageProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={`${styles.itemsListCardImage} ${className || ""}`}
        ref={ref}
        {...props}
      />
    );
  }
);

ItemsListCardImage.displayName = "ItemsListCardImage";