import { IAlarmItemProps } from "@allTypes/alarm";
import alarmApis from "@apis/query/alarm";
import Icons from "@elements/icon";
import getImageUrl from "@utils/client/getImageUrl";
import { getTime } from "@utils/client/getTime";
import Image from "next/image";
import React, { useCallback } from "react";

const CheckItem = ({ alarm }: IAlarmItemProps) => {
  const { mutate: updateApproveAlarm } = alarmApis.UpdateAlarm(alarm?.id);

  // 수락 이벤트
  const handleApprove = useCallback(() => {
    updateApproveAlarm({ state: "APPROVE", receiverId: alarm.senderId });
  }, [updateApproveAlarm, alarm]);

  // 거절 이벤트
  const handleRefuse = useCallback(() => {
    updateApproveAlarm({ state: "REFUSE", receiverId: alarm.senderId });
  }, [updateApproveAlarm, alarm]);

  return (
    <li className="grid grid-cols-[4.5fr_5fr] items-center border-b py-[2.4rem] last:border-none">
      <div className="flex items-center space-x-[1.5rem]">
        {alarm?.user?.avatarImg ? (
          <Image
            className="h-[3rem] w-[3rem] rounded-full"
            src={getImageUrl(alarm.user.avatarImg)}
            alt="icon"
            width={30}
            height={30}
            priority
          />
        ) : (
          <div
            className="flex-center Cap4 aspect-square w-[3rem] cursor-pointer rounded-full
          bg-[#9DA9B4]"
          >
            {alarm?.user?.nickname.slice(0, 2)}
          </div>
        )}
        <div className="flex flex-col">
          <span className="text-[1.2rem] text-primary-500">
            {getTime(alarm?.createdAt)}
          </span>
          <span className="Cap2">{alarm?.user?.nickname}</span>
          <p className="">[{alarm?.study?.studyName.slice(0, 11)}...]</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="Cap2">평점 {alarm?.user?.score.toFixed(1)}</span>
        <div className="relative grid h-[4.2rem] w-[12.6rem] grid-cols-2 rounded-[0.4rem] border border-primary-200">
          <button
            className="text-[1.5rem] font-semibold text-primary-main hover:text-[#e95845]"
            onClick={handleApprove}
          >
            수락
          </button>
          <span className="absolute h-[2.6rem] w-[0.13rem] self-center justify-self-center bg-primary-200"></span>
          <button
            className="text-[1.5rem] text-primary-500 hover:text-primary-600"
            onClick={handleRefuse}
          >
            거절
          </button>
        </div>
      </div>
    </li>
  );
};

export default CheckItem;
