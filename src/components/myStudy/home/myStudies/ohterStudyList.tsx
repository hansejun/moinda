import StudyRoomApi from "@apis/query/studyRoomApi";
import Link from "next/link";
import React from "react";
import StudyItem from "./studyItem";

interface IOtherStudyListProps {
  id: string;
}

const OhterStudyList = ({ id }: IOtherStudyListProps) => {
  const { data: myStudyList } = StudyRoomApi.ReadStudyList();
  return (
    <div className="absolute top-[8.4rem] z-10 flex w-full select-none flex-col rounded-[1rem] bg-bgColor-100 p-[1.2rem] shadow-[0.2rem_0.8rem_1.8rem_rgba(0,0,0,0.13)]">
      {myStudyList &&
        myStudyList
          ?.filter((study) => study?.id + "" !== id)
          ?.map((study) => (
            <Link key={study.id} href={`/myStudy/${study?.id}`} passHref>
              <StudyItem
                isCurrent={false}
                isActive={false}
                icon={study?.icon}
                myStudy={study}
              />
            </Link>
          ))}
      {(myStudyList?.length || 1) < 2 && (
        <li className="height Cap1 grid grid-cols-2 rounded-[1rem] bg-bgColor-100">
          스터디가 존재하지 않습니다.
        </li>
      )}
    </div>
  );
};

export default OhterStudyList;
