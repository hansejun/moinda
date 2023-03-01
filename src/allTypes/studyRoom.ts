import { TNumber } from "@elements/icon";
import { IHashtag, TStudyCategory } from "./study";

export type TStudyStatus = "모집중" | "진행중" | "완료";
export type TStudyKey = "RECRUIT" | "PROGRESS" | "COMPLETE";
export interface IStudyStatus {
  status: TStudyStatus;
  color: string;
  style: string;
  value: TStudyKey;
}

/** 스터디 일지 */
export interface IDiary {
  id: string;
  userId: number;
  nickname: string;
  avatarImg: string;
  content: string;
  createdAt: Date;
}

// 나의 스터디
export interface IMyStudy {
  id: string;
  hostUserId: string;
  category: TStudyCategory; //enum
  studyName: string;
  icon: TNumber;
  studyStatus: TStudyStatus; // enum
  targetTime: number;
  _count: {
    memberList: number;
  }; // 참여중인 멤버수
  hashTagList: IHashtag[]; // 해시태그 배열
}

// 나의 스터디 목록 item들 (member로 조회)
export interface IMyStudyWithMember {
  id: number;
  userId: number;
  studyId: number;
  study: IMyStudy;
}

// 목표시간 props
export interface ITargetTimeProps {
  studyId: string;
  targetTime: number;
}

// 맴버 모양
export interface IMember {
  id: string;
  userId: string;
  nickname: string;
  avatarImg: string;
  checkIn: Date;
  todayTime: number;
}
