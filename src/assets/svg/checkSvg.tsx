import { ISvg } from "@allTypes/svg";
import React from "react";

const CheckSvg = ({ className }: ISvg) => {
  return (
    <svg
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.5 4L5 7.5L10.5 1"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckSvg;
