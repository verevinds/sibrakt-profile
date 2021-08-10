import type { PropsWithChildren, HTMLAttributes } from "react";
import cn from "classnames";

import styles from "./card-momentous.module.css";

export type Props = {
  subText?: string;
} & HTMLAttributes<HTMLDivElement>;

export const CardMomentous = ({
  subText,
  children,
  className,
  ...restProps
}: PropsWithChildren<Props>): JSX.Element => (
  <div {...restProps} className={cn(styles["CardMomentous"], className)}>
    <span className={styles["CardMomentous_highlight"]}>{children}</span>{" "}
    {subText && (
      <span className={styles["CardMomentous__range"]}>{subText}</span>
    )}
  </div>
);

export default CardMomentous;
