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
  category: TCategory;
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
  hashTagList: string[];
  startDate: Date;
  content: string;
}

type TCategory = "LANGUAGE" | "EMPLOYMENT" | "HOBBY" | "PUBLIC" | "ETC";
