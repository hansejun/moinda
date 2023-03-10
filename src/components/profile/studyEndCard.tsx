import CategorySvg from "@assets/svg/categorySvg";

import GroupSvg from "@assets/svg/groupSvg";
import Icons from "@elements/icon";
import Image from "next/image";

const StudyEndCard = () => {
  return (
    <div className="mb-[1.6rem] flex flex-row">
      <div className="flex h-[11.8rem] w-[34.9rem] flex-row items-center rounded-[1.4rem] border border-solid border-primary-350 bg-primary-250">
        <div className="flex-center mx-[1.6rem] h-[5.4rem] w-[5.4rem] rounded-[1.2rem] bg-[#B3B3B3]">
          <Image
            src={Icons[5]}
            alt="이미지"
            width={20}
            height={20}
            className="w-[4rem]"
          />
        </div>
        <div className="ml-[1.5rem]">
          <p className="Sub2">토익 900 달성 스터디</p>
          <p className="Cap4 text-primary-500">#어학 #매일피드백 #700이상</p>
          <div className="Cap3 mt-[1.2rem] flex text-primary-500">
            <div className="flex-center">
              <GroupSvg className="mr-[0.6rem] h-[2rem] w-[2rem] " />
              <span>4명 참여중</span>
            </div>
            <div className="flex-center ml-9">
              <CategorySvg className="mr-[0.6rem] h-[2rem] w-[2rem] " />
              <span>어학</span>
            </div>
          </div>
        </div>
      </div>
      <div className="Sub2 flex-center ml-[3rem] flex-col text-primary-600">
        <p className="underline">스터디원 평가</p>
        <p className="mt-[0.4rem]">완료 2/8</p>
      </div>
    </div>
  );
};

export default StudyEndCard;
