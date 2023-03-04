import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateAttendanceTable = async () => {
  await prisma.attendance.updateMany({
    data: {
      checkIn: null,
      log: null,
      todayTime: 0,
    },
  });
};

export default updateAttendanceTable;
