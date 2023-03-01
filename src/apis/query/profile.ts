import { IEditProfileRequest } from "./../../allTypes/profile";
import { IProfileResponse } from "@allTypes/profile";
import instance from "@apis/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

/** 프로필 정보 조회 */
const ReadUser = (id: string) => {
  return useQuery<IProfileResponse>(
    ["profile", id],
    async () => {
      const response = await instance.get(`/api/profile/${id}`);
      return response.data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};

/** 프로필 수정 */
const EditUser = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ nickname, avatarImg }: IEditProfileRequest) => {
      const response = await instance.put(`/api/profile/edit`, {
        nickname,
        avatarImg,
      });
      return response;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["profile", id]),
    }
  );
};

const profileApi = { ReadUser, EditUser };

export default profileApi;
