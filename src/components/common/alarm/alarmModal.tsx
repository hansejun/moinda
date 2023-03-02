import alarmApis from "@apis/query/alarm";
import CancelSvg from "@assets/svg/cancelSvg";
import React, { Dispatch, SetStateAction, useCallback } from "react";
import AlarmItems from "./alarmItem";

interface IAlarmModalProps {
  setIsAlarmOpen: Dispatch<SetStateAction<boolean>>;
}

const AlarmModal = ({ setIsAlarmOpen }: IAlarmModalProps) => {
  const { data: alarmList } = alarmApis.ReadAlarms();
  const onCloseModal = useCallback(() => {
    setIsAlarmOpen(false);
  }, [setIsAlarmOpen]);

  return (
    <div className="absolute right-0 top-[5.5rem] flex max-h-[32.7rem] min-h-[15.8rem] w-[42rem] flex-col overflow-scroll rounded-[1rem] bg-white p-[2rem_2rem_0rem_2rem] shadow-[2px_4px_18px_rgba(0,0,0,0.15)] scrollbar-hide ">
      <div className="flex items-center justify-between">
        <h3 className="Cap2">스터디 요청</h3>
        <span onClick={onCloseModal}>
          <CancelSvg className="w-[2rem] cursor-pointer hover:text-primary-500" />
        </span>
      </div>
      <ul className="flex flex-col">
        {alarmList?.map((alarm) => (
          <AlarmItems key={alarm.id} alarm={alarm} />
        ))}
      </ul>
    </div>
  );
};

export default AlarmModal;
