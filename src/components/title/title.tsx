import { HTMLAttributes, PropsWithChildren } from "react";
import cn from "classnames";

import styles from "./title.module.css";

type Props = HTMLAttributes<HTMLDivElement>;

const Title = ({
  children,
  className,
  ...restProps
}: PropsWithChildren<Props>) => {
  return (
    <h1 {...restProps} className={cn(styles["Title"], className)}>
      {children}
    </h1>
  );
};

export default Title;
