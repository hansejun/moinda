import { IUserAtom } from "./../allTypes/atom";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "persistUser",
  storage: sessionStorage,
});

export const userAtom = atom({
  key: "loginUser",
  default: {},
  effects_UNSTABLE: [persistAtom],
});
