import React from 'react';
import cn from "classnames";
import ReactModal from "react-modal";
import styles from "./modal.module.css";
import CloseIcon from 'src/icons/close';

export type ModalProps = ReactModal["props"] & {
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  title?: string;
  alignContent?: "center";
  contentClassName?: string;
};

const Modal: React.FC<ModalProps> = ({
  children,
  Icon,
  title,
  alignContent,
  className,
  contentClassName,
  ...props
}) => {
  return (
    <ReactModal
      {...props}
      overlayClassName={styles["Modal"]}
      className={styles["Modal__overlay"]}
    >
      <div
        className={cn(styles["ModalSheet"], className, {
          [styles["ModalSheet_align_content_center"]]:
            alignContent === "center",
        })}
      >
        {Icon && (
          <div className={styles["ModalSheet__icon"]}>
            <Icon />
          </div>
        )}
        {title && <h1 className={styles["ModalSheet__header"]}>{title}</h1>}
        <button
          title={"Close"}
          className={styles["ModalSheet__closeButton"]}
          onClick={props.onRequestClose}
        >
          <CloseIcon />
        </button>
        <div className={cn(styles["ModalSheet__content"], contentClassName)}>
          {children}
        </div>
      </div>
    </ReactModal>
  );
};

export default Modal;
