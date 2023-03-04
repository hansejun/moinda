import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  await client.attendance.updateMany({
    data: {
      checkIn: null,
      log: null,
      todayTime: 0,
    },
  });
  res.status(200).end("Cron job started successfully");
}
