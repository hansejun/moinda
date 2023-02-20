import { IStudyWithUser } from "@allTypes/study";

import EmptyHeart from "@assets/svg/emptyHeart";
import EyesSvg from "@assets/svg/eyesSvg";

import Icons from "@elements/icon";
import dayjs from "dayjs";
import Image from "next/image";

// h-[27.6rem] w-[32.8rem]
const StudyCard = ({ study }: { study: IStudyWithUser }) => {
  return (
    <div className="rounded-[1.4rem] bg-[#F4F4F4] p-[2.8rem_3rem] flex flex-col cursor-pointer">
      <p className="Cap4 text-primary-500 mb-[2.2rem]">
        스터디 시작일 &nbsp; | &nbsp;{" "}
        {dayjs(study?.createdAt).format("YYYY.MM.DD")}
      </p>
      <p className="H3 mb-[0.4rem]">{study?.title}</p>
      <p className="Cap1 text-primary-500 mb-[3.4rem]">{study?.studyName}</p>
      <span className="w-[50%] max-w-[5rem] nm:max-w-[5.8rem] ">
        <Image
          src={Icons[study?.icon || "1"]}
          alt="icon"
          width={60}
          height={60}
          priority={true}
        />
      </span>
      <div className="Cap4 mt-[2rem] flex justify-between items-center">
        <div className="flex items-center space-x-[1rem]">
          {study?.user?.avatarImg ? (
            <Image
              className="w-[3rem] h-[3rem] rounded-full"
              src={study.user.avatarImg}
              alt="icon"
              width={25}
              height={25}
              priority={true}
            />
          ) : (
            <Image
              src={`https://avatars.dicebear.com/api/identicon/${
                study?.user?.id + "" || "1"
              }/wooncloud.svg`}
              className="w-[3rem] h-[3rem] rounded-full"
              alt="icon"
              width={25}
              height={25}
              priority={true}
            />
          )}

          <span className="text-primary-700">{study?.user?.nickname}</span>
        </div>

        <div className="flex space-x-[1.4rem] items-center text-primary-500">
          <div className="flex space-x-[0.8rem] items-center">
            <EyesSvg className="w-[2rem]" />
            <span>{study?.views}</span>
          </div>
          <div className="flex space-x-[0.8rem] items-center">
            <EmptyHeart className="w-[2rem]" />
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyCard;
