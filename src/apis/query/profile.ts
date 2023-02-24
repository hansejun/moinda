import { IProfileResponse } from "@allTypes/profile";
import instance from "@apis/axios";
import { useQuery } from "@tanstack/react-query";

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

const profileApi = { ReadUser };

export default profileApi;
