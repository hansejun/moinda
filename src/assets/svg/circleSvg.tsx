import { ISvg } from "@allTypes/svg";
import React from "react";

const CircleSvg = ({
  className,
  color,
}: {
  color: string;
  className: string;
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="3" cy="3" r="3" fill={color || "#ED7868"} />
    </svg>
  );
};

export default CircleSvg;
