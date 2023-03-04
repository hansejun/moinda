import schedule from "node-schedule";
import updateTableFn from "./src/update.js";

const rule = new schedule.RecurrenceRule();
rule.tz = "Asia/Seoul";
rule.hour = 5;
rule.minute = 0;

const job = schedule.scheduleJob(rule, function () {
  updateTableFn();
});

export default job;
