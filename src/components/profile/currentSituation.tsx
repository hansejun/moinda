import CheckInBtn from "@components/common/checkInBtn";

const CurrentSituation = () => {
  return (
    <div className="flex h-[26.5rem] flex-col space-y-[1.8rem] rounded-[1rem] bg-white px-[3rem] py-[2.4rem]">
      <h2 className="H2">스터디 현황</h2>
      <div className="grid grid-cols-3 gap-[1.4rem]">
        {users.map((user) => (
          <div
            key={user.num}
            className="flex-center h-[6.4rem] flex-col rounded-[1rem] bg-[#F5F4F3]"
          >
            <p className="H3">{user.num}</p>
            <p className="text-[1.2rem] text-primary-500 ">{user.work}</p>
          </div>
        ))}
      </div>
      <CheckInBtn />
    </div>
  );
};

export default CurrentSituation;

const users = [
  { work: "완료", num: 1 },
  { work: "참여중", num: 2 },
  { work: "개설", num: 3 },
];
