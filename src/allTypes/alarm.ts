import { TNumber } from "@elements/icon";
type TAlarmState = "APPROVE" | "REFUSE" | "CHECK";

export interface IAlarm {
  id: number;
  studyId: number;
  senderId: number;
  receiverId: number;
  state: TAlarmState;
  createdAt: Date;
  user: {
    id: number;
    nickname: string;
    avatarImg: string | null;
    score: number;
  };
  study: {
    id: number;
    icon: TNumber;
    studyName: string;
  };
}

export interface IAlarmItemProps {
  alarm: IAlarm;
}
