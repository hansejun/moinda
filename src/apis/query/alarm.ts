import { IAlarm } from "@allTypes/alarm";
import instance from "@apis/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface ISendApplyRequest {
  receiverId: number;
  studyId: number;
}

interface IUpdateAlarmRequest {
  state: string;
  receiverId: number;
}

/** 알림 조회 */
const ReadAlarms = () => {
  return useQuery<IAlarm[]>(
    ["alarmList"],
    async () => {
      const { data } = await instance.get("/api/alarm");
      return data;
    },
    {
      retry: 0,
      refetchOnWindowFocus: false,
    }
  );
};

/** 스터디 신청 알림 보내기 */
const sendApply = async ({ receiverId, studyId }: ISendApplyRequest) => {
  const response = await instance.post(`/api/study/${studyId}/apply`, {
    receiverId,
  });
  return response;
};

/** 스터디 알림 수락 혹은 거절 보내기 */
const UpdateAlarm = (alarmId: number) => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ state, receiverId }: IUpdateAlarmRequest) => {
      const response = await instance.put(`/api/alarm/${alarmId}/edit`, {
        receiverId,
        state,
      });
      return response;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["alarmList"]),
    }
  );
};

/** 알림 삭제 */
const RemoveAlarm = (alarmId: number) => {
  const queryClient = useQueryClient();
  return useMutation(
    async () => {
      const response = await instance.delete(`/api/alarm/${alarmId}`);
      return response;
    },
    {
      onMutate: async () => {
        await queryClient.cancelQueries(["alarmList"]);
        const prevAlarmList: IAlarm[] =
          queryClient.getQueryData(["alarmList"]) || [];
        queryClient.setQueryData(
          ["alarmList"],
          prevAlarmList.filter((alarm) => alarm.id !== alarmId)
        );
        return { prevAlarmList };
      },
      onError: (__, _, context) => {
        if (context?.prevAlarmList) {
          queryClient.setQueryData(["alarmList"], context.prevAlarmList);
        }
      },
      onSettled: () => queryClient.invalidateQueries(["alarmList"]),
    }
  );
};

const alarmApis = { sendApply, ReadAlarms, UpdateAlarm, RemoveAlarm };
export default alarmApis;
