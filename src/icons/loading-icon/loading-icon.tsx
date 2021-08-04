import React from "react";
import styles from "./loading-icon.module.css";

export interface LoadingIconProps {
  color?: string;
  innerColor?: string;
  size?: number;
}

const LoadingIcon = (
  props: React.SVGProps<SVGSVGElement> & LoadingIconProps
) => {
  const { color = "#99a3ad", innerColor = "#ebedef", size = 18 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 18 18"
      className={styles["loadingIcon"]}
    >
      <path
        id="vpzyw36u27cnz9ogozwjou3o"
        d="M9,0C4.02944,0,0,4.02944,0,9C0,13.9706,4.02944,18,9,18C13.9706,18,18,13.9706,18,9C18,4.02944,13.9706,0,9,0ZM9,3C12.3137,3,15,5.68629,15,9C15,12.3137,12.3137,15,9,15C5.68629,15,3,12.3137,3,9C3,5.68629,5.68629,3,9,3Z"
        fill={innerColor}
        stroke="none"
        strokeWidth="0"
        fillRule="evenodd"
        transform="translate(9,9) translate(-9,-9)"
      />
      <path
        id="x31ktfip9mamixoxuhsp0rww"
        d="M9,18C13.9706,18,18,13.9706,18,9C18,4.02944,13.9706,0,9,0C4.02944,0,0,4.02944,0,9C0,9.82843,0.671573,10.5,1.5,10.5C2.32843,10.5,3,9.82843,3,9C3,5.68629,5.68629,3,9,3C12.3137,3,15,5.68629,15,9C15,12.3137,12.3137,15,9,15C8.17157,15,7.5,15.6716,7.5,16.5C7.5,17.3284,8.17157,18,9,18Z"
        fill={color}
        stroke="none"
        strokeWidth="0"
        fillRule="evenodd"
        transform="translate(9,9) translate(-9,-9)"
        className={styles["LoadingIcon__path"]}
      />
    </svg>
  );
};

export default LoadingIcon;
