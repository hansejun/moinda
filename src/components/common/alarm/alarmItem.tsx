import { IAlarmItemProps } from "@allTypes/alarm";
import dynamic from "next/dynamic";

const ApproveItem = dynamic(() => import("./approveItem"));
const CheckItem = dynamic(() => import("./checkItem"));
const RefuseItem = dynamic(() => import("./refuseItem"));

const AlarmItems = ({ alarm }: IAlarmItemProps) => {
  return (
    <>
      {alarm.state === "APPROVE" && <ApproveItem alarm={alarm} />}
      {alarm.state === "CHECK" && <CheckItem alarm={alarm} />}{" "}
      {alarm.state === "REFUSE" && <RefuseItem alarm={alarm} />}
    </>
  );
};

export default AlarmItems;
