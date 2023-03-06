import { INewStudyListProps, IStudyWithUser, IWrite } from "@allTypes/study";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

/** 스터디 개설하기 */
const AddStudy = async (data: IWrite) => {
  const response = await axios.post("/api/study", data);
  return response.data;
};

export const readNewStudyListApi = async ({
  category = "TOTAL",
  count,
  page,
}: INewStudyListProps) => {
  const { data } = await axios.get(
    `/api/study?category=${category}&count=${count}&page=${page}`
  );

  return data;
};

/** 새로운 스터디 목록 조회하기 */
const ReadNewStudyList = ({
  category = "TOTAL",
  count,
  page,
}: INewStudyListProps) => {
  return useQuery<IStudyWithUser[]>(
    ["studyList", category],
    () => readNewStudyListApi({ category, count, page }),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
};

export const readRecommendStudyListApi = async ({
  category,
  count,
}: INewStudyListProps) => {
  const response = await axios.get(
    `/api/study/recommend?category=${category}&count=${count}`
  );
  return response.data;
};

/** 추천 스터디 조회하기*/
const ReadRecommendStudyList = ({
  category,
  count = 2,
}: INewStudyListProps) => {
  return useQuery<IStudyWithUser[]>(
    ["recommendStudyList", category],
    () => readRecommendStudyListApi({ category, count }),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
};

export const readStudyDetailApi = async (studyId: string) => {
  const response = await axios.get(`/api/study/${studyId}`);
  return response.data;
};

/** 스터디 디테일 페이지 조회하기 */
const ReadStudyDetail = (studyId: string) => {
  return useQuery<IStudyWithUser>(
    ["studyDetail", studyId],
    () => readStudyDetailApi(studyId),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
};

const updateStudyApi = async (studyId: string, data: IWrite) => {
  const response = await axios.put(`/api/study/${studyId}/edit`, data);
  return response.data;
};

/** 스터디 수정하기 */
const UpdateStudyDetail = (studyId: string) => {
  const queryClient = useQueryClient();
  return useMutation((data: IWrite) => updateStudyApi(studyId, data), {
    onSuccess: () => queryClient.invalidateQueries(["studyDetail", studyId]),
  });
};

const studyApi = {
  AddStudy,
  ReadNewStudyList,
  ReadRecommendStudyList,
  ReadStudyDetail,
  UpdateStudyDetail,
};

export default studyApi;
