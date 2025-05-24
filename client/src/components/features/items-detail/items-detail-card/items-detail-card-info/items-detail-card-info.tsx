import { HTMLAttributes, forwardRef } from "react";
import styles from "./items-detail-card-info.module.scss";

export type ItemsDetailCardInfoProps = HTMLAttributes<HTMLDivElement>;

export const ItemsDetailCardInfo = forwardRef<
  HTMLDivElement,
  ItemsDetailCardInfoProps
>(({ className, ...props }, ref) => {
  return (
    <div
      className={`${styles.itemsDetailCardInfo} ${className || ""}`}
      ref={ref}
      {...props}
    />
  );
});

ItemsDetailCardInfo.displayName = "ItemsDetailCardInfo"; 