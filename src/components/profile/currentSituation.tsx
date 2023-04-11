import profileApi from "@apis/query/profile";
import AttendanceBtn from "@components/common/attendance/attendanceBtns";
import getStudyKinds from "@utils/client/getStudyKinds";
import dynamic from "next/dynamic";
import { useMemo } from "react";

const FakeCurrentSituation = dynamic(
  () => import("components/skeleton/myPage/FakeCurrentSituation")
);

/** 스터디 현황 페이지 */
const CurrentSituation = () => {
  const { data, isLoading } = profileApi.ReadUser();

  // 스터디 현황 (완료 / 참여중 / 개설) 분류
  const studyStatusList = useMemo(() => {
    if (!data) return {};
    const { studyList } = data;
    return getStudyKinds(studyList, data?.id + "");
  }, [data]);

  if (isLoading) return <FakeCurrentSituation />;

  return (
    <div className="flex min-h-[26.5rem] flex-col space-y-[2rem] rounded-[1rem] bg-white px-[3rem] py-[2.4rem]">
      <h2 className="H2">스터디 현황</h2>
      <div className="grid grid-cols-3 gap-[1.4rem]">
        {Object.entries(studyStatusList)?.map(([work, count]) => (
          <div
            key={work}
            className="flex-center h-[6.4rem] flex-col rounded-[1rem] bg-[#F5F4F3]"
          >
            <p className="H3">{count}</p>
            <p className="text-[1.2rem] text-primary-500 ">{work}</p>
          </div>
        ))}
      </div>
      <AttendanceBtn />
    </div>
  );
};

export default CurrentSituation;
