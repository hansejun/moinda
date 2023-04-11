import ArrowSvg from "@assets/svg/arrowSvg";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FakeOtherStudyList = () => {
  return (
    <div className="absolute top-[8.4rem] z-10 flex w-full select-none flex-col rounded-[1rem] bg-bgColor-100 py-[1.2rem] shadow-[0.2rem_0.8rem_1.8rem_rgba(0,0,0,0.13)]">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className="grid grid-cols-2 rounded-[1rem] bg-bgColor-100 p-[1.3rem_3rem] "
        >
          <div className="flex items-center space-x-[1.6rem]">
            <Skeleton width="5.4rem" height="5.4rem" borderRadius="1.2rem" />
            <div className="flex flex-col justify-between space-y-[0.4rem] py-[0.2rem]">
              <Skeleton className="Sub2" width="20rem" />
              <Skeleton className="Sub2" width="30rem" />
            </div>
          </div>
          <div className="flex items-center  space-x-[2rem] text-primary-500">
            <Skeleton className="Cap3" width="10rem" />
            <Skeleton className="Cap3" width="10rem" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FakeOtherStudyList;
