import React, { ButtonHTMLAttributes, HTMLAttributes } from "react";
import cn from "classnames";
import LoadingIcon from "src/icons/loading-icon";

import styles from "./button.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: "default" | "primary" | "outline" | "link";
  size?: "large" | "small" | "full-width";
  isActive?: boolean;
}

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>((props, ref) => {
  const {
    loading,
    variant = "default",
    size,
    children,
    className,
    isActive,
    title,
    ...otherProps
  } = props;

  const btnStyle = cn(styles.Button, className, {
    [styles["Button_active"]]: isActive,
    [styles.Button_variant_default]: variant === "default",
    [styles.Button_variant_primary]: variant === "primary",
    [styles.Button_variant_outline]: variant === "outline",
    [styles.Button_variant_link]: variant === "link",
    [styles.Button_size_large]: size === "large",
    [styles.Button_size_small]: size === "small",
    [styles.Button_size_fullWidth]: size === "full-width",
  });

  if (loading) {
    return (
      <button
        {...otherProps}
        data-loading="true"
        className={btnStyle}
        title={title}
      >
        <span className={styles.Button__loader}>
          {variant === "default" && (
            <LoadingIcon color="#99a3ad" innerColor="#d2d5d8" />
          )}
          {variant === "primary" && (
            <LoadingIcon color="#fff" innerColor="#ffb4b6" />
          )}
        </span>
        <span style={{ opacity: 0 }}>{children}</span>
      </button>
    );
  }

  return (
    <button
      {...otherProps}
      children={children}
      className={btnStyle}
      title={title}
      ref={ref}
    />
  );
});
export default Button;
