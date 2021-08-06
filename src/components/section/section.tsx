import { HTMLAttributes, PropsWithChildren } from "react";
import cn from "classnames";

import styles from "./section.module.css";

type Props = HTMLAttributes<HTMLDivElement>;

const Section = ({
  children,
  className,
  ...restProps
}: PropsWithChildren<Props>) => {
  return (
    <section {...restProps} className={cn(styles["Section"], className)}>
      {children}
    </section>
  );
};

export default Section;
