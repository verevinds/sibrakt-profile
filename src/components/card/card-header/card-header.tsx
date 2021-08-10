import cn from "classnames";
import type { PropsWithChildren } from "react";

import styles from "./card-header.module.css";

type Props = {
  variant?: "dark";
  indented?: boolean;
};
const CardHeader = ({
  children,
  variant,
  indented,
}: PropsWithChildren<Props>): JSX.Element => (
  <div
    className={cn(styles["CardHeader"], {
      [styles["CardHeader_grayBorder"]]: variant === "dark",
      [styles["CardHeader_indented"]]: indented,
    })}
  >
    {children}
  </div>
);

export default CardHeader;
