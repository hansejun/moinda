import Timer from "@components/timer/timer";

const Pomodoro = () => {
  return (
    <div className="mt-[7.2rem] flex flex-col">
      <h2 className="H2 mb-[1.8rem] text-primary-600">뽀모도로</h2>
      <div className="relative  rounded-[1rem] py-[4rem] bg-primary-sub3 flex flex-col items-center">
        <Timer />
      </div>
    </div>
  );
};

export default Pomodoro;
