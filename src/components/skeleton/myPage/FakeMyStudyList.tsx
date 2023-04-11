import NextSvg from "@assets/svg/nextSvg";
import PlusSvg from "@assets/svg/plusSvg";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FakeMyStudyList = () => {
  return (
    <div className="flex max-w-[57.3rem] flex-col rounded-[1rem] bg-white p-[3rem]">
      <h2 className="H2 mb-[1.8rem] text-primary-600">참여 중인 스터디그룹</h2>
      <ul className="flex flex-col space-y-[1rem]">
        {[1, 2, 3]?.map((item) => (
          <li
            key={item}
            className="group flex h-[11.8rem] cursor-pointer  items-center justify-between rounded-[1.4rem] border  border-primary-200  px-[1.6rem]"
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
            <NextSvg className="mt-[-0.3rem]  w-[2.4rem] text-primary-200  " />
          </li>
        ))}
      </ul>
      <div className="flex-center mt-[2.5rem] mb-[3rem]">
        <Skeleton width="7rem"></Skeleton>
      </div>

      <div className="flex-center ">
        <button className="flex-center Cap4 h-[6.8rem] w-[36.5rem] rounded-[1rem] border border-dashed border-primary-350 text-primary-600">
          <PlusSvg className="mr-[0.8rem] h-[1.8rem] w-[1.8rem]" />
          스터디그룹 가입하기
        </button>
      </div>
    </div>
  );
};

export default FakeMyStudyList;
