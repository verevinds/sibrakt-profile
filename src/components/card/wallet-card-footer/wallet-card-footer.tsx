import type { PropsWithChildren } from "react";

import styles from "./wallet-card-footer.module.css";

const WalletCardFooter = ({
  children,
}: PropsWithChildren<unknown>): JSX.Element => (
  <div className={styles["WalletCardFooter"]}>{children}</div>
);

export default WalletCardFooter;
