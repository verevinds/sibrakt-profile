import type { PropsWithChildren, HTMLAttributes } from "react";
import cn from "classnames";

import styles from "./wallet-card.module.css";

type Variants = "red" | "dark" | "default";
type Props = {
  variant?: Variants;
  isActive?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const WalletCard = ({
  children,
  variant = "default",
  isActive,
  className,
  ...restProps
}: PropsWithChildren<Props>): JSX.Element => (
  <div
    {...restProps}
    className={cn(
      styles["WalletCard"],
      {
        [styles["WalletCard_default"]]: variant === "default",
        [styles["WalletCard_red"]]: variant === "red",
        [styles["WalletCard_dark"]]: variant === "dark",
        [styles["WalletCard_active"]]: isActive,
      },
      className
    )}
  >
    {children}
  </div>
);

export default WalletCard;
