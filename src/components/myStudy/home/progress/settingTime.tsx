import { Swiper, SwiperSlide } from "swiper/react";
import CancelSvg from "@assets/svg/cancelSvg";
import "swiper/css";
import cls from "@utils/client/cls";
import { useCallback, useState } from "react";
import StudyRoomApi from "@apis/query/studyRoomApi";
import { useRouter } from "next/router";
const TIME_HOURS = Array.from(Array(24).keys());
const TIME_MINUTES = Array(12)
  .fill(0)
  .map((num, i) => i * 5);

type TSettingTime = {
  onCloseModal: () => void;
};
const SettingTime = ({ onCloseModal }: TSettingTime) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const router = useRouter();
  const { id } = router.query;
  const { mutate: setTargetTime } = StudyRoomApi.SetGroupTargetTime(
    id as string
  );

  // 그룹 목표시간 설정
  const handleSetTargetTime = useCallback(() => {
    setTargetTime({ targetTime: hours * 60 + minutes });
    onCloseModal();
  }, [onCloseModal, setTargetTime, hours, minutes]);

  return (
    <div className="relative ml-[1rem] rounded-[1rem] bg-bgColor-100 p-[2rem] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]">
      <div className="relative flex justify-center">
        <span className="Cap3">목표시간</span>
        <span onClick={onCloseModal}>
          <CancelSvg className="absolute right-0 w-[2rem] cursor-pointer" />
        </span>
      </div>
      <div className="mt-[1.4rem] grid grid-cols-[3fr_1fr]">
        <div className="flex justify-self-center">
          <Swiper
            className="h-[16.8rem]  "
            direction={"vertical"}
            slidesPerView={3}
            mousewheel
            //loopAdditionalSlides={5}
            slideToClickedSlide
            centeredSlides
            onSlideChange={(swiper) => setHours(swiper.realIndex)}
          >
            {TIME_HOURS.map((hour) => (
              <SwiperSlide key={hour}>
                <div
                  className={cls(
                    "flex h-[5.6rem] cursor-pointer items-center px-[1.1rem]",
                    hours === hour
                      ? "H2 text-primary-700"
                      : "text-[2rem]  font-medium text-primary-500"
                  )}
                >
                  {(hour + "").padStart(2, "0")}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="H2  flex items-center">:</div>
          <Swiper
            className="h-[16.8rem]"
            direction={"vertical"}
            slidesPerView={3}
            mousewheel
            //loopAdditionalSlides={5}
            slideToClickedSlide
            centeredSlides
            onSlideChange={(swiper) => setMinutes(swiper.realIndex * 5)}
          >
            {TIME_MINUTES.map((minute) => (
              <SwiperSlide key={minute}>
                <div
                  className={cls(
                    "flex h-[5.6rem] cursor-pointer items-center px-[1.1rem]",
                    minutes === minute
                      ? "H2 text-primary-700"
                      : "text-[2rem]  font-medium text-primary-500"
                  )}
                >
                  {(minute + "").padStart(2, "0")}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex-center absolute left-0 h-[16.8rem] w-full  px-[2rem]">
            <div className="h-[5.6rem] w-full border-t border-b border-primary-400" />
          </div>
        </div>
        <span className="H2 flex items-center justify-center">시간</span>
      </div>
      <div className="mt-[2rem] grid grid-cols-2 gap-[1.6rem]">
        <button
          className="Sub2 z-[999] rounded-xl border  border-primary-500"
          onClick={onCloseModal}
        >
          취소
        </button>
        <button
          className="Sub2 z-[999] rounded-xl bg-primary-main py-[1rem] text-primary-100"
          onClick={handleSetTargetTime}
        >
          저장
        </button>
      </div>
    </div>
  );
};

export default SettingTime;
