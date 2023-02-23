import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import NoStudy from "@components/profile/noStudy";
import PlusSvg from "@assets/svg/plusSvg";
import ParticipatingStudy from "@components/main/participatingStudy";
import cls from "@utils/client/cls";
import MyStudyItem from "./studyItem";

const isExist = true;
// 데이터가 4개 이상이라면은 26번줄 cls pb-[6rem] or [2rem]

const MyStudyList = () => {
  return (
    <div className="flex flex-col rounded-[1rem] bg-white p-[3rem]">
      <h2 className="H2 mb-[1.8rem] text-primary-600">참여 중인 스터디그룹</h2>
      <Swiper
        style={{
          width: "100%",
          display: "flex",
        }}
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide
          className={cls(
            "flex w-full flex-1 flex-col space-y-[1rem]  pb-[2rem]"
          )}
        >
          <MyStudyItem />
          <MyStudyItem />
          <MyStudyItem />
        </SwiperSlide>
        {!isExist && (
          <SwiperSlide>
            <NoStudy />
          </SwiperSlide>
        )}
      </Swiper>
      <div className="flex-center mt-[2.4rem]">
        <button className="flex-center Cap4 h-[6.8rem] w-[36.5rem] rounded-[1rem] border border-dashed border-primary-350 text-primary-600">
          <PlusSvg className="mr-[0.8rem] h-[1.8rem] w-[1.8rem]" />
          스터디그룹 가입하기
        </button>
      </div>
    </div>
  );
};

export default MyStudyList;
