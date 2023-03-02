import React from "react";

const CheckItem = () => {
  return (
    <li className="grid grid-cols-[4.5fr_5fr] items-center border-b py-[2.4rem] last:border-none">
      <div className="flex items-center space-x-[1.5rem]">
        <div className="aspect-square w-[4.3rem] rounded-full bg-primary-300" />
        <div className="flex flex-col">
          <span className="text-[1.2rem] text-primary-500">2시간 전</span>
          <span className="Cap2">닉네임</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="Cap2">평점 4.2</span>
        <div className="relative grid h-[4.2rem] w-[12.6rem] grid-cols-2 rounded-[0.4rem] border border-primary-200">
          <button className="text-[1.5rem] font-semibold text-primary-main hover:text-[#e95845]">
            수락
          </button>
          <span className="absolute h-[2.6rem] w-[0.13rem] self-center justify-self-center bg-primary-200"></span>
          <button className="text-[1.5rem] text-primary-500 hover:text-primary-600">
            거절
          </button>
        </div>
      </div>
    </li>
  );
};

export default CheckItem;
