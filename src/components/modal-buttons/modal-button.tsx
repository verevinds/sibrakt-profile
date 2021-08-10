import React from "react";
import cn from "classnames";

import styles from "./modal-button.module.css";

export type ModalButtonProps = JSX.IntrinsicElements["div"] & {
  alignContent?: "center";
};

const ModalButtons = ({
  className,
  alignContent,
  ...props
}: ModalButtonProps): JSX.Element => {
  return (
    <div
      {...props}
      className={cn(styles["ModalButtons"], className, {
        [styles["ModalButtons_align_content_center"]]: alignContent === "center",
      })}
    />
  );
};

export default ModalButtons;