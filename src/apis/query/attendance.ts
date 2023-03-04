import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

/** 출석 정보 조회 */
const ReadAttendance = () => {
  return useQuery(
    ["attendance"],
    async () => {
      const { data } = await axios.get("/api/attendance");
      return data;
    },
    {
      staleTime: Infinity,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
};

/** 체크인 요청 */
const CheckIn = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async () => {
      const response = await axios.post("/api/attendance/checkIn", {
        checkIn: new Date(),
      });
      return response;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["attendance"]),
    }
  );
};

/** 체크아웃 요청 */
const CheckOut = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ gapTime }: { gapTime: number }) => {
      const response = await axios.post("/api/attendance/checkOut", {
        gapTime,
      });
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["attendance"]);
        if (queryClient.getQueryData(["mypage"])) {
          queryClient.invalidateQueries(["mypage"]);
        }
      },
    }
  );
};

const attendanceApi = { ReadAttendance, CheckIn, CheckOut };

export default attendanceApi;
