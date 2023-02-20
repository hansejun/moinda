import cls from "@utils/client/cls";
import { useRouter } from "next/router";
import Icons, { iconBackgrounds } from "@elements/icon";
import GroupSvg from "@assets/svg/groupSvg";
import CategorySvg from "@assets/svg/categorySvg";
import NextSvg from "@assets/svg/nextSvg";
import Image from "next/image";

const style = {
  nm: "hidden nm:block",
};

const ParticipatingStudy = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-between">
        <h2 className="H2 text-primary-600">참여 중인 스터디그룹</h2>
        <span className="Cap1 text-primary-500 self-end">더보기</span>
      </div>

      <div
        className={cls(
          "flex items-center nm:h-[11.8rem]  justify-between rounded-[1.4rem] border border-solid border-primary-350 px-[1.6rem] py-[1.6rem] nm:py-0 cursor-pointer hover:border-primary-500 transition-colors group"
        )}
        onClick={() => router.push("/mystudy/1")}
      >
        <div className="flex items-center ">
          <div
            className={cls(
              "justify-center items-center aspect-square w-[5.4rem] rounded-[1.2rem] hidden nm:flex",
              `${iconBackgrounds[4]}`
            )}
          >
            <span className="w-[4rem]">
              <Image
                src={Icons[1]}
                alt="icon"
                width={40}
                height={40}
                priority={true}
              />
            </span>
          </div>
          <div className="nm:ml-[1.5rem]">
            <p className="Sub2">토익 900 달성 스터디</p>
            <p className={cls("Cap4 text-primary-500", style.nm)}>
              #어학 #매일피드백 #700이상
            </p>
            <div
              className={cls(
                "Cap3 mt-[1.2rem] hidden nm:flex text-primary-500"
              )}
            >
              <div className="flex-center">
                <GroupSvg className="mr-[0.6rem] h-[2rem] w-[2rem] " />
                <span>4명 참여중</span>
              </div>
              <div className="flex-center ml-9">
                <CategorySvg className="mr-[0.6rem] h-[2rem] w-[2rem] " />
                <span>어학</span>
              </div>
            </div>
          </div>
        </div>

        <NextSvg className="w-[2rem] nm:w-[2.4rem] group-hover:text-primary-600 text-primary-500 transition-colors mt-[-0.3rem]" />
      </div>
      <button
        className={cls(
          "Sub2 h-[6.8rem] rounded-[1rem] bg-primary-main text-white "
        )}
      >
        오늘 출석체크
      </button>
    </>
  );
};

export default ParticipatingStudy;
