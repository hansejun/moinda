import Icons, { iconBackgrounds } from "@elements/icon";
import cls from "@utils/client/cls";
import Image from "next/image";
import React from "react";

const ApproveItem = () => {
  return (
    <li className="flex space-x-[1.5rem] border-b py-[2.4rem] last:border-none">
      <div
        className={cls(
          "flex-center aspect-square h-[4.3rem] w-[4.3rem] rounded-[1rem]",
          iconBackgrounds[13]
        )}
      >
        <Image
          className="w-[3rem]"
          src={Icons[13]}
          alt="icon"
          width={30}
          height={30}
          priority
        />
      </div>
      <div className="flex flex-col">
        <span className="text-[1.2rem] text-primary-500">3시간 전</span>
        <p className="Cap2 mb-[0.8rem]">
          [토익 900 달성 스터디] 스터디 가입 요청이 수락되었어요. 스터디원들과
          모여봐요!
        </p>
        <button className="flex-center Cap3 h-[3.8rem] w-[13.5rem] rounded-[0.4rem] bg-primary-main text-white transition-colors hover:bg-[#e95845]">
          스터디룸 보러가기
        </button>
      </div>
    </li>
  );
};

export default ApproveItem;
