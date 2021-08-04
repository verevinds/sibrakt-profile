import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { Children,  PropsWithChildren,  ReactElement } from "react";

interface IActiveLink {
  href: string;
  children: ReactElement;
  activeClassName?: string;
  exec?: boolean;
}
const ActiveLink= ({
  children,
  activeClassName,
  exec = false,
  ...props
}: PropsWithChildren<IActiveLink>): JSX.Element => {
  const { href: pathname } = props;
  const { asPath } = useRouter();

  const child = Children.only(children);
  const childClassName = child.props.className || "";

  let className;

  if (exec) {
    className =
      asPath === pathname
        ? `${childClassName} ${activeClassName}`.trim()
        : childClassName;
  } else {
    className = asPath.startsWith(pathname)
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;
  }

  return (
    <NextLink {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </NextLink>
  );
};

export default ActiveLink;
