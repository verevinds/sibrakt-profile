import React from "react";

export type Props = React.SVGProps<SVGSVGElement> & {
  variant?: "dark" | "light";
};

const IconEyeOpen = (props: Props) => {
  const fill = props.variant === "dark" ? "#fff" : "#99a3ad";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd" opacity=".5">
        <g fill={fill}>
          <path
            d="M3.225 11.55c2.422-4.958 8.313-6.967 13.158-4.488 1.68.859 3.08 2.192 4.045 3.85l.176.315.162.317c.126.246.144.53.054.787l-.054.125-.17.334c-.96 1.789-2.429 3.236-4.213 4.15-4.662 2.384-10.311.616-12.892-3.981l-.138-.254-.128-.252c-.121-.24-.14-.517-.057-.768l.057-.136zM15.5 8.866c-3.642-1.863-8.022-.553-10.142 2.908L5.227 12l.128.22c2.028 3.322 6.135 4.66 9.672 3.138l.24-.108.234-.115c1.33-.68 2.441-1.733 3.199-3.018l.064-.116-.057-.101c-.656-1.113-1.566-2.046-2.65-2.718l-.275-.163-.281-.151zM12 10c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z"
            transform="translate(-862 -585) translate(533 536) translate(12 13) translate(317 36)"
          />
        </g>
      </g>
    </svg>
  );
};

export default IconEyeOpen;
