import StudyRoomApi from "@apis/query/studyRoomApi";
import cls from "@utils/client/cls";
import { useRouter } from "next/router";
import ParticipatingStudyItem from "./studyItem";

const ParticipatingStudyList = () => {
  const router = useRouter();
  const { data: studyList } = StudyRoomApi.ReadStudyList(3);
  return (
    <>
      <div className="flex justify-between">
        <h2 className="H2 text-primary-600">참여 중인 스터디그룹</h2>
        <span
          className="Cap1 cursor-pointer self-end text-primary-500 hover:text-primary-600"
          onClick={() => router.push("/mypage")}
        >
          더보기
        </span>
      </div>
      <ul className="flex flex-col space-y-[1.6rem]">
        {studyList?.map((study) => (
          <ParticipatingStudyItem key={study?.id} study={study} />
        ))}
      </ul>
      <button
        className={cls(
          "Sub2 h-[6.8rem] rounded-[1rem] bg-primary-main text-white "
        )}
      >
        오늘 출석체크
      </button>
    </>
  );
};

export default ParticipatingStudyList;
