import cn from "classnames";
import type { PropsWithChildren } from "react";

import styles from "./wallet-card-header.module.css";

type Props = {
  variant?: "dark";
  indented?: boolean;
};
const WalletCardHeader = ({
  children,
  variant,
  indented,
}: PropsWithChildren<Props>): JSX.Element => (
  <div
    className={cn(styles["WalletCardHeader"], {
      [styles["WalletCardHeader_grayBorder"]]: variant === "dark",
      [styles["WalletCardHeader_indented"]]: indented,
    })}
  >
    {children}
  </div>
);

export default WalletCardHeader;
