import client from "@utils/server/client";

export default async function handler(req, res) {
  await client.attendance.updateMany({
    data: {
      checkIn: null,
      log: null,
      todayTime: 0,
    },
  });
  res.status(200).end("Cron job started successfully");
}
