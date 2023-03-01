import dayjs from "dayjs";

export const GetDday = ({ dateArg }: { dateArg: Date }) => {
  const currentTime = dayjs(new Date(), "YYYY-MM-DD HH:mm:ss");
  const targetTime = dayjs(dateArg, "YYYY-MM-DD HH:mm:ss");
  const gap = targetTime.diff(currentTime, "day");
  return (
    <>
      {gap > 7 && <p className="text-primary-500 ">{`D-${gap}`}</p>}
      {gap <= 7 && gap > 1 && (
        <p className="text-primary-main ">{`D-0${gap}`}</p>
      )}
      {gap === 0 && <p className="text-primary-main ">{`D-Day`}</p>}
      {/* {gap < 0 && <p className="text-primary-main ">{`D+${gap * -1}`}</p>} */}
    </>
  );
};
