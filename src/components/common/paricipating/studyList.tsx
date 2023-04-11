import StudyRoomApi from "@apis/query/studyRoomApi";
import AttendanceBtn from "@components/common/attendance/attendanceBtns";
import FakeParticipatingLists from "@components/skeleton/home/FakeParticipatingLists";
import Icons from "@elements/icon";
import Image from "next/image";
import { useRouter } from "next/router";
import ParticipatingStudyItem from "./studyItem";

const ParticipatingStudyList = () => {
  const router = useRouter();
  const { data: studyList, isLoading } = StudyRoomApi.ReadStudyList(3);

  if (isLoading) return <FakeParticipatingLists length={3} />;

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
        {studyList?.length === 0 && (
          <div className="Cap3 flex-center h-[11rem] flex-col space-y-[1rem] rounded-[1.4rem] border border-solid border-primary-350">
            <Image src={Icons[16]} width={20} height={20} alt="icon" priority />
            <span>참여중인 그룹이 없습니다.</span>
          </div>
        )}
        {studyList?.slice(0, 3)?.map((study) => (
          <ParticipatingStudyItem key={study?.id} study={study} />
        ))}
      </ul>
      <AttendanceBtn />
    </>
  );
};

export default ParticipatingStudyList;
