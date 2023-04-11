import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FakeCurrentSituation = () => {
  return (
    <div className="flex min-h-[26.5rem] flex-col space-y-[2rem] rounded-[1rem] bg-white px-[3rem] py-[2.4rem]">
      <h2 className="H2">스터디 현황</h2>
      <div className="grid grid-cols-3 gap-[1.4rem]">
        <Skeleton height="6.4rem" borderRadius="1rem" />
        <Skeleton height="6.4rem" borderRadius="1rem" />
        <Skeleton height="6.4rem" borderRadius="1rem" />
      </div>
      <Skeleton height="6.8rem" borderRadius="1rem" />
    </div>
  );
};

export default FakeCurrentSituation;
