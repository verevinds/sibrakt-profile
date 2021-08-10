import { PropsWithChildren, useState } from "react";
import { Popover, PopoverProps } from "react-tiny-popover";
import cn from "classnames";

import styles from "./popup.module.css";

type Props = {
  hits: JSX.Element | string;
  justifyLeft?: boolean;
};
const Popup = ({
  children,
  hits,
  justifyLeft,
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
        className={cn(styles["Popup__icon"], {
          [styles["Popup__icon_justifyLeft"]]: justifyLeft,
        })}
        onMouseEnter={onShow}
        onMouseLeave={onHide}
      >
        {children}
      </span>
    </Popover>
  );
};

export default Popup;
