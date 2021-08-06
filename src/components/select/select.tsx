import React from "react";
import ReactSelect, { OptionTypeBase } from "react-select";

type Props<OptionType, isMulti extends boolean> = ReactSelect<
  OptionType,
  isMulti
>["props"] & {
  error?: string;
};

export type OptionTypeDefault = { label: string; value: string };

const SelectBase = <
  OptionType extends OptionTypeBase = OptionTypeDefault,
  isMulti extends boolean = false
>(
  props: Props<OptionType, isMulti>
): JSX.Element => {
  return (
    <ReactSelect
      {...props}
      styles={{
        control: (provided, state) => {
          const focusStyle = {};
          if (state.isFocused) {
            Object.assign(focusStyle, {
              borderColor: "#3f8ae0",
            });
          }

          const errorStyle = {};
          if (props.error) {
            Object.assign(errorStyle, {
              backgroundColor: "rgba(255, 68, 74, 0.1)",
              borderColor: "var(--primary-100, #ff444a)",
            });
          }

          return {
            ...provided,
            minHeight: 44,
            borderRadius: 10,
            borderWidth: "1px",
            borderStyle: "solid",
            boxSizing: "border-box",
            fontSize: "16px",
            outline: "none",
            borderColor: "rgba(153, 163, 173, 0.2)",
            backgroundColor: "rgba(153, 163, 173, 0.15)",
            color: "#07022d",
            boxShadow: "none",
            ["&:hover"]: {
              borderColor: "rgba(63, 138, 224, 0.5);",
            },

            ...focusStyle,
            ...errorStyle,
          };
        },
        valueContainer: (provided) => ({
          ...provided,
          paddingLeft: "12px",
          paddingRight: "12px",
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
          color: "#99a3ad",
        }),
        placeholder: (provided) => ({
          ...provided,
          color: "rgba(7, 2, 45, 0.5)",
        }),
        indicatorsContainer: (provided) => ({
          ...provided,
          marginRight: 6,
        }),
        indicatorSeparator: () => ({
          display: "none",
        }),
        clearIndicator: () => ({
          display: "none",
        }),
        menu: (provided) => ({
          ...provided,
          boxShadow: "none",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "rgba(153, 163, 173, 0.2)",
        }),
        multiValueLabel: (provided) => {
          return {
            ...provided,
            color: "white",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 10,
            lineHeight: 1,
            letterSpacing: 0.75,
            paddingTop: 7,
            paddingBottom: 7,
            paddingLeft: 10,
            paddingRight: 10,
          };
        },
        multiValueRemove: (provided) => {
          return {
            ...provided,
            color: "white",
            borderLeft: "2px solid rgba(0, 0, 0, 0.05)",
            borderRadius: 0,
            paddingLeft: 3,
            ["&:hover"]: {
              background: "none",
              color: "white",
            },
            ["& svg"]: {
              width: "16px",
              height: "16px",
            },
          };
        },
        ...(props?.styles ?? {}),
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 10,
      })}
    />
  );
};

export type SelectProps<OptionType extends OptionTypeBase = OptionTypeDefault> =
  Props<OptionType, false>;

export const Select = <OptionType extends OptionTypeBase = OptionTypeDefault>(
  props: SelectProps<OptionType>
): JSX.Element => {
  return <SelectBase {...props} />;
};

export type SelectMultiProps<
  OptionType extends OptionTypeBase = OptionTypeDefault
> = Props<OptionType, true>;

export const SelectMulti = <
  OptionType extends OptionTypeBase = OptionTypeDefault
>(
  props: SelectMultiProps<OptionType>
): JSX.Element => {
  return <SelectBase isMulti {...props} />;
};
