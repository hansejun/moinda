import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FakePost = () => {
  return (
    <main className="mx-auto mt-[5rem] flex  w-[80rem] flex-1 flex-col">
      <Skeleton
        width="8.8rem"
        height="8.8rem"
        borderRadius="0.8rem"
        className="mb-[2.4rem] border"
      />

      <Skeleton className="H3 mb-[1.4rem]" width="50rem"></Skeleton>

      <div className="mb-[3.8rem] flex space-x-[1.3rem]">
        <Skeleton width="4.3rem" height="4.3rem" borderRadius="100%" />
        <div className="flex flex-col justify-center  ">
          <Skeleton className="Cap4" width="15rem" />
          <Skeleton height="2rem" width="30rem" />
        </div>
      </div>
      <div className="mb-[4rem] grid grid-cols-2 grid-rows-2 gap-[1.4rem]">
        <div className="flex items-center space-x-[2.2rem] ">
          <span className="Sub2 w-[9.2rem]">스터디팀 이름</span>
          <Skeleton
            className="Cap2 rounded-[0.4rem] p-[0.2rem_0.8rem]"
            width="20rem"
          />
        </div>
        <div className="flex items-center space-x-[2.2rem] ">
          <span className="Sub2 w-[9.2rem]">스터디 시작일</span>
          <Skeleton
            className="Cap2 rounded-[0.4rem] p-[0.2rem_0.8rem]"
            width="20rem"
          />
        </div>
        <div className="flex items-center space-x-[2.2rem] ">
          <span className="Sub2 w-[9.2rem]">스터디 분야</span>
          <Skeleton
            className="Cap2 rounded-[0.4rem]  p-[0.2rem_0.8rem]"
            width="20rem"
          />
        </div>
        <div className="flex items-center space-x-[2.2rem] ">
          <span className="Sub2 w-[9.2rem]">연락수단</span>
          <Skeleton
            className="Cap2 rounded-[0.4rem]  p-[0.2rem_0.8rem]"
            width="20rem"
          />
        </div>
      </div>
      <Skeleton
        className="mb-[3.4rem]  border border-primary-200  p-[2.2rem]"
        height="25vh"
        borderRadius="1rem"
      ></Skeleton>
      <button className="Sub1 rounded-[3.5rem] bg-primary-main p-[2rem] text-white">
        스터디 가입하기
      </button>
    </main>
  );
};

export default FakePost;
