import ArrowSvg from "@assets/svg/arrowSvg";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FakeMemberList = () => {
  return (
    <div className="flex h-full flex-col ">
      <div className="grid grid-cols-[6fr_8.6fr_8.6fr] px-[0.6rem]">
        {Headers.map((title: string) => (
          <h2 key={title} className="Sub2 text-primary-500">
            {title}
          </h2>
        ))}
      </div>
      <ul className="flex flex-col ">
        {[1, 2, 3, 4, 5].map((item) => (
          <li
            key={item}
            className="grid grid-cols-[6fr_8.6fr_8.6fr] items-center border-b p-[2.2rem_1.1rem] last:border-none last:pb-0"
          >
            <Skeleton width="3rem" height="3rem" borderRadius="0.5rem" />
            <Skeleton className="Cap4" width="5.5rem" />
            <Skeleton className="Cap4 text-center" />
          </li>
        ))}
      </ul>
      <div className="Sub2 mt-[1.5rem]  flex flex-1  cursor-pointer items-end space-x-[0.3rem]   pt-[0.6rem] text-primary-500">
        <div className="flex-center w-full">
          <span>더보기</span>
          <ArrowSvg className="w-[2.2rem] rotate-[-90deg]" strokeWidth="2.3" />
        </div>
      </div>
    </div>
  );
};

export default FakeMemberList;

const Headers = ["닉네임", "출석시간", "오늘 공부 시간"];
