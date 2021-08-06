import type { HTMLAttributes, PropsWithChildren } from "react";
import cn from "classnames";

import styles from "./wallet-card-billing-state.module.css";

export type Props = { subText?: string } & HTMLAttributes<HTMLDivElement>;
export const WalletCardBillingState = ({
  subText,
  children,
  className,
  ...restProps
}: PropsWithChildren<Props>): JSX.Element => (
  <div
    {...restProps}
    className={cn(styles["WalletCardBillingState"], className)}
  >
    <span className={styles["WalletCardBillingState__text"]}>{children}</span>
    {subText && (
      <span className={styles["WalletCardBillingState__text_highlight"]}>
        {subText}
      </span>
    )}
  </div>
);

export default WalletCardBillingState;
