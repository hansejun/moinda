import { IStudyWithUser } from "@allTypes/study";

import EmptyHeart from "@assets/svg/emptyHeart";
import EyesSvg from "@assets/svg/eyesSvg";

import Icons from "@elements/icon";
import cls from "@utils/client/cls";
import dayjs from "dayjs";
import Image from "next/image";

const StudyCard = ({
  study,
  type = "COMMON",
}: {
  study: IStudyWithUser;
  type?: string;
}) => {
  return (
    <div
      className={cls(
        "flex  cursor-pointer flex-col rounded-[1.4rem] p-[2.8rem_3rem]",
        type === "RECOMMEND" ? "bg-[#FAEEEC]" : "bg-[#F4F4F4]"
      )}
    >
      <p className="Cap4 mb-[2.2rem] text-primary-500">
        스터디 시작일 &nbsp; | &nbsp;{" "}
        {dayjs(study?.createdAt).format("YYYY.MM.DD")}
      </p>
      <p className="H3 mb-[0.4rem]">{study?.title}</p>
      <p className="Cap1 mb-[3.4rem] text-primary-500">{study?.studyName}</p>
      <span className="w-[50%] max-w-[5rem] nm:max-w-[5.8rem] ">
        <Image
          src={Icons[study?.icon || "1"]}
          alt="icon"
          width={60}
          height={60}
          priority={true}
        />
      </span>
      <div className="Cap4 mt-[2rem] flex items-center justify-between">
        <div className="flex items-center space-x-[1rem]">
          {study?.user?.avatarImg ? (
            <Image
              className="h-[3rem] w-[3rem] rounded-full"
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
              className="h-[3rem] w-[3rem] rounded-full bg-white"
              alt="icon"
              width={25}
              height={25}
              priority={true}
            />
          )}

          <span className="text-primary-700">{study?.user?.nickname}</span>
        </div>

        <div className="flex items-center space-x-[1.4rem] text-primary-500">
          <div className="flex items-center space-x-[0.8rem]">
            <EyesSvg className="w-[2rem]" />
            <span>{study?.views}</span>
          </div>
          <div className="flex items-center space-x-[0.8rem]">
            <EmptyHeart className="w-[2rem]" />
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyCard;