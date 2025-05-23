import { HTMLAttributes, forwardRef } from "react";
import styles from "./header.module.scss";

export type HeaderProps = HTMLAttributes<HTMLElement>;

export const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <header
        className={`${styles.header} ${className || ""}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Header.displayName = "Header";