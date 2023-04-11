import studyApi from "@apis/query/studyApi";
import { studyCategoryAtom } from "@atoms/studyAtom";
import StudyCard from "@components/common/studyCard";
import FakeStudyList from "@components/skeleton/studyList/FakeStudyList";
import Link from "next/link";
import React from "react";
import { useRecoilValue } from "recoil";

const RecommendStudyList = () => {
  const category = useRecoilValue(studyCategoryAtom);
  const { data: studyList, isLoading } = studyApi.ReadRecommendStudyList({
    category: category,
    count: 3,
  });

  return (
    <div className="flex flex-col space-y-[1.8rem]">
      <h2 className="H2 text-primary-600">추천 스터디그룹</h2>
      {isLoading && <FakeStudyList length={2} />}
      <div className="grid max-h-[29.4rem] grid-cols-[repeat(auto-fill,minmax(25rem,1fr))] gap-[2.6rem] overflow-hidden">
        {studyList?.map((study) => (
          <Link key={study?.id} href={`/study/${study?.id}`} passHref>
            <StudyCard study={study} type="RECOMMEND" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecommendStudyList;
