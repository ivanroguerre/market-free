import { HTMLAttributes, forwardRef } from "react";
import styles from "./main.module.scss";

export type MainProps = HTMLAttributes<HTMLElement>;

export const Main = forwardRef<HTMLElement, MainProps>(
  ({ className, ...props }, ref) => {
    return (
      <main
        className={`${styles.main} ${className || ""}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Main.displayName = "Main";
