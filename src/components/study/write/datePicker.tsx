import CalendarSvg from "@assets/svg/calendarSvg";
import React, { useCallback, useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import { UseFormSetValue } from "react-hook-form";
import { IWrite } from "@allTypes/study";

interface IDatePicker {
  setValue: UseFormSetValue<IWrite>;
  defaultValue?: Date;
}

const StartDatePicker = ({ setValue, defaultValue }: IDatePicker) => {
  const [startDate, setStartDate] = useState<Date>(defaultValue || new Date());

  const [isShow, setIsShow] = useState(false);
  const handleShow = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsShow((prev) => !prev);
  }, []);
  const handleCalendar = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsShow(false);
  }, []);
  const handleOnChange = useCallback(
    (date: Date) => {
      setStartDate(date);
      setValue("startDate", date);
    },
    [setValue]
  );

  useEffect(() => {
    setIsShow(false);
  }, [startDate]);

  return (
    <>
      <div
        className={
          "rounded-[0.8rem] border border-primary-200 bg-[#F7F6F6] p-[1.4rem_1.8rem]  text-[1.6rem] peer    hover:border-primary-400 flex-1 text-left text-primary-400 hover:text-primary-500 cursor-pointer"
        }
        onClick={handleShow}
      >
        {dayjs(startDate).format("YYYY / MM / DD")}
      </div>
      <CalendarSvg className="w-[2.3rem] absolute right-[1.8rem] cursor-pointer text-primary-500 peer-hover:text-primary-600 " />
      {isShow && (
        <div
          className="fixed
       top-0 right-0 bottom-0 left-0  z-[999] bg-[rgba(0,0,0,0.3)] flex-center"
          onClick={handleCalendar}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <Calendar
              onChange={handleOnChange}
              value={startDate}
              minDate={new Date()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default StartDatePicker;

/*

 {isShow && (
        <div
          className="absolute
       top-0 right-0 "
          onClick={handleCalendar}
        >
          <DatePicker
            selected={startDate}
            startDate={startDate}
            onChange={handleOnChange}
            disabledKeyboardNavigation
            locale={ko}
            minDate={new Date()}
            inline
          />
        </div>
      )}
*/

/**
 * 
 * <div
        className={
          "rounded-[0.8rem] border border-primary-200 bg-[#F7F6F6] p-[1.4rem_1.8rem]  text-[1.6rem] peer    hover:border-primary-400 flex-1 text-left text-primary-400 hover:text-primary-500 cursor-pointer"
        }
        onClick={handleShow}
      >
        {dayjs(startDate).format("YYYY / MM / DD")}
      </div>
 */
