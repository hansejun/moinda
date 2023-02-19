import Icons from "@elements/icon";
import Image from "next/image";

// h-[27.6rem] w-[32.8rem]
const StudyCard = () => {
  return (
    <div className="rounded-[1.4rem] bg-[#F4F4F4] p-[2.8rem_3rem] flex flex-col aspect-[33/28]">
      <p className="Cap4 text-primary-500 mb-[2.2rem]">
        스터디 시작일 &nbsp; | &nbsp; 2023.23.23
      </p>
      <p className="H3 mb-[0.4rem]">모집글 제목 들어가는 곳</p>
      <p className="Cap1 text-primary-500 mb-[3.4rem]">
        부가텍스트 및 스터디명 적는 곳
      </p>
      <span className="w-full min-w-[4rem] max-w-[5.8rem] ">
        <Image
          src={Icons[8]}
          alt="icon"
          width={60}
          height={60}
          priority={true}
        />
      </span>
      <div className="Cap4 mt-[2rem] flex justify-between text-primary-main">
        <span>IDhere</span>
        <div className="flex space-x-[1.4rem]">
          <span>조회</span>
          <span>댓글</span>
        </div>
      </div>
    </div>
  );
};

export default StudyCard;
