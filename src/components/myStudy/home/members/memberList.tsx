import StudyRoomApi from "@apis/query/studyRoomApi";
import ArrowSvg from "@assets/svg/arrowSvg";
import { useRouter } from "next/router";
import { Children } from "react";
import MemberItem from "./memberItem";

const MemberList = () => {
  // 더보기 클릭시에 17번 Users 데이터 추가;
  const router = useRouter();
  const { id } = router.query;
  const { data: members } = StudyRoomApi.ReadMemberList(id as string);
  return (
    <div className="flex h-full flex-col ">
      <div className="grid grid-cols-[6fr_8.6fr_8.6fr] px-[0.6rem]">
        {Headers.map((title: string) => (
          <h2 key={title} className="Sub2 text-primary-500">
            {title}
          </h2>
        ))}
      </div>
      <ul className="flex flex-col ">
        {Children.toArray(
          members?.map((member) => (
            <MemberItem key={member.id} user={member.user} />
          ))
        )}
      </ul>
      <div className="Sub2 mt-[1.5rem]  flex flex-1  cursor-pointer items-end space-x-[0.3rem]   pt-[0.6rem] text-primary-500">
        <div className="flex-center w-full">
          <span>더보기</span>
          <ArrowSvg className="w-[2.2rem] rotate-[-90deg]" strokeWidth="2.3" />
        </div>
      </div>
    </div>
  );
};

export default MemberList;

const Headers = ["닉네임", "출석시간", "오늘 공부 시간"];
