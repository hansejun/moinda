import { removeCookieToken } from "@apis/cookie";
import { useRouter } from "next/router";
import { useCallback } from "react";

const LogoutBtn = () => {
  const router = useRouter();

  const handleLogout = useCallback(() => {
    removeCookieToken();
    router.push("/");
  }, [router]);

  return (
    <button
      className="Sub2 hidden h-[6.8rem] rounded-[1rem]  bg-white text-primary-500 underline lg:block"
      onClick={handleLogout}
    >
      로그아웃
    </button>
  );
};

export default LogoutBtn;
