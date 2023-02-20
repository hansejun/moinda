import {
  INewStudyListProps,
  IStudy,
  IStudyWithUser,
  IWrite,
} from "@allTypes/study";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
      refetchOnWindowFocus: false,
    }
  );
};

// const AddStudy = () => {
//   // const queryclient = useQueryClient();
//   return useMutation(
//     async (data: IStudy) => {
//       const response = await axios.post("/study", data);
//       return response;
//     }
//     // {
//     //   onSuccess: () => queryclient.invalidateQueries(["studyList"]),
//     // }
//   );
// };

const studyApi = {
  AddStudy,
  ReadNewStudyList,
  ReadRecommendStudyList,
};

export default studyApi;
