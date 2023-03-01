import StudyRoomApi from "@apis/query/studyRoomApi";
import { TNumber } from "@elements/icon";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import OhterStudyList from "./ohterStudyList";

import StudyItem from "./studyItem";

const StudyListSection = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: myStudyData } = StudyRoomApi.ReadStudy(id + "");
  const [isSpread, setIsSpread] = useState(false);

  const handleToggle = useCallback(() => {
    setIsSpread((prev) => !prev);
  }, []);

  // const handleNavigate = useCallback(
  //   (num: string) => {
  //     router.push(`/myStudy/${num}`);
  //   },
  //   [router]
  // );

  // ArrowSvg 클릭 시에 내가 속한 그룹 정보들 조회
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

      {isSpread && <OhterStudyList id={myStudyData?.id + ""} />}
    </section>
  );
};

export default StudyListSection;

const data: TNumber[] = [1, 2, 3, 4, 5];
