import { HTMLAttributes, forwardRef } from "react";
import styles from "./stack-item.module.scss";

export type StackItemProps = HTMLAttributes<HTMLDivElement>;

export const StackItem = forwardRef<HTMLDivElement, StackItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={`${styles.stackItem} ${className || ""}`}
        ref={ref}
        {...props}
      />
    );
  }
);

StackItem.displayName = "StackItem";
