import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement, cloneElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({
  children,
  activeClassName,
  ...props
}: ActiveLinkProps) {
  const { asPath } = useRouter();
  const className = asPath === props.href ? activeClassName : "";
  return (
    <Link legacyBehavior {...props} passHref>
      {cloneElement(children, {
        // Alterando comportamento do compotonente
        className,
      })}
    </Link>
  );
}
