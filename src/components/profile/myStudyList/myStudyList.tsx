import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import NoStudy from "@components/profile/noStudy";
import PlusSvg from "@assets/svg/plusSvg";
import cls from "@utils/client/cls";
import MyStudyItem from "./studyItem";
import profileApi from "@apis/query/profile";
import { useMemo } from "react";
import { IStudy } from "@allTypes/study";
import { useRouter } from "next/router";

const isExist = true;
// 데이터가 4개 이상이라면은 26번줄 cls pb-[6rem] or [2rem]

interface IStudyList {
  [key: string]: IStudy[];
}

const MyStudyList = () => {
  const { data: user } = profileApi.ReadUser();
  const router = useRouter();
  const studyObj = useMemo(() => {
    if (!user) return {};
    const obj: IStudyList = {};
    const { studyList } = user;
    studyList.forEach((study, idx) => {
      const key = ((idx / 3) | 0).toString();
      obj[key] = obj[key] ? [...obj[key], study] : [study];
    });
    return obj;
  }, [user]);

  return (
    <div className="flex max-w-[57.3rem] flex-col rounded-[1rem] bg-white p-[3rem]">
      <h2 className="H2 mb-[1.8rem] text-primary-600">참여 중인 스터디그룹</h2>
      <Swiper
        style={{ width: "100%" }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {Object.values(studyObj)?.map((studyList, idx) => (
          <SwiperSlide
            key={idx}
            className={cls(
              "flex w-full flex-1 flex-col space-y-[1rem]  pb-[6rem]"
            )}
          >
            {studyList?.map((study) => (
              <MyStudyItem key={study?.id} study={study} />
            ))}
          </SwiperSlide>
        ))}

        {user?.studyList?.length === 0 && (
          <SwiperSlide>
            <NoStudy />
          </SwiperSlide>
        )}
      </Swiper>
      <div className="flex-center mt-[2.4rem]">
        <button
          className="flex-center Cap4 h-[6.8rem] w-[36.5rem] rounded-[1rem] border border-dashed border-primary-350 text-primary-600"
          onClick={() => router.push("/study")}
        >
          <PlusSvg className="mr-[0.8rem] h-[1.8rem] w-[1.8rem]" />
          스터디그룹 가입하기
        </button>
      </div>
    </div>
  );
};

export default MyStudyList;
