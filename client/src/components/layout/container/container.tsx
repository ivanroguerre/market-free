import { HTMLAttributes, forwardRef } from "react";
import styles from "./container.module.scss";

export type ContainerProps = HTMLAttributes<HTMLDivElement>;

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={`${styles.container} ${className || ""}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";
