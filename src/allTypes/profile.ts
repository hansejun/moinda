import { User } from "@prisma/client";
import { IStudy } from "./study";
import { IUser } from "./user";

export interface IProfileResponse extends IUser {
  attendance: unknown;
  studyList: IStudy[];
}
