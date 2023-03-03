import { INewStudyListProps, IStudyWithUser, IWrite } from "@allTypes/study";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

/** 스터디 개설하기 */
const AddStudy = async (data: IWrite) => {
  const response = await axios.post("/api/study", data);
  return response.data;
};

/** 새로운 스터디 목록 조회하기 */
const ReadNewStudyList = ({
  category = "TOTAL",
  count,
  page,
}: INewStudyListProps) => {
  return useQuery<IStudyWithUser[]>(
    ["studyList", category],
    async () => {
      const { data } = await axios.get(
        `/api/study?category=${category}&count=${count}&page=${page}`
      );

      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};

/** 추천 스터디 조회하기*/
const ReadRecommendStudyList = ({
  category,
  count = 2,
}: INewStudyListProps) => {
  return useQuery<IStudyWithUser[]>(
    ["recommendStudyList", category],
    async () => {
      const response = await axios.get(
        `/api/study/recommend?category=${category}&count=${count}`
      );
      return response.data;
    },
    {
      staleTime: 60000,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
};

/** 스터디 디테일 페이지 조회하기 */
const ReadStudyDetail = (studyId: string) => {
  return useQuery<IStudyWithUser>(
    ["studyDetail", studyId],
    async () => {
      const response = await axios.get(`/api/study/${studyId}`);
      return response.data;
    },
    {
      staleTime: Infinity,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
};

/** 스터디 수정하기 */
const UpdateStudy = async (studyId: string, data: IWrite) => {
  const response = await axios.put(`/api/study/${studyId}/edit`, data);
  return response.data;
};

const studyApi = {
  AddStudy,
  ReadNewStudyList,
  ReadRecommendStudyList,
  ReadStudyDetail,
  UpdateStudy,
};

export default studyApi;
