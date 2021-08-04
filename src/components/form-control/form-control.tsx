import React from 'react';
import cn from "classnames";
import styles from "./form-control.module.css";

export interface Props {
  name?: string;
  label?: string;
  error?: string | boolean;
  containerClassName?: string;
  errorClassName?: string;
  errorContainerClassName?: string;
  message?: string;
  messageClassName?: string;
  children: JSX.Element | JSX.Element[];
}

const FormControl = (props: Props) => {
  const {
    name,
    label,
    error,
    containerClassName,
    errorClassName,
    errorContainerClassName,
    messageClassName,
    message,
  } = props;
  const hasError = !!error;

  return (
    <div className={cn(containerClassName, styles.FormControl)}>
      {label && (
        <label className={styles.FormControl__label} htmlFor={name}>
          {label}
        </label>
      )}
      {props.children}
      {message && <div className={messageClassName}>{message}</div>}
      {hasError && (
        <div className={cn(errorContainerClassName, styles.FormControl__error)}>
          <span
            className={cn(errorClassName, styles.FormControl__errorMessage)}
            title={error as string}
          >
            {error}
          </span>
        </div>
      )}
    </div>
  );
};

export default FormControl;
