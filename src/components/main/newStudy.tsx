import StudyCard from "@components/studyBoard/studyCard";

const NewStudy = () => {
  return (
    <div className="flex flex-col space-y-[1.8rem]">
      <div className="flex justify-between">
        <h2 className="H2 text-primary-600">새로 생긴 스터디그룹</h2>
        <button className="Cap1 text-primary-500 self-end">더보기</button>
      </div>
      <div className="grid grid-cols-2 gap-[2.6rem] ">
        <StudyCard />
        <StudyCard />
        <StudyCard />
      </div>
    </div>
  );
};

export default NewStudy;
