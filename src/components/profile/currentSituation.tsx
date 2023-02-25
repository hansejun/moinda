import { removeCookieToken } from "@apis/cookie";
import profileApi from "@apis/query/profile";
import CheckInBtn from "@components/common/checkInBtn";
import getStudyKinds from "@utils/client/getStudyKinds";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";

const CurrentSituation = ({ id }: { id: string }) => {
  const { data } = profileApi.ReadUser(id as string);
  console.log(data);
  const router = useRouter();
  const handleLogout = useCallback(() => {
    removeCookieToken();
    router.push("/");
  }, [router]);

  const studyStatusList = useMemo(() => {
    if (!data) return {};
    const { studyList } = data;
    return getStudyKinds(studyList, id);
  }, [id, data]);

  return (
    <div className="flex min-h-[26.5rem] flex-col space-y-[1.8rem] rounded-[1rem] bg-white px-[3rem] py-[2.4rem]">
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
      <CheckInBtn />
      <button
        className="Sub2 h-[6.8rem] rounded-[1rem] border  border-primary-400 bg-white text-primary-500 underline lg:hidden"
        onClick={handleLogout}
      >
        로그아웃
      </button>
    </div>
  );
};

export default CurrentSituation;

const users = [
  { work: "완료", num: 1 },
  { work: "참여중", num: 2 },
  { work: "개설", num: 3 },
];

const studyStatus = [];

// RECRUIT
//   PROGRESS
//   COMPLETE
