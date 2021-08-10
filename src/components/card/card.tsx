import type { PropsWithChildren, HTMLAttributes } from "react";
import cn from "classnames";

import styles from "./card.module.css";

type Variants = "red" | "dark" | "default";
type Props = {
  variant?: Variants;
  isActive?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const Card = ({
  children,
  variant = "default",
  isActive,
  className,
  ...restProps
}: PropsWithChildren<Props>): JSX.Element => (
  <div
    {...restProps}
    className={cn(
      styles["Card"],
      {
        [styles["Card_default"]]: variant === "default",
        [styles["Card_red"]]: variant === "red",
        [styles["Card_dark"]]: variant === "dark",
        [styles["Card_active"]]: isActive,
      },
      className
    )}
  >
    {children}
  </div>
);

export default Card;
