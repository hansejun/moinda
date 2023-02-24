import SettingSvg from "@assets/svg/settingSvg";
import SmileSvg from "@assets/svg/smileSvg";

const ProfileCard = () => {
  return (
    <div className="h-[33rem] rounded-[1rem] bg-white px-[2.4rem] py-[3rem]">
      <div className="mb-[3rem] flex justify-between">
        <span className="H2">내 프로필</span>
        <SettingSvg className="w-[2.2rem] cursor-pointer" />
      </div>
      <div className="grid grid-cols-2 gap-[2.6rem]">
        <div className="ml-[-2.4rem] h-[9.6rem] w-[9.6rem] justify-self-center rounded-full bg-primary-sub1" />
        <div className="flex flex-col justify-center">
          <p className="H2 text-primary-600">닉네임 여기</p>
          <p className="Cap1 text-primary-500">emailhere@mail.com</p>
        </div>
      </div>
      <div className="gr mt-[3.8rem] grid grid-cols-2 gap-[2.6rem]">
        <div className="flex h-[8rem]   rounded-[1rem] bg-primary-sub3 py-[1.5rem] px-[1.7rem]">
          <div className="flex-center h-[4.6rem] w-[4.6rem] rounded-[1rem] bg-white">
            <SmileSvg className="w-[2.4rem]" />
          </div>
          <div className="ml-[1.3rem]">
            <p className="Cap3 text-primary-500">평가점수</p>
            <p className="H2 text-primary-600">4점</p>
          </div>
        </div>
        <div className="flex h-[8rem] rounded-[1rem] bg-primary-sub3 py-[1.5rem] pl-[1.7rem]">
          <div className="flex-center h-[4.6rem] w-[4.6rem] rounded-[1rem] bg-white">
            <SmileSvg className="h-[2.4rem] w-[2.4rem]" />
          </div>
          <div className="ml-[1.3rem]">
            <p className="Cap3 text-primary-500">누적 공부시간</p>
            <p className="H2 text-primary-600">900h 59m</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;