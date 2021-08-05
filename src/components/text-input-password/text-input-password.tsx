import React, { useState } from "react";
import cn from "classnames";

import TextInput from "src/components/text-input";

import styles from "./text-input-password.module.css";

import IconEyeClose from "src/icons/eye-close";
import IconEyeOpen from "src/icons/eye-open";

interface PropsExtended {
  iconContainerClassName?: string;
}
export type Props = React.ComponentProps<typeof TextInput> & PropsExtended;

const TextInputPassword = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    const { iconContainerClassName } = props;
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const showPassword = () => setPasswordVisible(true);
    const hidePassword = () => setPasswordVisible(false);

    return (
      <div className={styles["Password"]}>
        <TextInput
          ref={ref}
          {...props}
          type={isPasswordVisible ? "text" : "password"}
          inputClassName={styles["Password__input"]}
        />
        <button
          tabIndex={-1}
          type="button"
          className={cn(iconContainerClassName, styles["Password__icon"])}
          onClick={isPasswordVisible ? hidePassword : showPassword}
        >
          {isPasswordVisible ? (
            <IconEyeClose variant={props.variant} />
          ) : (
            <IconEyeOpen variant={props.variant} />
          )}
        </button>
      </div>
    );
  }
);

export default TextInputPassword;
