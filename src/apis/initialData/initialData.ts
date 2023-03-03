import { IMyStudy } from "@allTypes/studyRoom";

const myStudyInitialData: IMyStudy = {
  id: 0,
  userId: 0,
  category: "HOBBY",
  studyName: "",
  icon: 1,
  studyStatus: "RECRUIT",
  targetTime: 0,
  hashTagList: [],
  _count: {
    memberList: 0,
  },
};

const initialData = {
  myStudyInitialData,
};

export default initialData;
