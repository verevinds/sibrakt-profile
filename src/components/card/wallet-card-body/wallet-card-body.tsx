import type { PropsWithChildren } from "react";

import styles from "./wallet-card-body.module.css";

const WalletCardBody = ({
  children,
}: PropsWithChildren<unknown>): JSX.Element => (
  <div className={styles["WalletCardBody"]}>{children}</div>
);

export default WalletCardBody;
