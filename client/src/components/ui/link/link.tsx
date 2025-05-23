import { LinkHTMLAttributes, forwardRef } from "react";
import NextLink from "next/link";
import styles from "./link.module.scss";

export type LinkProps = LinkHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, href, ...props }, ref) => {
    return (
      <NextLink
        href={href}
        className={`${styles.link} ${className || ""}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Link.displayName = "Link";
