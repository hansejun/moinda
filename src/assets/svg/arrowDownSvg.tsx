import { ISvg } from "@allTypes/svg";
import React from "react";

const ArrowDownSvg = ({ className }: ISvg) => {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3 6L5.50001 8.50046L8.99983 12L15 6"
        stroke="#848484"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDownSvg;
