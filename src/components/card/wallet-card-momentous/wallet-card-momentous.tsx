import type { PropsWithChildren, HTMLAttributes } from "react";
import cn from "classnames";

import styles from "./wallet-card-momentous.module.css";

export type Props = {
  subText?: string;
} & HTMLAttributes<HTMLDivElement>;

export const WalletCardMomentous = ({
  subText,
  children,
  className,
  ...restProps
}: PropsWithChildren<Props>): JSX.Element => (
  <div {...restProps} className={cn(styles["WalletCardMomentous"], className)}>
    <span className={styles["WalletCardMomentous_highlight"]}>{children}</span>{" "}
    {subText && (
      <span className={styles["WalletCardMomentous__range"]}>{subText}</span>
    )}
  </div>
);

export default WalletCardMomentous;
