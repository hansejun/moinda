import Timer from "@components/common/timer/timer";

const Pomodoro = () => {
  return (
    <div className="mt-[7.2rem] flex flex-col">
      <h2 className="H2 mb-[1.8rem] text-primary-600">뽀모도로</h2>
      <div className="relative  flex flex-col items-center rounded-[1rem] bg-primary-sub3 py-[4rem]">
        <Timer />
      </div>
    </div>
  );
};

export default Pomodoro;
