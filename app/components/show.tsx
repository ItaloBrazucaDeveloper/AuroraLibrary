import { Fragment, ReactNode } from "react";

type ShowProps = {
  condition: boolean;
  children: ReactNode;
  fallback?: ReactNode;
}

export function Show({
  condition,
  children,
  fallback = <Fragment />,
}: ShowProps) {
  if (condition) {
    return children;
  }
  return fallback;
}
