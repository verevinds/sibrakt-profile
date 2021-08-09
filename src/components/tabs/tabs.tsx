import { PropsWithChildren } from "react";
import cn from "classnames";

import Button from "src/components/button";
import type { ButtonProps } from "src/components/button/button";
import styles from "./tabs.module.css";

const Tabs = ({ children }: PropsWithChildren<any>) => {
  return <div className={styles["Tabs"]}>{children}</div>;
};

const Tab = ({
  children,
  className,
  ...restProps
}: PropsWithChildren<ButtonProps>) => {
  return (
    <Button
      className={cn(styles["Race__tab"], className)}
      {...restProps}
      variant="link"
      size="small"
    >
      {children}
    </Button>
  );
};

Tabs.Tab = Tab;

export default Tabs;
