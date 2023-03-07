import { IMyStudy } from "@allTypes/studyRoom";
import CategorySvg from "@assets/svg/categorySvg";
import GroupSvg from "@assets/svg/groupSvg";
import NextSvg from "@assets/svg/nextSvg";
import Icons, { iconBackgrounds } from "@elements/icon";
import cls from "@utils/client/cls";
import { getStudyCategory } from "@utils/client/getEnum";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface IProps {
  study: IMyStudy;
}

const ParticipatingStudyItem = ({ study }: IProps) => {
  const router = useRouter();
  return (
    <li
      className={cls(
        "group flex h-[11.8rem] cursor-pointer  items-center justify-between rounded-[1.4rem] border border-solid  border-primary-350  px-[1.6rem] py-0 transition-colors hover:border-primary-500"
      )}
      onClick={() => router.push(`/myStudy/${study?.id}`)}
    >
      <div className="flex items-center ">
        <div
          className={cls(
            " flex aspect-square w-[5.4rem] items-center justify-center rounded-[1.2rem]",
            `${iconBackgrounds[study?.icon]}`
          )}
        >
          <span className="w-[4rem]">
            <Image
              src={Icons[study?.icon]}
              alt="icon"
              width={40}
              height={40}
              priority={true}
            />
          </span>
        </div>
        <div className="ml-[1.5rem] flex flex-col">
          <p className="Sub2">{study?.studyName}</p>
          <ul className={cls("Cap4 flex space-x-[0.5rem] text-primary-500")}>
            {study?.hashTagList?.map((hashTag) => (
              <li key={hashTag?.id} className="Cap4 inline text-primary-500">
                #{hashTag?.tagName}
              </li>
            ))}
          </ul>
          <div className={cls("Cap3 mt-[1.2rem]  flex text-primary-500")}>
            <div className="flex-center">
              <GroupSvg className="mr-[0.6rem] h-[2rem] w-[2rem] " />
              <span>{study?._count?.memberList}명 참여중</span>
            </div>
            <div className="flex-center ml-9">
              <CategorySvg className="mr-[0.6rem] h-[2rem] w-[2rem] " />
              <span>{getStudyCategory[study?.category]}</span>
            </div>
          </div>
        </div>
      </div>

      <NextSvg className="mt-[-0.3rem]  w-[2.4rem] text-primary-500 transition-colors group-hover:text-primary-600" />
    </li>
  );
};

export default ParticipatingStudyItem;
