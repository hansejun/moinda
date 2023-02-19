import { IStudy, IWrite } from "@allTypes/study";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const AddStudy = async (data: IWrite) => {
  const response = await axios.post("/api/study", data);
  return response.data;
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
};

export default studyApi;
