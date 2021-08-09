import { PropsWithChildren, useState } from "react";
import { Popover, PopoverProps } from "react-tiny-popover";
import cn from "classnames";

import styles from "./popup.module.css";

type Props = {
  hits: string;
};
const Popup = ({
  children,
  hits,
  containerClassName,
  ...restProps
}: PropsWithChildren<
  Props & Omit<PopoverProps, "isOpen" | "content">
>): JSX.Element | null => {
  const [isShow, toggleIsShow] = useState(false);

  const onHide = () => toggleIsShow(false);
  const onShow = () => toggleIsShow(true);

  if (!process.browser) {
    return null;
  }

  return (
    <Popover
      positions={["right"]}
      isOpen={isShow}
      content={
        <span className={cn(styles["Popup__text"], containerClassName)}>
          {hits}
        </span>
      }
      {...restProps}
    >
      <span
        className={styles["Popup__icon"]}
        onMouseEnter={onShow}
        onMouseLeave={onHide}
      >
        {children}
      </span>
    </Popover>
  );
};

export default Popup;
