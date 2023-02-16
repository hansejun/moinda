import { useEffect } from "react";
import { useRouter } from "next/router";

import { ReadMe } from "./../apis/query/userApi";

interface IUserProps {
  isPrivate?: boolean;
}

const useUser = ({ isPrivate = true }: IUserProps) => {
  const { data, error } = ReadMe();
  const router = useRouter();

  useEffect(() => {
    if (isPrivate && error) {
      alert("로그인이 필요한 서비스 입니다.");
      router.push("/start/signin");
    }
  }, [router, isPrivate, error]);
  return data;
};

export default useUser;
