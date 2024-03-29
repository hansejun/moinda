import studyApi from "@apis/query/studyApi";
import { studyCategoryAtom } from "@atoms/studyAtom";
import dynamic from "next/dynamic";

const FakeBestStudyList = dynamic(
  () => import("@components/skeleton/home/FakeBestStudyList")
);

import Link from "next/link";
import React from "react";
import { useRecoilValue } from "recoil";
import BestStudyCard from "./bestStudyCard";

const BestStudyList = () => {
  const category = useRecoilValue(studyCategoryAtom);
  const { data: studyList, isLoading } = studyApi.ReadRecommendStudyList({
    category: category,
    count: 5,
  });
  if (isLoading) return <FakeBestStudyList length={5} />;
  return (
    <div className="flex flex-col space-y-[1.3rem]">
      <h2 className="H2 text-primary-600">카테고리 별 인기스터디</h2>
      <div className="grid grid-rows-[repeat(5,8.6rem)] gap-[1.3rem]">
        {studyList?.map((study, i) => (
          <Link key={study?.id} href={`/study/${study?.id}`} passHref>
            <BestStudyCard color={COLORS[i]} key={study?.id} study={study} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BestStudyList;

const COLORS = ["#FFA07D", "#94B7F7", "#F5BEBE", "#F7D594", "#B0F47B"];
