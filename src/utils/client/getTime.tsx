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

export const getTime = (date: Date) => {
  const currentTime = Date.now();
  const prevTime = Date.parse(date + "");
  const gap = (currentTime - prevTime) / 1000 / 60;
  if (gap <= 1) return "1분 전";
  else if (1 < gap && gap < 60) return `${gap | 0}분 전`;
  else if (60 <= gap && gap < 1440) return `${parseInt(gap / 60 + "")}시간 전`;
  else if (1440 <= gap && gap < 2880) return "하루 전";
  else if (2880 < gap && gap < 43200)
    return `${parseInt(gap / 60 / 30 + "")}일 전`;
  else if (43200 <= gap && gap < 86400) return `한달 전`;
  else if (86400 <= gap && gap < 1296000)
    return `${parseInt(gap / 60 / 30 / 12 + "")}달 전`;
  return gap;
};
