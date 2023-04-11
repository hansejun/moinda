import ArrowSvg from "@assets/svg/arrowSvg";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FakeStudySection = () => {
  return (
    <section className="relative flex flex-col space-y-[0.6rem]">
      <div className="grid grid-cols-2 rounded-[1rem] bg-bgColor-100 p-[1.3rem_3rem] ring-1 ring-primary-200">
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
          <span className="flex flex-1  justify-end">
            <ArrowSvg className="w-[2.2rem] rotate-[-90deg] text-primary-400" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default FakeStudySection;
