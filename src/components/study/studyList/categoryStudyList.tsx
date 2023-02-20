import studyApi from "@apis/query/studyApi";
import { studyCategoryAtom } from "@atoms/studyAtom";
import StudyCard from "@components/studyCommon/studyCard";
import { NextPage } from "next";
import Link from "next/link";
import { useRecoilValue } from "recoil";

const CategoryStudyList: NextPage = () => {
  const category = useRecoilValue(studyCategoryAtom);

  const { data: studyList } = studyApi.ReadNewStudyList({
    category: category || "TOTAL",
    count: 8,
    page: 1,
  });

  return (
    <div className="flex flex-col space-y-[1.8rem]">
      <h2 className="H2 text-primary-600">새로 생긴 스터디그룹</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(25rem,1fr))] gap-[2.6rem] ">
        {studyList?.map((study) => (
          <Link href={`/study/${study.id}`} key={study.id} passHref>
            <StudyCard study={study} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryStudyList;
