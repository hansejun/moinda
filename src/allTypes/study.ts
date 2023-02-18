import { TNumber } from "@elements/icon";

export interface IHashtag {
  id: number;
  studyId: number;
  tagName: string;
}

export interface IStudy {
  id: number;
  userId: number;
  title: string;
  category: string;
  studyName: string;
  content: string;
  icon: number;
  studyStatus: string;
  targetTime: number;
  tel: string;
  views: number;
  startDate: Date;
  createdAt: Date;
  updatedAt: Date;
  hashTagList: IHashtag[];
}

export interface IWrite {
  icon: TNumber;
  title: string;
  studyName: string;
  category: string;
  tel: string;
  hashTag: string;
  startDate: Date;
  content: string;
}
