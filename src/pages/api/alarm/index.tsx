import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";
import withHandler from "@utils/server/withHandler";
import withSession from "@utils/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user } = req.session;
  try {
    const alarmList = await client.alarm.findMany({
      where: { receiverId: user.id },
      include: {
        user: {
          select: {
            id: true,
            nickname: true,
            avatarImg: true,
            score: true,
          },
        },
        study: {
          select: {
            id: true,
            icon: true,
            studyName: true,
          },
        },
      },
    });
    res.status(200).json(alarmList);
  } catch (e) {
    res.status(400).send("스터디 조회에 실패하였습니다.");
  }
}
export default withSession(
  withHandler({ methods: ["GET"], handler, isPrivate: true })
);
