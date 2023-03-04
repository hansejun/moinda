import { IMyStudy } from "@allTypes/studyRoom";
import { TNumber } from "@elements/icon";
import { useCallback, useState } from "react";
import OhterStudyList from "./ohterStudyList";
import StudyItem from "./studyItem";

interface IProps {
  myStudyData: IMyStudy;
}

const StudyListSection = ({ myStudyData }: IProps) => {
  const [isSpread, setIsSpread] = useState(false);

  // 리스트 보여주기 / 끄기
  const handleToggle = useCallback(() => {
    setIsSpread((prev) => !prev);
  }, []);

  // 리스트 닫기
  const handleCloseList = useCallback(() => {
    setIsSpread(false);
  }, []);

  return (
    <section className="relative flex flex-col space-y-[0.6rem]">
      {myStudyData && (
        <StudyItem
          onClick={handleToggle}
          isCurrent
          isActive={isSpread}
          myStudy={myStudyData}
        />
      )}

      {isSpread && (
        <OhterStudyList onClick={handleCloseList} id={myStudyData?.id + ""} />
      )}
    </section>
  );
};

export default StudyListSection;

const data: TNumber[] = [1, 2, 3, 4, 5];
