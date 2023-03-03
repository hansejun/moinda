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
        "group flex cursor-pointer items-center  justify-between rounded-[1.4rem] border border-solid border-primary-350  px-[1.6rem] py-[1.6rem] transition-colors hover:border-primary-500 nm:h-[11.8rem] nm:py-0"
      )}
      onClick={() => router.push(`/myStudy/${study?.id}`)}
    >
      <div className="flex items-center ">
        <div
          className={cls(
            "hidden aspect-square w-[5.4rem] items-center justify-center rounded-[1.2rem] nm:flex",
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
        <div className="flex flex-col nm:ml-[1.5rem]">
          <p className="Sub2">{study?.studyName}</p>
          <ul
            className={cls(
              "Cap4 flex space-x-[0.5rem] text-primary-500",
              "hidden nm:block"
            )}
          >
            {study?.hashTagList?.map((hashTag) => (
              <li key={hashTag?.id} className="Cap4 inline text-primary-500">
                #{hashTag?.tagName}
              </li>
            ))}
          </ul>
          <div
            className={cls("Cap3 mt-[1.2rem] hidden text-primary-500 nm:flex")}
          >
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

      <NextSvg className="mt-[-0.3rem] w-[2rem] text-primary-500 transition-colors group-hover:text-primary-600 nm:w-[2.4rem]" />
    </li>
  );
};

export default ParticipatingStudyItem;
