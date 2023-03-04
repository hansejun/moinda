import { IAttendance } from "./attendance";
import { User } from "@prisma/client";
import { IStudy } from "./study";
import { IUser } from "./user";

export interface IProfileResponse extends IUser {
  attendance: IAttendance;
  studyList: IStudy[];
}

export interface IEditProfileRequest {
  nickname?: string;
  avatarImg?: string;
}
