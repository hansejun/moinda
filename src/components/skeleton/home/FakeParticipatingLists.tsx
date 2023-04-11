import NextSvg from "@assets/svg/nextSvg";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FakeParticipatingLists = ({ length = 3 }) => {
  const data = Array(length).fill(1);
  return (
    <>
      <div className="flex justify-between">
        <h2 className="H2 text-primary-600">참여 중인 스터디그룹</h2>
        <span className="Cap1 cursor-pointer self-end text-primary-500 hover:text-primary-600">
          더보기
        </span>
      </div>
      <ul className="flex flex-col space-y-[1.6rem]">
        {data.map((_, idx) => (
          <li
            key={idx}
            className="group flex h-[11.8rem] cursor-pointer  items-center justify-between rounded-[1.4rem] border border-solid  border-primary-350  px-[1.6rem] py-0 transition-colors hover:border-primary-500"
          >
            <div className="flex items-center ">
              <Skeleton width="5.4rem" height="5.4rem" borderRadius="1rem" />

              <div className="ml-[1.5rem] flex flex-col">
                <Skeleton className="Sub2" width="20rem" />
                <Skeleton />
                <div className="Cap3 mt-[1.2rem]  flex text-primary-500">
                  <div className="flex-center">
                    <Skeleton className="Sub2" width="10rem" />
                  </div>
                  <div className="flex-center ml-9">
                    <Skeleton className="Sub2" width="10rem" />
                  </div>
                </div>
              </div>
            </div>

            <NextSvg className="mt-[-0.3rem]  w-[2.4rem] text-primary-500 transition-colors group-hover:text-primary-600" />
          </li>
        ))}
      </ul>
      <Skeleton width="100%" height="6.8rem" borderRadius="1rem" />
    </>
  );
};

export default FakeParticipatingLists;
