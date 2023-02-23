import studyApi from "@apis/query/studyApi";
import StudyCard from "@components/common/studyCard";
import Link from "next/link";

const NewStudy = () => {
  const { data: studyList } = studyApi.ReadNewStudyList({
    category: "TOTAL",
    count: 4,
  });

  return (
    <div className="flex flex-col space-y-[1.8rem]">
      <div className="flex justify-between">
        <h2 className="H2 text-primary-600">새로 생긴 스터디그룹</h2>
        <button className="Cap1 self-end text-primary-500">더보기</button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] gap-[2.6rem] ">
        {studyList?.map((study) => (
          <Link key={study?.id} href={`/study/${study?.id}`} passHref>
            <StudyCard key={study?.id} study={study} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewStudy;
