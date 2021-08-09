import React from "react";

import styles from './arrow.module.css';

type Variants = "up" | "left" | "right" | undefined;
export type Props = React.SVGProps<SVGSVGElement> & {
  variant?: Variants;
};

const Arrow: React.FC<Props> = ({ variant, ...restProps }) => {
  const getTransform = (key: Variants) => {
    switch (key) {
      case "up":
        return "rotate(180 12.5,12.5)";
      case "left":
        return "rotate(90 12.5,12.5)";
      case "right":
        return "rotate(-90 12.5,12.5)";
      default:
        return;
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      // fill="#FF444A"
      className={styles['ArrowIcon']}
      fillRule="evenodd"
      {...restProps}
    >
      <path
        transform={getTransform(variant)}
        d="M5.887 9.354c.313-.313.804-.337 1.144-.072l.082.072 5.454 5.453 5.454-5.453c.312-.313.804-.337 1.144-.072l.081.072c.313.312.337.804.072 1.144l-.072.081-6.067 6.067c-.312.313-.804.337-1.144.072l-.081-.072-6.067-6.067c-.338-.338-.338-.887 0-1.225z"
      />
    </svg>
  );
};
export default Arrow;