import { IStudy } from "@allTypes/study";
import { getStudyStatus } from "@utils/client/getEnum";
import { GetDday } from "@utils/client/getTime";
import React from "react";

interface IBestStudyCardProps {
  color: string;
  study: IStudy;
}
const BestStudyCard = ({ color, study }: IBestStudyCardProps) => {
  return (
    <div className="flex h-[8.6rem] min-w-[65.6rem] cursor-pointer justify-between rounded-[1rem] bg-[#F7F6F6] px-[3rem] transition-colors hover:bg-orange-100">
      <div className="flex items-center space-x-[2rem]">
        <div className={`h-[3.6rem] w-[3.6rem] rounded-full bg-[${color}]`} />
        <div className="flex flex-col">
          <p className="Sub1 text-primary-600">{study?.studyName}</p>
          <p className="Cap4 text-primary-500">{study?.title}</p>
        </div>
      </div>
      <div className="Cap3 flex flex-col items-end justify-center">
        <p className="text-primary-500">{getStudyStatus[study?.studyStatus]}</p>
        <GetDday dateArg={study?.startDate} />
      </div>
    </div>
  );
};

export default BestStudyCard;
