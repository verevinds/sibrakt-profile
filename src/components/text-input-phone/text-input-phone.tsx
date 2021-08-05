import TextInput, { Props as TextInputProps } from "src/components/text-input";
import styles from "./text-input-phone.module.css";
import cn from "classnames";
import {
  forwardRef,
} from "react";
import { countriesList } from "./countriesList";

export type Props = TextInputProps & {
  variant?: "dark" | "light";
};

const INDEX_COUNTRY_CODE = 2;
const INDEX_COUNTRY_PHONE_CODE = 3;

const TextInputPhone = forwardRef<HTMLInputElement, Props>(
  (props, phoneRef): JSX.Element | null => {
    const currentCountry = countriesList.find(
      (item) => item[INDEX_COUNTRY_CODE] === "ru"
    );

    const isLightVariant = props.variant === "light";

    return (
      <div className={styles["TextInputPhone"]}>
        <div
          className={cn(styles["TextInputPhone__button"], {
            [styles["TextInputPhone__button_light"]]: isLightVariant,
          })}
        >
          <div
            className={cn(
              styles["TextInputPhone__flag"],
              styles[`${currentCountry && currentCountry[INDEX_COUNTRY_CODE]}`]
            )}
          />
          <span className={styles["TextInputPhone__code"]}>
            {currentCountry && `+${currentCountry[INDEX_COUNTRY_PHONE_CODE]}`}
          </span>
        </div>

        <TextInput
          {...props}
          ref={phoneRef}
          inputClassName={cn(styles["TextInputPhone__input"], {
            [styles["TextInputPhone__input_light"]]: isLightVariant,
          })}
          type="tel"
        />
      </div>
    );
  }
);

export default TextInputPhone;
