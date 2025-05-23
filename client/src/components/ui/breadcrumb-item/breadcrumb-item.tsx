import { HTMLAttributes, forwardRef } from "react";
import styles from "./breadcrumb-item.module.scss";

export type BreadcrumbItemProps = HTMLAttributes<HTMLDivElement>;

export const BreadcrumbItem = forwardRef<HTMLDivElement, BreadcrumbItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={`${styles.breadcrumbItem} ${className || ""}`}
        ref={ref}
        {...props}
      />
    );
  }
);

BreadcrumbItem.displayName = "BreadcrumbItem";
