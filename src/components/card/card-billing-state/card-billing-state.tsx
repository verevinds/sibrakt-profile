import type { HTMLAttributes, PropsWithChildren } from "react";
import cn from "classnames";

import styles from "./card-billing-state.module.css";

export type Props = { subText?: string } & HTMLAttributes<HTMLDivElement>;
export const CardBillingState = ({
  subText,
  children,
  className,
  ...restProps
}: PropsWithChildren<Props>): JSX.Element => (
  <div
    {...restProps}
    className={cn(styles["CardBillingState"], className)}
  >
    <span className={styles["CardBillingState__text"]}>{children}</span>
    {subText && (
      <span className={styles["CardBillingState__text_highlight"]}>
        {subText}
      </span>
    )}
  </div>
);

export default CardBillingState;
