import { IAttendance } from "@allTypes/attendance";
import attendanceApi from "@apis/query/attendance";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import useInterval from "@hooks/useInterval";
interface IProps {
  attendance: IAttendance;
}

const CheckOutBtn = ({ attendance }: IProps) => {
  const { mutate: checkOut } = attendanceApi.CheckOut();
  const [isRun, setIsRun] = useState(false);
  const [time, setTime] = useState(0);

  const intervalTime = useCallback(() => {
    setTime((prev) => prev + 1);
  }, []);

  // 보여지는 시간
  const viewTime = useMemo(() => {
    const hours = ((time / 60 / 60) | 0).toString().padStart(2, "0");
    const minutes = (((time / 60) | 0) % 60).toString().padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }, [time]);

  // 1초마다 intervalTime 함수를 실행
  useInterval(isRun, intervalTime);

  // 체크아웃
  const handleCheckOut = useCallback(() => {
    if (attendance && attendance.log) {
      const gapTime =
        ((Date.now() - Date.parse(attendance.log + "")) / 1000) | 0;
      checkOut({ gapTime });
      setIsRun(false);
    }
  }, [attendance, checkOut]);

  // 시간 디폴트값으로 세팅
  useEffect(() => {
    if (attendance) {
      const currentTime =
        (((Date.now() - Date.parse(attendance.log + "")) / 1000) | 0) +
        attendance.todayTime;
      setTime(currentTime);
      setIsRun(true);
    }
    return () => setIsRun(false);
  }, [attendance]);

  return (
    <div className="grid h-[6.8rem] grid-cols-[3fr_1.1fr] gap-[0.8rem]">
      <button className="Sub2 rounded-[1rem] bg-primary-main text-white">
        {viewTime}
      </button>
      <button
        className="Sub2 rounded-[1rem] border border-primary-main bg-white text-primary-main"
        onClick={handleCheckOut}
      >
        체크아웃
      </button>
    </div>
  );
};

export default CheckOutBtn;
