import dynamic from "next/dynamic";

const ApproveItem = dynamic(() => import("./approveItem"));
const CheckItem = dynamic(() => import("./checkItem"));
const RefuseItem = dynamic(() => import("./refuseItem"));

type TAlarmState = "APPROVE" | "REFUSE" | "CHECK";

interface IAlarm {
  id: number;
  state: TAlarmState;
}
interface IAlarmItemProps {
  alarm: IAlarm;
}

const AlarmItems = ({ alarm }: IAlarmItemProps) => {
  return (
    <>
      {alarm.state === "APPROVE" && <ApproveItem />}
      {alarm.state === "CHECK" && <CheckItem />}{" "}
      {alarm.state === "REFUSE" && <RefuseItem />}
    </>
  );
};

export default AlarmItems;
