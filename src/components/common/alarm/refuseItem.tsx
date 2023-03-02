import { IAlarmItemProps } from "@allTypes/alarm";
import alarmApis from "@apis/query/alarm";
import Icons, { iconBackgrounds } from "@elements/icon";
import cls from "@utils/client/cls";
import { getTime } from "@utils/client/getTime";
import Image from "next/image";
import { useCallback } from "react";

const RefuseItem = ({ alarm }: IAlarmItemProps) => {
  const { mutate: removeAlarm } = alarmApis.RemoveAlarm(alarm?.id);
  // 확인 버튼 클릭 이벤트
  const handleOnClick = useCallback(() => {
    removeAlarm();
  }, [removeAlarm]);
  return (
    <li className="flex space-x-[1.5rem] border-b py-[2.4rem] last:border-none">
      {alarm?.study?.icon ? (
        <div
          className={cls(
            "flex-center aspect-square h-[4.3rem] w-[4.3rem] rounded-[1rem]",
            iconBackgrounds[alarm?.study?.icon]
          )}
        >
          <Image
            className="w-[3rem]"
            src={Icons[alarm.study.icon]}
            alt="icon"
            width={30}
            height={30}
            priority
          />
        </div>
      ) : (
        <div
          className="aspect-square h-[4.3rem] w-[4.3rem]  rounded-[1rem]
          bg-[#9DA9B4]"
        />
      )}

      <div className="flex flex-col">
        <span className="text-[1.2rem] text-primary-500">
          {getTime(alarm?.createdAt)}
        </span>
        <p className="Cap2 mb-[0.8rem]">
          [{alarm?.study?.studyName}] 스터디 가입 요청이 그룹장에 의해
          거절되었습니다.
        </p>
        <button
          className="flex-center Cap3 h-[3.8rem] w-[8.5rem] rounded-[0.4rem] bg-primary-400 text-white transition-colors hover:bg-primary-500"
          onClick={handleOnClick}
        >
          확인
        </button>
      </div>
    </li>
  );
};
export default RefuseItem;
