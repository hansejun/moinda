import { IProfileResponse } from "@allTypes/profile";
import CameraSvg from "@assets/svg/cameraSvg";
import CancelSvg from "@assets/svg/cancelSvg";
import Image from "next/image";
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import { nicknameValid } from "@utils/client/valids";
import profileApi from "@apis/query/profile";
import axios from "axios";
import getImageUrl from "@utils/client/getImageUrl";
interface IProfileModal {
  setIsSetting: Dispatch<SetStateAction<boolean>>;
  user: IProfileResponse;
}

type TProfileEditData = {
  nickname?: string;
  avatarImg?: FileList;
};

const ProfileEditModal = ({ setIsSetting, user }: IProfileModal) => {
  const { register, setValue, handleSubmit, watch } =
    useForm<TProfileEditData>();
  const [avatarPreview, setAvatarPreview] = useState("");
  const { mutate: editProfile } = profileApi.EditUser(user?.id + "");
  const avatarImg = watch("avatarImg");

  // 모달 종료
  const onClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsSetting(false);
    },
    [setIsSetting]
  );

  const onValid = useCallback(
    async ({ nickname, avatarImg }: TProfileEditData) => {
      if (avatarImg && avatarImg.length > 0) {
        const {
          data: { uploadURL },
        } = await axios.get(`/api/files`);

        const form = new FormData();
        form.append("file", avatarImg[0]);
        const {
          data: {
            result: { id },
          },
        } = await axios.post(uploadURL, form);
        editProfile({ nickname, avatarImg: id });
      } else {
        editProfile({ nickname });
      }
      setIsSetting(false);
    },
    [editProfile, setIsSetting]
  );

  useEffect(() => {
    if (user?.nickname) setValue("nickname", user.nickname);
    if (user?.avatarImg) setAvatarPreview(getImageUrl(user.avatarImg));
  }, [setValue, user]);

  useEffect(() => {
    if (avatarImg && avatarImg.length > 0) {
      const file = avatarImg[0];
      setAvatarPreview(URL.createObjectURL(file));
    }
  }, [avatarImg]);

  return (
    <div
      className="flex-center fixed right-0 top-0 bottom-0 left-0 z-[999] bg-[rgba(0,0,0,0.3)]"
      onClick={onClick}
    >
      <form
        className="flex min-h-[39rem] w-[41.2rem] flex-col items-center rounded-[1rem] bg-white p-[3rem]"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit(onValid)}
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
          {avatarPreview ? (
            <Image
              className={
                " h-[9.6rem] w-[9.6rem]  rounded-full bg-white object-cover"
              }
              src={avatarPreview}
              alt="avatar"
              width={60}
              height={60}
              priority={true}
            />
          ) : (
            <div
              className="flex-center  aspect-square w-[9.6rem] cursor-pointer rounded-full
                bg-primary-sub1 text-[3rem]"
            >
              {user?.nickname.slice(0, 2)}
            </div>
          )}
          <label className="flex-center absolute right-0 bottom-0 aspect-square w-[3.5rem] cursor-pointer rounded-full border border-[#BDBDBD] bg-primary-100 transition-colors hover:bg-primary-200">
            <CameraSvg className="w-[2rem]" />
            <input type="file" className="hidden" {...register("avatarImg")} />
          </label>
        </div>
        <label className="mb-[3rem] flex w-full flex-col space-y-[1rem]">
          <span className="Cap2 text-primary-500">닉네임</span>
          <input
            {...register("nickname", nicknameValid())}
            className="Cap1 rounded-[0.4rem] border border-primary-200 p-[1.8rem_1.3rem] outline-none focus:border-primary-main"
            placeholder="닉네임을 입력해주세요"
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
