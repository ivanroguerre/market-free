import { HTMLAttributes, forwardRef } from "react";
import styles from "./stack.module.scss";

export type StackProps = HTMLAttributes<HTMLDivElement>;

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={`${styles.stack} ${className || ""}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Stack.displayName = "Stack";
