import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";
import withHandler from "@utils/server/withHandler";
import withSession from "@utils/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  try {
    await client.alarm.delete({ where: { id: +id! } });
  } catch (e) {
    res.status(400).send("알림 삭제에 실패하였습니다.");
  }
}
export default withSession(
  withHandler({ methods: ["DELETE"], handler, isPrivate: true })
);
