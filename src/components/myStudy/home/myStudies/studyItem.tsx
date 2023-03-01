import Icons, { TNumber, iconBackgrounds } from "@elements/icon";

import ArrowSvg from "@assets/svg/arrowSvg";
import CategorySvg from "@assets/svg/categorySvg";
import cls from "@utils/client/cls";
import GroupSvg from "@assets/svg/groupSvg";
import Image from "next/image";
import { IMyStudy } from "@allTypes/studyRoom";
import { getStudyCategory } from "@utils/client/getEnum";

interface MyStudyItemProps {
  onClick?: () => void;
  isCurrent: boolean;
  isActive?: boolean;
  icon?: TNumber;
  myStudy: IMyStudy;
}

const StudyItem = ({
  onClick,
  isCurrent,
  isActive,
  icon,
  myStudy,
}: MyStudyItemProps) => {
  return (
    <div
      className={cls(
        "grid grid-cols-2 rounded-[1rem] bg-bgColor-100",
        isCurrent
          ? "p-[1.3rem_3rem] ring-1"
          : "p-[1.3rem_1.8rem] hover:cursor-pointer hover:bg-[#F7F6F6]",
        isActive && isCurrent ? "ring-primary-main" : "ring-primary-200"
      )}
      onClick={!isCurrent ? onClick : () => {}}
    >
      <div className="flex items-center space-x-[1.6rem]">
        <div
          className={`flex-center h-[5.4rem] w-[5.4rem] rounded-[1.2rem] ${
            iconBackgrounds[myStudy?.icon]
          }`}
        >
          <Image
            className=" h-[3rem] w-[3rem]"
            src={Icons[myStudy?.icon]}
            alt="아이콘"
            width={30}
            height={30}
            priority
          />
        </div>
        <div className="flex flex-col justify-between py-[0.2rem]">
          <h3 className="Sub2">토익 900 달성 스터디</h3>
          <ul className="flex min-h-[2rem] space-x-[0.5rem]">
            {myStudy?.hashTagList?.map((hashTag) => (
              <li key={hashTag?.id} className="Cap4 text-primary-500">
                #{hashTag?.tagName}
              </li>
            ))}
            {!myStudy?.hashTagList?.length && (
              <li className="Cap4 text-primary-500">해시태그 없음</li>
            )}
          </ul>
        </div>
      </div>
      <div className="flex items-center  space-x-[2rem] text-primary-500">
        <span className="Cap3 flex items-center ">
          <GroupSvg className="mr-[0.6rem] h-[2rem] w-[2rem]" />
          {myStudy?._count?.memberList}명 참여중
        </span>
        <span className="Cap3 flex items-center  text-primary-500">
          <CategorySvg className="mr-[0.6rem] w-[2rem]" />
          {getStudyCategory[myStudy?.category]}
        </span>
        <span
          className="flex flex-1 cursor-pointer justify-end text-primary-500"
          onClick={isCurrent ? onClick : () => {}}
        >
          {isCurrent && (
            <ArrowSvg
              className={cls(
                "w-[2.2rem] text-primary-700 transition-transform duration-300",
                isActive ? "rotate-90" : "rotate-[-90deg]"
              )}
            />
          )}
        </span>
      </div>
    </div>
  );
};

export default StudyItem;
