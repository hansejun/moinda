import { IHeaderProps } from "@allTypes/props";
import BellSvg from "@assets/svg/bellSvg";
import SearchSvg from "@assets/svg/searchSvg";
import cls from "@utils/client/cls";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

function Header({ loginUser }: IHeaderProps) {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (loginUser) {
      if (Object.hasOwn(loginUser, "id")) {
        setIsLogin(true);
      }
    }
  }, [loginUser]);

  const handleNavigate = useCallback(
    (pathname: string) => {
      if (pathname === "/profile") {
        if (isLogin) {
          router.push(pathname + `/${loginUser?.id}`);
        } else {
          alert("로그인이 필요한 서비스입니다.");
          router.push("/start/signin");
        }
      } else {
        router.push(pathname);
      }
    },
    [router, isLogin, loginUser]
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
            <label className="relative mr-[2.2rem] hidden h-[4.2rem] w-[35.6rem] items-center nm:flex">
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
              <span className="flex-center relative mx-[1.6rem] cursor-pointer p-2 hover:text-primary-500 w-[2.1rem]">
                <span>
                  <BellSvg className="w-[2.5rem] h-[2.5rem]" />
                </span>
                <span className="absolute right-[0rem] bottom-[1rem] h-[0.9rem] w-[0.9rem] rounded-full bg-primary-main"></span>
              </span>
              <Image
                width={0}
                height={0}
                className="aspect-square w-[4.3rem] cursor-pointer rounded-full"
                src="https://avatars.dicebear.com/api/identicon/2/wooncloud.svg"
                alt="profile"
                onClick={() => handleNavigate(`/profile/${loginUser?.id}`)}
              />
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
  { id: 1, name: "마이페이지", pathname: `/profile` },
  { id: 2, name: "스터디 게시판", pathname: "/study" },
];

// Children ! React.Children

export default Header;
