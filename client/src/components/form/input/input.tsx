import { InputHTMLAttributes, forwardRef } from "react";
import styles from "./input.module.scss";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={`${styles.input} ${className || ""}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
