import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";
import withHandler from "@utils/server/withHandler";
import withSession from "@utils/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user } = req.session;

  try {
    const attendance = await client.attendance.findFirst({
      where: { userId: user.id },
    });
    res.status(200).json(attendance);
  } catch (e) {
    res.status(400).send("출석 조회에 실패하였습니다.");
  }
}
export default withSession(
  withHandler({ methods: ["GET"], handler, isPrivate: false })
);
