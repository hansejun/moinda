import attendanceApi from "@apis/query/attendance";

import React from "react";
import CheckInBtn from "./checkInBtn";
import CheckOutBtn from "./checkOutBtn";

const AttendanceBtns = () => {
  const { data: attendance } = attendanceApi.ReadAttendance();

  return (
    <>
      {attendance && attendance.log ? (
        <CheckOutBtn attendance={attendance} />
      ) : (
        <CheckInBtn />
      )}
    </>
  );
};

export default AttendanceBtns;
