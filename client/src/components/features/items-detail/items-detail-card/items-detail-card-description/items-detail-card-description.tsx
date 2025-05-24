import { HTMLAttributes, forwardRef } from "react";
import styles from "./items-detail-card-description.module.scss";

export type ItemsDetailCardDescriptionProps = HTMLAttributes<HTMLDivElement>;

export const ItemsDetailCardDescription = forwardRef<
  HTMLDivElement,
  ItemsDetailCardDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <div
      className={`${styles.itemsDetailCardDescription} ${className || ""}`}
      ref={ref}
      {...props}
    />
  );
});

ItemsDetailCardDescription.displayName = "ItemsDetailCardDescription"; 