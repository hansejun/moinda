import attendanceApi from "@apis/query/attendance";
import cls from "@utils/client/cls";
import React, { useCallback } from "react";

const CheckInBtn = () => {
  const { mutate: checkIn } = attendanceApi.CheckIn();
  // 체크인
  const handleCheckIn = useCallback(() => {
    checkIn();
  }, [checkIn]);
  return (
    <button
      className={cls(
        "Sub2 h-[6.8rem] rounded-[1rem] bg-primary-main text-white "
      )}
      onClick={handleCheckIn}
    >
      오늘 출석체크
    </button>
  );
};

export default CheckInBtn;
