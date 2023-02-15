import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setAccessToken = (accessToken: string) => {
  return cookies.set("accessToken", accessToken, {
    sameSite: "strict",
    path: "/",
  });
};

export const getAccessToken = () => {
  return cookies.get("Authorization");
};

export const setRefreshToken = (refreshToken: string) => {
  return cookies.set("refreshToken", refreshToken, {
    sameSite: "strict",
    path: "/",
  });
};

export const getRefreshToken = () => {
  return cookies.get("refreshToken");
};

export const removeCookieToken = () => {
  return cookies.remove("Authorization", { sameSite: "strict", path: "/" });
};
