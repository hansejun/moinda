const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const updateAttendanceTable = async () => {
  try {
    await prisma.attendance.updateMany({
      data: {
        checkIn: null,
        log: null,
        todayTime: 0,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = updateAttendanceTable;
