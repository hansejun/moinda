import StudyRoomApi from "@apis/query/studyRoomApi";
import ArrowSvg from "@assets/svg/arrowSvg";
import { iconBackgrounds } from "@elements/icon";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { ReadMe } from "@apis/query/userApi";
import cls from "@utils/client/cls";

interface ILineProgress {
  onClick?: () => void;
}

const LineProgressBar = ({ onClick }: ILineProgress) => {
  const router = useRouter();
  const { id } = router.query;
  const { data: myStudyData } = StudyRoomApi.ReadStudy(id + "");
  const { data: profile } = ReadMe();

  // 목표시간
  const targetTime = useMemo(() => {
    if (!myStudyData) return "00h 00m";
    const time = myStudyData.targetTime;
    const hours = ((time / 60) | 0).toString().padStart(2, "0");
    const minutes = (time % 60).toString().padStart(2, "0");
    return `${hours}h ${minutes}m`;
  }, [myStudyData]);

  // 목표시간
  const myStudyTime = useMemo(() => {
    if (!profile) return "00h 00m";
    const time = profile.totalTime;
    const hours = ((time / 60) | 0).toString().padStart(2, "0");
    const minutes = (time % 60).toString().padStart(2, "0");
    return `${hours}h ${minutes}m`;
  }, [profile]);

  /** 진행률 */
  const progressPercent = useMemo(() => {
    if (!profile || !myStudyData) return "0%";
    const { targetTime } = myStudyData;
    const { totalTime } = profile;
    if (totalTime / targetTime >= 1) return "100%";
    return `${((totalTime / targetTime) * 100) | 0}%`;
  }, [myStudyData, profile]);

  console.log(progressPercent);
  return (
    <div className="flex flex-col  rounded-[1rem] bg-white p-[3rem] text-primary-600">
      <div className="mb-[2.8rem] flex items-center justify-between">
        <span className="H2 ">내 그룹 목표 달성률</span>
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
          <p className="Cap1">그룹 목표시간</p>
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
            absolute left-0 top-0 h-[2rem] rounded-[2.1rem]`,
            myStudyData ? iconBackgrounds[myStudyData.icon] : "bg-primary-200",
            myStudyData && profile && `w-[${progressPercent}]`
          )}
        />
      </div>
    </div>
  );
};

export default LineProgressBar;
