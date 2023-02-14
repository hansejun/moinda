import Icon1 from "@assets/icons/icon1";
import Icon2 from "@assets/icons/icon2";
import Icon3 from "@assets/icons/icon3";
import Icon4 from "@assets/icons/icon4";
import Icon5 from "@assets/icons/icon5";
import Icon6 from "@assets/icons/icon6";
import Icon7 from "@assets/icons/icon7";
import Icon8 from "@assets/icons/icon8";
import Icon9 from "@assets/icons/icon9";
import Icon10 from "@assets/icons/icon10";
import Icon11 from "@assets/icons/icon11";
import Icon12 from "@assets/icons/icon12";
import Icon13 from "@assets/icons/icon13";
import Icon14 from "@assets/icons/icon14";
import Icon15 from "@assets/icons/icon15";
import Icon16 from "@assets/icons/icon16";
import Icon17 from "@assets/icons/icon17";
import Icon18 from "@assets/icons/icon18";
import Icon19 from "@assets/icons/icon19";
import Icon20 from "@assets/icons/icon20";
import { ReactChild } from "react";

export type TNumber =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20;

export const iconBackgrounds = {
  1: "bg-[#F5BEBE]",
  2: "bg-[#B0F47B]",
  3: "bg-[#94B7F7]",
  4: "bg-[#F7D594]",
  5: "bg-[#FFA07D]",
  6: "bg-[#F7D594]",
  7: "bg-[#FFA07D]",
  8: "bg-[#B0F47B]",
  9: "bg-[#FFA07D]",
  10: "bg-[#F5BEBE]",
  11: "bg-[#94B7F7]",
  12: "bg-[#B0F47B]",
  13: "bg-[#F7D594]",
  14: "bg-[#F5BEBE]",
  15: "bg-[#F7D594]",
  16: "bg-[#F5BEBE]",
  17: "bg-[#94B7F7]",
  18: "bg-[#FFA07D]",
  19: "bg-[#F7D594]",
  20: "bg-[#B0F47B]",
};

const Icon = (num: TNumber): ReactChild => {
  switch (num) {
    case 1:
      return <Icon1 />;
    case 2:
      return <Icon2 />;
    case 3:
      return <Icon3 />;
    case 4:
      return <Icon4 />;
    case 5:
      return <Icon5 />;
    case 6:
      return <Icon6 />;
    case 7:
      return <Icon7 />;
    case 8:
      return <Icon8 />;
    case 9:
      return <Icon9 />;
    case 10:
      return <Icon10 />;
    case 11:
      return <Icon11 />;
    case 12:
      return <Icon12 />;
    case 13:
      return <Icon13 />;
    case 14:
      return <Icon14 />;
    case 15:
      return <Icon15 />;
    case 16:
      return <Icon16 />;
    case 17:
      return <Icon17 />;
    case 18:
      return <Icon18 />;
    case 19:
      return <Icon19 />;
    case 20:
      return <Icon20 />;
    default:
      return <div />;
  }
};

export default Icon;
