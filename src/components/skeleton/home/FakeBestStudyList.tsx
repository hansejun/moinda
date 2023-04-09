import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FakeBestStudyList = ({ length = 5 }: { length?: number }) => {
  const data = Array(length).fill(1);
  return (
    <div className="flex flex-col space-y-[1.3rem]">
      <h2 className="H2 text-primary-600">카테고리 별 인기스터디</h2>
      <div className="grid grid-rows-[repeat(5,8.6rem)] gap-[1.3rem]">
        {data?.map((_, idx) => (
          <div
            key={idx}
            className="flex h-[8.6rem] min-w-[65.6rem] cursor-pointer justify-between rounded-[1rem] bg-[#F7F6F6] px-[3rem] transition-colors hover:bg-orange-100"
          >
            <div className="flex items-center space-x-[2rem]">
              <Skeleton className={`h-[3.6rem] w-[3.6rem] rounded-full `} />
              <div className="flex flex-col">
                <Skeleton className="Sub1 w-full text-primary-600"></Skeleton>
                <Skeleton className="Cap4 text-primary-500"></Skeleton>
              </div>
            </div>
            <div className="Cap3 flex flex-col items-end justify-center">
              <Skeleton className=""></Skeleton>
              <Skeleton />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FakeBestStudyList;
