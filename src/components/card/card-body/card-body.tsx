import type { PropsWithChildren } from "react";

import styles from "./card-body.module.css";

const CardBody = ({
  children,
}: PropsWithChildren<unknown>): JSX.Element => (
  <div className={styles["CardBody"]}>{children}</div>
);

export default CardBody;
