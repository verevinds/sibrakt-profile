import type { PropsWithChildren } from "react";

import styles from "./card-footer.module.css";

const CardFooter = ({
  children,
}: PropsWithChildren<unknown>): JSX.Element => (
  <div className={styles["CardFooter"]}>{children}</div>
);

export default CardFooter;
