import { User } from "@prisma/client";
import { IStudy } from "./study";

export interface IProfileResponse extends User {
  attendance: unknown;
  studyList: IStudy[];
}
