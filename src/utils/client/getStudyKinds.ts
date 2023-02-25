import { IStudy } from "@allTypes/study";

interface IInitial {
  [key: string]: number;
}

/** 스터디 종류 */
const getStudyKinds = (studyList: IStudy[], id: string) => {
  let initial: IInitial = { 완료: 0, 참여중: 0, 개설: 0 };

  studyList?.forEach((study) => {
    if (study.studyStatus === "COMPLETE") {
      initial["완료"] += 1;
    } else if (study.studyStatus !== "COMPLETE" && study?.userId === +id) {
      initial["개설"] += 1;
    } else {
      initial["참여중"] += 1;
    }
  });
  return initial;
};

export default getStudyKinds;
