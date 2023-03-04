import { IUser } from "@allTypes/user";
import dayjs from "dayjs";
import React, { useMemo } from "react";

interface IProps {
  user: IUser;
}

const MemberItem = ({ user }: IProps) => {
  // 보여지는 체크인  시간
  const viewCheckIn = useMemo(() => {
    if (!user?.attendance?.checkIn) return "00:00:00";
    const time = new Date(user.attendance.checkIn);
    return dayjs(time).format("HH:MM:ss");
  }, [user]);

  // 보여지는 공부 시간
  const viewTodayTime = useMemo(() => {
    if (!user?.attendance?.todayTime) return "00:00:00";
    const time = user.attendance.todayTime;
    const hours = ((time / 60 / 60) | 0).toString().padStart(2, "0");
    const minutes = ((time / 60) | 0 % 60).toString().padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }, [user]);

  return (
    <li
      key={user.id}
      className="grid grid-cols-[6fr_8.6fr_8.6fr] items-center border-b p-[2.2rem_1.1rem] last:border-none last:pb-0"
    >
      <div className={`aspect-square w-[3rem] rounded-lg bg-red-300`} />
      <span className="Cap4">{viewCheckIn}</span>
      <span className="Cap4 text-center">{viewTodayTime}</span>
    </li>
  );
};

export default MemberItem;
