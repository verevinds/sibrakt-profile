import React from "react";
import cn from "classnames";

import Calendar from "./calendar.svg";
import Hint from "./hint.svg";
import SearchIcon from "src/icons/search";

import stylesTextInputBase from "./text-input-base.module.css"
import styles from "./text-input.module.css";

export type Props = {
  icon?: "calendar" | "search";
  name: string;
  error?: boolean;
  inputClassName?: string;
  containerClassName?: string;
  variant?: "dark" | "light";
  hint?: string;
} & JSX.IntrinsicElements["input"];

const TextInput = React.forwardRef<HTMLInputElement, Props>(
  (props, ref): JSX.Element => {
    const {
      icon,
      name,
      inputClassName,
      containerClassName,
      variant = "light",
      error,
      title,
      hint,
      ...rest
    } = props;

    return (
      <div className={cn(styles["Container"], containerClassName)}>
        <input
          ref={ref}
          title={title}
          id={name}
          name={name}
          {...rest}
          className={cn(inputClassName, stylesTextInputBase["TextInputBase"], {
            [stylesTextInputBase["TextInputBase_variant_light"]]: variant === "light",
            [stylesTextInputBase["TextInputBase_variant_dark"]]: variant === "dark",
            [stylesTextInputBase["TextInputBase_error"]]: error,
            [styles["TextInput_withIcon"]]: icon !== undefined,
          })}
        />
        {hint && (
          <div
            className={cn(
              styles["Container__icon"],
              styles["Container__hintIcon"]
            )}
          >
            <Hint />
            <p className={styles["Container__hint"]}>{hint}</p>
          </div>
        )}
        {icon === "search" && (
          <SearchIcon
            fill={variant === "light" ? "#0000004C" : "#fff"}
            className={styles["Container__icon"]}
          />
        )}
        {icon === "calendar" && (
          <Calendar className={styles["Container__icon"]} />
        )}
      </div>
    );
  }
);
export default TextInput;
