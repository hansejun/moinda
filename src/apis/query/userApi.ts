import { ICheckEmail, ICheckNickname, IMe } from "@allTypes/user";
import { ILogin, ISignUp } from "allTypes/user";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import instance from "@apis/axios";

/** 회원가입 api */
export const signUp = async (data: ISignUp) => {
  const response = await axios.post("/api/user/signup", data);
  return response;
};
/** 로그인 api */
export const logIn = async (data: ILogin) => {
  const response = await axios.post("/api/user/signin", {
    ...data,
    userType: "LOCAL",
  });
  return response;
};

/** 이메일 중복검사 api */
export const checkEmail = async (email: ICheckEmail) => {
  const response = await axios.post("/api/user/checkEmail", email);
  return response;
};

/** 닉네임 중복검사 api */
export const checkNickname = async (data: ICheckNickname) => {
  const response = await axios.post("/api/user/checkNick", data);
  return response;
};

/** 로그인 정보 가져오는 api */
export const ReadMe = () => {
  return useQuery(
    ["loginUser"],
    async () => {
      const response = await axios.get("/api/user/me");
      return response.data;
    },
    {
      retry: 0,
      refetchOnWindowFocus: false,
    }
  );
};

export const ReadUser = (userId: number) =>
  useQuery<IMe>(
    ["user", userId],
    async () => {
      const { data } = await instance.get(``);
      return data;
    },
    {
      staleTime: 1000,
    }
  );
