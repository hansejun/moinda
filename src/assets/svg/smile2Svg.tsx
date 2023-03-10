import { ISvg } from "@allTypes/svg";
import React from "react";

const Smile2Svg = ({ className }: ISvg) => {
  return (
    <svg
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.7 8.3H13.709M8.3 8.3H8.309M20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11ZM14.15 8.3C14.15 8.54853 13.9485 8.75 13.7 8.75C13.4515 8.75 13.25 8.54853 13.25 8.3C13.25 8.05147 13.4515 7.85 13.7 7.85C13.9485 7.85 14.15 8.05147 14.15 8.3ZM8.75 8.3C8.75 8.54853 8.54853 8.75 8.3 8.75C8.05147 8.75 7.85 8.54853 7.85 8.3C7.85 8.05147 8.05147 7.85 8.3 7.85C8.54853 7.85 8.75 8.05147 8.75 8.3ZM11 15.95C13.2504 15.95 15.05 14.3003 15.05 12.8H6.95C6.95 14.3003 8.74955 15.95 11 15.95Z"
        stroke="#333333"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Smile2Svg;
