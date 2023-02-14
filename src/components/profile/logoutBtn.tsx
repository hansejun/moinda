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
      className="Sub2 h-[6.8rem] w-[44.6rem] rounded-[1rem] bg-white text-primary-500 underline"
      onClick={handleLogout}
    >
      로그아웃
    </button>
  );
};

export default LogoutBtn;
