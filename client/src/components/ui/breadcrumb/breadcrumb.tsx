import { HTMLAttributes, forwardRef } from "react";

export type BreadcrumbProps = HTMLAttributes<HTMLElement>;

export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  (props, ref) => {
    return <nav ref={ref} {...props} />;
  }
);

Breadcrumb.displayName = "Breadcrumb";
