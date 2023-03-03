import { IEditProfileRequest } from "./../../allTypes/profile";
import { IProfileResponse } from "@allTypes/profile";
import instance from "@apis/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

/** 프로필 정보 조회 */
const ReadUser = () => {
  return useQuery<IProfileResponse>(
    ["mypage"],
    async () => {
      const response = await instance.get(`/api/mypage`);
      return response.data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};

/** 프로필 수정 */
const EditUser = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ nickname, avatarImg }: IEditProfileRequest) => {
      const response = await instance.put(`/api/mypage/edit`, {
        nickname,
        avatarImg,
      });
      return response;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["mypage"]),
    }
  );
};

/** 내 목표시간 설정 */
const SetTargetTime = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ targetTime }: { targetTime: number }) => {
      const response = await instance.put(`/api/mypage/targetTime`, {
        targetTime,
      });
      return response;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["mypage"]),
    }
  );
};

const profileApi = { ReadUser, EditUser, SetTargetTime };

export default profileApi;
