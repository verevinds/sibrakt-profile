import { HTMLAttributes, PropsWithChildren } from "react";
import cn from "classnames";

import styles from "./section.module.css";

type Props = HTMLAttributes<HTMLDivElement> & {
  fullSize?: boolean;
};

const Section = ({
  children,
  className,
  fullSize,
  ...restProps
}: PropsWithChildren<Props>) => {
  return (
    <section
      {...restProps}
      className={cn(
        styles["Section"],
        {
          [styles["Section_fullSize"]]: fullSize,
        },
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
