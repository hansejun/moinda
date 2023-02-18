import { IStudy } from "@allTypes/study";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export {};

export const AddStudy = () => {
  const queryclient = useQueryClient();
  return useMutation(
    async (data: IStudy) => {
      const response = await axios.post("/study/write", data);
      return response;
    },
    {
      onSuccess: () => queryclient.invalidateQueries(["studyList"]),
    }
  );
};
