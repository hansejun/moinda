import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FakeProfileCard = () => {
  return (
    <>
      <div className="h-[33rem] rounded-[1rem] bg-white px-[2.4rem] py-[3rem]">
        <div className="mb-[3rem] flex">
          <span className="H2">내 프로필</span>
        </div>
        <div className="grid grid-cols-2 gap-[2.6rem]">
          <Skeleton
            width="9.6rem"
            height="9.6rem"
            borderRadius="50%"
            className="ml-[2.4rem]"
          />
          <div className="flex flex-col justify-center space-y-[0.6rem] px-[2rem]">
            <Skeleton className="Cap1" />
            <Skeleton className="Cap1" />
          </div>
        </div>
        <div className="mt-[3.8rem] grid grid-cols-2 items-center gap-[2.6rem]">
          <Skeleton className="h-[8rem]" borderRadius="0.8rem"></Skeleton>
          <Skeleton className="h-[8rem]" borderRadius="0.8rem"></Skeleton>
        </div>
      </div>
    </>
  );
};

export default FakeProfileCard;
