import { IProfileResponse } from "@allTypes/profile";
import CameraSvg from "@assets/svg/cameraSvg";
import CancelSvg from "@assets/svg/cancelSvg";
import useInput from "@hooks/useInput";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface IProfileModal {
  onClick: (e: React.MouseEvent) => void;
  user: IProfileResponse;
}

type TProfileEditData = {
  nickname: string;
};

const ProfileEditModal = ({ onClick, user }: IProfileModal) => {
  const { value, onChange, setValue } = useInput<TProfileEditData>({
    nickname: "",
  });

  const [profileImg, setProfileImg] = useState<string | null>(null);
  const [profileBlob, setProfileBlob] = useState<null | Blob>(null);

  useEffect(() => {
    if (user) {
      const { nickname, avatarImg } = user;

      setValue({ nickname });
    }
  }, [setValue, user]);

  return (
    <div
      className="flex-center fixed top-0 bottom-0 right-0 left-0 z-[999] bg-[rgba(0,0,0,0.3)]"
      onClick={onClick}
    >
      <form
        className="flex min-h-[39rem] w-[41.2rem] flex-col items-center rounded-[1rem] bg-white p-[3rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex w-full items-center justify-center">
          <h3 className="Sub1 block text-center">프로필 편집</h3>
          <button
            className="absolute right-0 justify-self-end hover:text-primary-500"
            onClick={onClick}
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
              className={"h-[9.6rem] w-[9.6rem]  rounded-full bg-primary-200"}
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
            value={value.nickname}
            name="nickname"
            onChange={onChange}
          />
        </label>
        <button className="Sub2 w-full rounded-full bg-primary-main py-[1.8rem] text-white">
          편집 완료
        </button>
      </form>
    </div>
  );
};

export default ProfileEditModal;
