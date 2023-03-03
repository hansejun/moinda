import StudyRoomApi from "@apis/query/studyRoomApi";
import { useRouter } from "next/router";
import ChatSection from "./chats/chatSection";
import MemberSection from "./members/memberSection";
import StudyListSection from "./myStudies/studyListSection";
import ProgressSection from "./progress/progressSection";

const MyStudyHome = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: myStudyData } = StudyRoomApi.ReadStudy(id + "");
  return (
    <div className="flex w-full  flex-col space-y-[2.6rem]">
      <StudyListSection myStudyData={myStudyData!} />
      <ProgressSection />
      <div className="bg-slate- grid grid-cols-[3.58fr_5.34fr] gap-[2.6rem]">
        <MemberSection />
        <ChatSection />
      </div>
    </div>
  );
};

export default MyStudyHome;

// 8번줄 max-w-[59.3rem]
