import ArrowSvg from "@assets/svg/arrowSvg";
import Login from "@components/start/login";
import { useRouter } from "next/router";
import React from "react";

const Signin = () => {
  const router = useRouter();
  return (
    <div className="flex-center h-full bg-[#F6F6F6] sm:max-h-full sm:min-h-screen ">
      <div className=" flex h-screen  w-full flex-col bg-primary-100  sm:max-h-[83rem] sm:min-h-[81rem] sm:max-w-[41.2rem] sm:border sm:border-primary-400 ">
        <header className="relative flex items-center py-[1.4rem]">
          <span className="z-[1] pl-[2.2rem]" onClick={() => router.back()}>
            <ArrowSvg className="aspect-square w-[2.4rem] cursor-pointer hover:text-primary-500" />
          </span>
          <h1 className="absolute w-full text-center text-[2rem] font-medium text-primary-main">
            MOINDA
          </h1>
        </header>
        <main className="relative flex flex-col overflow-scroll p-[2.2rem] pt-[0px] scrollbar-hide">
          <Login />
        </main>
      </div>
    </div>
  );
};

export default Signin;
