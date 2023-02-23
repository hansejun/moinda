import cls from "@utils/client/cls";
import React from "react";

const CheckInBtn = () => {
  return (
    <button
      className={cls(
        "Sub2 h-[6.8rem] rounded-[1rem] bg-primary-main text-white"
      )}
    >
      오늘 출석체크
    </button>
  );
};

export default CheckInBtn;
