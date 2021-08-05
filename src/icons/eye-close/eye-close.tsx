import React from "react";

export type Props = React.SVGProps<SVGSVGElement> & {
  variant?: "dark" | "light";
};

const IconEyeClose = (props: Props) => {
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
            d="M7.05 5.636L18.364 16.95c.39.39.39 1.023 0 1.414-.39.39-1.024.39-1.414 0L5.636 7.05c-.39-.39-.39-1.023 0-1.414.39-.39 1.024-.39 1.414 0zM5.6 8.428l1.417 1.418c-.638.536-1.2 1.183-1.658 1.93l-.132.223.128.22c1.663 2.724 4.723 4.114 7.721 3.687l1.688 1.686c-4.285 1.294-8.985-.558-11.273-4.633l-.138-.254-.128-.252c-.121-.24-.14-.517-.057-.768l.057-.136c.6-1.23 1.415-2.278 2.374-3.121zm10.783-1.366c1.68.859 3.08 2.192 4.045 3.85l.176.315.162.317c.126.246.144.53.054.787l-.054.125-.17.334c-.568 1.059-1.315 1.998-2.2 2.778L16.98 14.15c.682-.574 1.265-1.263 1.721-2.035l.064-.116-.057-.101c-.656-1.113-1.566-2.046-2.65-2.718l-.275-.163-.281-.151c-1.471-.753-3.063-.988-4.578-.772L9.237 6.408c2.294-.69 4.838-.527 7.146.654z"
            transform="translate(-862 -489) translate(533 440) translate(12 13) translate(317 36)"
          />
        </g>
      </g>
    </svg>
  );
};
export default IconEyeClose;