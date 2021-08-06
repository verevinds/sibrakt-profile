import type { HTMLAttributes, PropsWithChildren } from "react";
import cn from "classnames";

import styles from "./wallet-card-mark-text.module.css";

export type Props = {
  icon: JSX.Element;
} & HTMLAttributes<HTMLDivElement>;

export const WalletCardMarkText = ({
  icon,
  children,
  className,
  ...restProps
}: PropsWithChildren<Props>): JSX.Element => (
  <div {...restProps} className={cn(styles["WalletCardMarkText"], className)}>
    <span className={styles["WalletCardMarkText__icon"]}>{icon}</span>
    <span>{children}</span>
  </div>
);

export default WalletCardMarkText;
