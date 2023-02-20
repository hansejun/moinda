import type { TCategory } from "@allTypes/study";
import { atom } from "recoil";

/** 스터디 게시판 카테고리  */
export const studyCategoryAtom = atom<TCategory>({
  key: "studyCategory",
  default: "TOTAL",
});
