import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";
import withHandler from "@utils/server/withHandler";
import withSession from "@utils/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user } = req.session;
  const { gapTime } = req.body;

  try {
    const attendance = await client.attendance.findFirst({
      where: { userId: user.id },
    });
    const loginUser = await client.user.findUnique({ where: { id: user.id } });

    if (!attendance || !loginUser)
      return res.status(400).send("출석 정보를 조회하지 못했습니다.");

    await client.attendance.update({
      where: { id: attendance.id },
      data: {
        log: null,
        todayTime: attendance.todayTime + Number(gapTime),
      },
    });

    await client.user.update({
      where: { id: user.id },
      data: {
        totalTime: Number(loginUser?.totalTime) + Number(gapTime),
      },
    });

    res.status(200).end();
  } catch (e) {
    res.status(400).send("체크아웃에 실패하였습니다.");
  }
}
export default withSession(
  withHandler({ methods: ["POST"], handler, isPrivate: false })
);
