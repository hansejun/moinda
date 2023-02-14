import StudyRoomApi from "@apis/query/studyRoomApi";
import { useRouter } from "next/router";
import { useParams } from "react-router-dom";
import ChatSection from "./chats/chatSection";
import MemberSection from "./members/memberSection";
import StudyListSection from "./myStudies/studyListSection";
import ProgressSection from "./progress/progressSection";

const GroupHome = () => {
  const router = useRouter();
  const studyId = router.query.params;
  const { data } = StudyRoomApi.ReadStudy(studyId + "");
  return (
    <div className="flex w-full  flex-col space-y-[2.6rem]">
      <StudyListSection />
      <ProgressSection />
      <div className="bg-slate- grid grid-cols-[3.58fr_5.34fr] gap-[2.6rem]">
        <MemberSection />
        <ChatSection />
      </div>
    </div>
  );
};

export default GroupHome;

// 8번줄 max-w-[59.3rem]