import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import StudyEndCard from "./studyEndCard";
import cls from "@utils/client/cls";

const EndStudy = () => {
  return (
    <div className="flex  max-w-[57.3rem] flex-col rounded-[1rem] bg-white p-[3rem]">
      <p className="H2 mb-[2.4rem] text-primary-600">완료한 스터디</p>
      <Swiper
        style={{ width: "100%" }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide className={cls("flex flex-col space-y-[1rem]  pb-[4rem]")}>
          <StudyEndCard />
          <StudyEndCard />
        </SwiperSlide>
        <SwiperSlide>
          <StudyEndCard />
          <StudyEndCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default EndStudy;
