import studyApi from "@apis/query/studyApi";
import { studyCategoryAtom } from "@atoms/studyAtom";
import StudyCard from "@components/studyCommon/studyCard";
import React from "react";
import { useRecoilValue } from "recoil";

const RecommendStudyList = () => {
  const category = useRecoilValue(studyCategoryAtom);
  const { data: studyList } = studyApi.ReadRecommendStudyList({
    category: category,
    count: 2,
  });

  return (
    <div className="flex flex-col space-y-[1.8rem]">
      <h2 className="H2 text-primary-600">추천 스터디그룹</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(25rem,1fr))] gap-[2.6rem] max-h-[29.4rem] overflow-hidden">
        {studyList?.map((study) => (
          <StudyCard key={study?.id} study={study} />
        ))}
      </div>
    </div>
  );
};

export default RecommendStudyList;
