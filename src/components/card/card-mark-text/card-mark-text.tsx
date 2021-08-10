import type { HTMLAttributes, PropsWithChildren } from "react";
import cn from "classnames";

import styles from "./card-mark-text.module.css";

export type Props = {
  icon: JSX.Element;
} & HTMLAttributes<HTMLDivElement>;

export const CardMarkText = ({
  icon,
  children,
  className,
  ...restProps
}: PropsWithChildren<Props>): JSX.Element => (
  <div {...restProps} className={cn(styles["CardMarkText"], className)}>
    <span className={styles["CardMarkText__icon"]}>{icon}</span>
    <span>{children}</span>
  </div>
);

export default CardMarkText;
