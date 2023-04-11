import { IUser } from "@allTypes/user";
import getImageUrl from "@utils/client/getImageUrl";
import dayjs from "dayjs";
import Image from "next/image";
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
      {user.avatarImg ? (
        <Image
          className="aspect-square w-[3rem] rounded-lg object-cover"
          src={getImageUrl(user.avatarImg)}
          alt="avatar"
          width={30}
          height={30}
          priority
        />
      ) : (
        <div
          className="flex-center Cap4 aspect-square w-[3rem] cursor-pointer 
              rounded-lg bg-[#9DA9B4]"
        >
          {user?.nickname?.slice(0, 2)}
        </div>
      )}

      <span className="Cap4">{viewCheckIn}</span>
      <span className="Cap4 text-center">{viewTodayTime}</span>
    </li>
  );
};

export default MemberItem;
