import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FakeStudyList = ({ length = 5 }) => {
  const data = Array(length).fill(1);
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] gap-[2.6rem] ">
      {data.map((_, idx) => (
        <div
          key={idx}
          className="flex h-full cursor-pointer flex-col  justify-between space-y-[2rem] rounded-[1.4rem] bg-[#F4F4F4] p-[2.8rem_3rem]"
        >
          <div className="flex flex-col">
            <Skeleton
              className="Cap4 mb-[2.2rem] text-primary-500"
              width="20rem"
            />
            <Skeleton className="H3 mb-[0.4rem]" width="10rem" />
            <Skeleton className="Cap1  text-primary-500" width="15rem" />
          </div>
          <div className="flex flex-col">
            <Skeleton width="6rem" height="6rem" borderRadius="1rem" />
            <div className="Cap4 mt-[2rem] flex items-center justify-between ">
              <div className="flex items-center space-x-[1rem]">
                <Skeleton width="3.5rem" height="3.5rem" borderRadius="50%" />

                <Skeleton width="10rem" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FakeStudyList;
