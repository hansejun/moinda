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

const MyStudyItem = () => {
  const router = useRouter();
  return (
    <div
      className={cls(
        "group flex cursor-pointer items-center  justify-between rounded-[1.4rem] border border-solid border-primary-350  px-[1.6rem] py-[1.6rem] transition-colors hover:border-primary-500 nm:h-[11.8rem] nm:py-0"
      )}
      onClick={() => router.push("/myStudy/1")}
    >
      <div className="flex items-center ">
        <div
          className={cls(
            "hidden aspect-square w-[5.4rem] items-center justify-center rounded-[1.2rem] nm:flex",
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
            className={cls("Cap3 mt-[1.2rem] hidden text-primary-500 nm:flex")}
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

      <NextSvg className="mt-[-0.3rem] w-[2rem] text-primary-500 transition-colors group-hover:text-primary-600 nm:w-[2.4rem]" />
    </div>
  );
};

export default MyStudyItem;
