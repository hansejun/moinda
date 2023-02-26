import profileApi from "@apis/query/profile";
import CameraSvg from "@assets/svg/cameraSvg";
import CancelSvg from "@assets/svg/cancelSvg";
import SettingSvg from "@assets/svg/settingSvg";
import SmileSvg from "@assets/svg/smileSvg";
import Image from "next/image";
import { useCallback, useMemo, useState } from "react";

const ProfileCard = ({ id }: { id: string }) => {
  const { data: user } = profileApi.ReadUser(id as string);
  const [isSetting, setIsSetting] = useState(false);

  // 수정모드 on / off
  const handleSettingMode = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSetting((prev) => !prev);
  }, []);

  // 본인의 프로필 페이지인지 확인 boolean
  const isOwner = useMemo(() => {
    return user?.id === +id;
  }, [id, user]);

  return (
    <>
      <div className="h-[33rem] rounded-[1rem] bg-white px-[2.4rem] py-[3rem]">
        <div className="mb-[3rem] flex justify-between">
          <span className="H2">{isOwner ? "내 프로필" : "프로필"}</span>
          {isOwner && (
            <button onClick={handleSettingMode}>
              <SettingSvg className="w-[2.2rem] cursor-pointer" />
            </button>
          )}
        </div>
        <div className="grid grid-cols-2 gap-[2.6rem]">
          {user?.avatarImg ? (
            <Image
              className={
                "ml-[-2.4rem] h-[9.6rem] w-[9.6rem] justify-self-center rounded-full bg-white"
              }
              src={user?.avatarImg}
              alt="avatar"
              width={60}
              height={60}
              priority={true}
            />
          ) : (
            <Image
              className={
                "bg-primary-white ml-[-2.4rem] h-[9.6rem] w-[9.6rem] justify-self-center rounded-full"
              }
              src={`https://avatars.dicebear.com/api/identicon/${user?.id}/wooncloud.svg`}
              alt="avatar"
              width={60}
              height={60}
              priority={true}
            />
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
              <p className="H2 text-primary-600">0h {user?.totalTime}m</p>
            </div>
          </div>
        </div>
      </div>
      {isSetting && (
        <div
          className="flex-center fixed top-0 bottom-0 right-0 left-0 z-[999] bg-[rgba(0,0,0,0.3)]"
          onClick={handleSettingMode}
        >
          <form
            className="flex min-h-[39rem] w-[41.2rem] flex-col items-center rounded-[1rem] bg-white p-[3rem]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex w-full items-center justify-center">
              <h3 className="Sub1 block text-center">프로필 편집</h3>
              <button
                className="absolute right-0 justify-self-end hover:text-primary-500"
                onClick={handleSettingMode}
              >
                <CancelSvg className="w-[2rem]" />
              </button>
            </div>
            <div className="relative my-[2rem] flex">
              {user?.avatarImg ? (
                <Image
                  className={" h-[9.6rem] w-[9.6rem]  rounded-full bg-white"}
                  src={user?.avatarImg}
                  alt="avatar"
                  width={60}
                  height={60}
                  priority={true}
                />
              ) : (
                <Image
                  className={
                    "h-[9.6rem] w-[9.6rem]  rounded-full bg-primary-200"
                  }
                  src={`https://avatars.dicebear.com/api/identicon/${user?.id}/wooncloud.svg`}
                  alt="avatar"
                  width={60}
                  height={60}
                  priority={true}
                />
              )}
              <label className="flex-center absolute right-0 bottom-0 aspect-square w-[3.5rem] cursor-pointer rounded-full border border-[#BDBDBD] bg-primary-100 transition-colors hover:bg-primary-200">
                <CameraSvg className="w-[2rem]" />
                <input type="file" className="hidden" />
              </label>
            </div>
            <label className="mb-[3rem] flex w-full flex-col space-y-[1rem]">
              <span className="Cap2 text-primary-500">닉네임</span>
              <input
                className="Cap1 rounded-[0.4rem] border border-primary-200 p-[1.8rem_1.3rem] outline-none focus:border-primary-main"
                placeholder="닉네임을 입력해주세요"
              />
            </label>
            <button className="Sub2 w-full rounded-full bg-primary-main py-[1.8rem] text-white">
              편집 완료
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ProfileCard;
