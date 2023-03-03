import { IHeaderProps } from "@allTypes/props";
import BellSvg from "@assets/svg/bellSvg";
import SearchSvg from "@assets/svg/searchSvg";
import AlarmModal from "@components/common/alarm/alarmModal";
import cls from "@utils/client/cls";
import getImageUrl from "@utils/client/getImageUrl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

function Header({ loginUser }: IHeaderProps) {
  const [isLogin, setIsLogin] = useState(false);
  const [isAlarmOpen, setIsAlarmOpen] = useState(false);

  const router = useRouter();

  // login 확인
  useEffect(() => {
    if (loginUser) {
      if (loginUser?.id) {
        setIsLogin(true);
      }
    }
  }, [loginUser]);

  // 다른 페이지로 이동
  const handleNavigate = useCallback(
    (pathname: string) => {
      if (pathname === "/mypage") {
        if (isLogin) {
          router.push("/mypage");
        } else {
          alert("로그인이 필요한 서비스입니다.");
          router.push("/start/signin");
        }
      } else {
        router.push(pathname);
      }
    },
    [router, isLogin]
  );

  return (
    <header className="fixed top-0 z-[100] w-full border-b bg-primary-100">
      <div className="flex-between header-height mx-auto  w-full px-[3rem] lg:w-[144rem] lg:px-0">
        <nav className="flex items-center">
          <Link href="/" passHref>
            <span className="mr-[4.2rem] text-[2.4rem] font-bold text-primary-main">
              MOINDA
            </span>
          </Link>
          <ul className="hidden md:flex md:space-x-[3.6rem]">
            {navs.map((nav) => (
              <li
                key={nav.id}
                className={cls(
                  styles.navItem,
                  router.pathname === nav.pathname
                    ? styles.activeItem
                    : "Sub2 border-transparent"
                )}
                onClick={() => handleNavigate(nav.pathname)}
              >
                {nav.name}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex">
          <form className="flex">
            <label className="relative mr-[2.2rem] hidden h-[4.2rem] min-w-[25rem] max-w-[35.6rem] items-center nm:flex nm:w-[20vw]">
              <SearchSvg className="absolute w-[1.8rem] translate-x-7 text-primary-500" />
              <input
                type="text"
                className="Cap1 h-full w-full rounded-full border-none bg-[#F6F6F6] pl-[4.8rem] placeholder:text-primary-500"
                placeholder="UX 디자이너 스터디"
              />
            </label>
          </form>
          {isLogin ? (
            <>
              <button
                className="Cap2 flex-center h-[4.3rem] w-[12.8rem] rounded-full bg-primary-main text-primary-100"
                onClick={() => router.push("/study/write")}
              >
                스터디 모집하기
              </button>
              <span className="flex-center relative mx-[1.6rem] w-[2.1rem]">
                <span
                  onClick={() => setIsAlarmOpen((prev) => !prev)}
                  className="flex-center relative h-[3rem] w-[3rem] cursor-pointer p-2  hover:text-primary-500"
                >
                  <BellSvg className="h-[2.5rem] w-[2.5rem]" />
                  <span className=" absolute right-[0.4rem] bottom-[0.4rem] h-[0.9rem] w-[0.9rem] cursor-pointer rounded-full bg-primary-main"></span>
                </span>

                {isAlarmOpen && <AlarmModal setIsAlarmOpen={setIsAlarmOpen} />}
              </span>
              {loginUser?.avatarImg ? (
                <Image
                  width={40}
                  height={40}
                  className="aspect-square w-[4.3rem] cursor-pointer rounded-full"
                  src={getImageUrl(loginUser?.avatarImg)}
                  alt="profile"
                  onClick={() => handleNavigate(`/mypage`)}
                  priority={true}
                />
              ) : (
                <div
                  className="flex-center Cap4 aspect-square w-[4.3rem] cursor-pointer rounded-full
                    bg-[#9DA9B4]"
                  onClick={() => handleNavigate(`/mypage`)}
                >
                  {loginUser?.nickname.slice(0, 2)}
                </div>
              )}
            </>
          ) : (
            <button
              className="Cap2 flex-center bg-primary-ㅡmain h-[4.3rem] w-[7rem] cursor-pointer rounded-full bg-primary-main text-primary-100"
              onClick={() => router.push("/start/signin")}
            >
              로그인
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

const styles = {
  navItem:
    "h-[6rem] flex-center px-1  mb-[-3px] border-b-[3px] cursor-pointer ",
  activeItem: "Sub1 border-primary-main ",
};

const navs = [
  { id: 0, name: "홈", pathname: "/" },
  { id: 1, name: "마이페이지", pathname: `/mypage` },
  { id: 2, name: "스터디 게시판", pathname: "/study" },
];

// Children ! React.Children

export default Header;
