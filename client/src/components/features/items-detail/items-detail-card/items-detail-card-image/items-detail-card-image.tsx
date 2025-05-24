import { HTMLAttributes, forwardRef } from "react";
import styles from "./items-detail-card-image.module.scss";

export type ItemsDetailCardImageProps = HTMLAttributes<HTMLDivElement>;

export const ItemsDetailCardImage = forwardRef<
  HTMLDivElement,
  ItemsDetailCardImageProps
>(({ className, ...props }, ref) => {
  return (
    <div
      className={`${styles.itemsDetailCardImage} ${className || ""}`}
      ref={ref}
      {...props}
    />
  );
});

ItemsDetailCardImage.displayName = "ItemsDetailCardImage";
