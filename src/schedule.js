const schedule = require("node-schedule");
const updateAttendanceTable = require("./update");

const rule = new schedule.RecurrenceRule();
rule.tz = "Asia/Seoul";
rule.hour = 5;
rule.minute = 0;

const job = schedule.scheduleJob(rule, async function () {
  try {
    await updateAttendanceTable();
    console.log("Attendance table updated.");
  } catch (error) {
    console.error(error);
  }
});

module.exports = job;
