import { HTMLAttributes, forwardRef } from "react";
import Image from "next/image";

import styles from "./empty-state.module.scss";
export type EmptyStateProps = HTMLAttributes<HTMLDivElement>;

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={`${styles.emptyState} ${className || ""}`}
        ref={ref}
        {...props}
      >
        <div className={styles.emptyStateContent}>
          <Image
            src="/images/not-found.svg"
            alt="Empty state"
            width={80}
            height={80}
          />
          <div>{children}</div>
        </div>
      </div>
    );
  }
);

EmptyState.displayName = "EmptyState";
