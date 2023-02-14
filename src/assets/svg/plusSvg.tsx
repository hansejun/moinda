import { ISvg } from "@allTypes/svg";
import React from "react";

const PlusSvg = ({ className }: ISvg) => {
  return (
    <svg
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.4998 1.80005V16.2M1.2998 9.00005H15.6998"
        stroke="#ED7868"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PlusSvg;
