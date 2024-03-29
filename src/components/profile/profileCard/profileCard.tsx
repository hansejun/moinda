import profileApi from "@apis/query/profile";
import SettingSvg from "@assets/svg/settingSvg";
import SmileSvg from "@assets/svg/smileSvg";
import getImageUrl from "@utils/client/getImageUrl";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import ProfileEditModal from "./profileEditModal";

const FakeProfileCard = dynamic(
  () => import("@components/skeleton/myPage/FakeProfileCard")
);

const ProfileCard = () => {
  const { data: user, isLoading } = profileApi.ReadUser();
  const [isSetting, setIsSetting] = useState(false);

  // 수정모드 on / off
  const handleSettingMode = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSetting((prev) => !prev);
  }, []);

  // 내 공부 시간
  const myStudyTime = useMemo(() => {
    if (!user) return "00h 00m";
    const time = (user.totalTime / 60) | 0;
    const hours = ((time / 60) | 0).toString().padStart(2, "0");
    const minutes = (time % 60).toString().padStart(2, "0");
    return `${hours}h ${minutes}m`;
  }, [user]);

  if (isLoading) return <FakeProfileCard />;

  return (
    <>
      <div className="h-[33rem] rounded-[1rem] bg-white px-[2.4rem] py-[3rem]">
        <div className="mb-[3rem] flex justify-between">
          <span className="H2">내 프로필</span>

          <button onClick={handleSettingMode}>
            <SettingSvg className="w-[2.2rem] cursor-pointer" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-[2.6rem]">
          {user?.avatarImg ? (
            <Image
              className={
                "ml-[-2.4rem] h-[9.6rem] w-[9.6rem] justify-self-center rounded-full bg-white object-cover"
              }
              src={getImageUrl(user?.avatarImg)}
              alt="avatar"
              width={120}
              height={120}
              priority={true}
            />
          ) : (
            <div
              className="flex-center ml-[2.4rem]  aspect-square w-[9.6rem] cursor-pointer rounded-full
                bg-primary-sub1 text-[3rem]"
            >
              {user?.nickname.slice(0, 2)}
            </div>
          )}

          <div className="flex flex-col justify-center">
            <p className="H2 text-primary-600">{user?.nickname}</p>
            <p className="Cap1 text-primary-500">{user?.email}</p>
          </div>
        </div>
        <div className="gr mt-[3.8rem] grid grid-cols-2 gap-[2.6rem]">
          <div className="flex h-[8rem]   rounded-[1rem] bg-primary-sub3 py-[1.5rem] px-[1.7rem]">
            <div className="flex-center h-[4.6rem] w-[4.6rem] rounded-[1rem] bg-white">
              <SmileSvg className="w-[2.4rem]" />
            </div>
            <div className="ml-[1.3rem]">
              <p className="Cap3 text-primary-500">평가점수</p>
              <p className="H2 text-primary-600">{user?.score}점</p>
            </div>
          </div>
          <div className="flex h-[8rem] rounded-[1rem] bg-primary-sub3 py-[1.5rem] pl-[1.7rem]">
            <div className="flex-center h-[4.6rem] w-[4.6rem] rounded-[1rem] bg-white">
              <SmileSvg className="h-[2.4rem] w-[2.4rem]" />
            </div>
            <div className="ml-[1.3rem]">
              <p className="Cap3 text-primary-500">누적 공부시간</p>
              <p className="H2 text-primary-600">{myStudyTime}</p>
            </div>
          </div>
        </div>
      </div>
      {user && isSetting && (
        <ProfileEditModal user={user} setIsSetting={setIsSetting} />
      )}
    </>
  );
};

export default ProfileCard;
