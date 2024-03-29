import { logout } from "@apis/query/userApi";
import { useRouter } from "next/router";
import { useCallback } from "react";

const LogoutBtn = () => {
  const router = useRouter();

  const handleLogout = useCallback(async () => {
    await logout();
    router.push("/");
  }, [router]);

  return (
    <button
      className="Sub2 block  h-[6.8rem]  rounded-[1rem] bg-white text-primary-500 underline"
      onClick={handleLogout}
    >
      로그아웃
    </button>
  );
};

export default LogoutBtn;
