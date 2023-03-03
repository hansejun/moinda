import ArrowSvg from "@assets/svg/arrowSvg";
import { useMemo } from "react";
import cls from "@utils/client/cls";
import profileApi from "@apis/query/profile";

interface ILineProgress {
  onClick?: () => void;
}

const LineProgressBar = ({ onClick }: ILineProgress) => {
  const { data: profile } = profileApi.ReadUser();

  // 목표시간
  const targetTime = useMemo(() => {
    if (!profile) return "00h 00m";
    const time = profile.targetTime;
    const hours = ((time / 60) | 0).toString().padStart(2, "0");
    const minutes = (time % 60 || 0).toString().padStart(2, "0");
    return `${hours}h ${minutes}m`;
  }, [profile]);

  // 내 공부 시간
  const myStudyTime = useMemo(() => {
    if (!profile) return "00h 00m";
    const time = profile.totalTime;
    const hours = ((time / 60) | 0).toString().padStart(2, "0");
    const minutes = (time % 60 || 0).toString().padStart(2, "0");
    return `${hours}h ${minutes}m`;
  }, [profile]);

  /** 진행률 */
  const progressPercent = useMemo(() => {
    if (!profile) return "0%";
    const { targetTime, totalTime } = profile;

    if (totalTime / targetTime >= 1) return "100%";
    return `${((30 / targetTime) * 100) | 0}%`;
  }, [profile]);

  const progressStyle = useMemo(() => {
    return `w-[${progressPercent}]`;
  }, [progressPercent]);

  console.log(progressStyle);

  return (
    <div className="flex flex-col  rounded-[1rem] bg-white p-[3rem] text-primary-600">
      <div className="mb-[2.8rem] flex items-center justify-between">
        <span className="H2 ">내 스터디 시간</span>
        <button
          className="Cap3 flex items-center text-primary-500"
          onClick={onClick}
        >
          목표 시간 설정
          <span className="ml-[0.4rem] flex flex-1 cursor-pointer justify-end text-primary-500">
            <ArrowSvg className="w-[1.8rem] rotate-[-90deg]" />
          </span>
        </button>
      </div>
      <div className="mb-[1.2rem] flex">
        <div className="border-l  border-primary-200 p-[0.2rem_1.6rem]">
          <p className="Cap1">오늘 공부한 시간</p>
          <p className="H3 mt-[0.9rem] ml-[0.3rem]">{myStudyTime}</p>
        </div>
        <div className="border-l  border-primary-200 p-[0.2rem_1.6rem]">
          <p className="Cap1">목표시간</p>
          <p className="H3 mt-[0.9rem] ml-[0.3rem]">{targetTime}</p>
        </div>
        <div className="flex w-full flex-1 items-end justify-end ">
          <p className="Cap1">
            <b className="mr-[0.4rem] text-[2rem] font-medium">
              {progressPercent}
            </b>
            달성중
          </p>
        </div>
      </div>

      <div className="relative   h-[2rem]  overflow-hidden rounded-[2.1rem] bg-primary-200">
        <div
          className={cls(
            `
            absolute left-0 top-0 h-[2rem] rounded-[2.1rem] bg-red-300`,
            profile && progressStyle
          )}
        />
      </div>
    </div>
  );
};

export default LineProgressBar;
