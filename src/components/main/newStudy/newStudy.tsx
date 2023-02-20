import studyApi from "@apis/query/studyApi";
import { MatinCategoryAtom } from "@atoms/studyAtom";
import StudyCard from "@components/studyCommon/studyCard";

const NewStudy = () => {
  const { data: studyList } = studyApi.ReadNewStudyList({
    category: "TOTAL",
    count: 4,
  });

  return (
    <div className="flex flex-col space-y-[1.8rem]">
      <div className="flex justify-between">
        <h2 className="H2 text-primary-600">새로 생긴 스터디그룹</h2>
        <button className="Cap1 text-primary-500 self-end">더보기</button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] gap-[2.6rem] ">
        {studyList?.map((study) => (
          <StudyCard key={study?.id} study={study} />
        ))}
      </div>
    </div>
  );
};

export default NewStudy;
