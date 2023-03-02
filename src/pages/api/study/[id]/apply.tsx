import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";
import withHandler from "@utils/server/withHandler";
import withSession from "@utils/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const { receiverId } = req.body;
  const { user } = req.session;
  try {
    const isExist = await client.alarm.findFirst({
      where: { studyId: +id!, senderId: user.id },
    });
    if (isExist)
      return res.status(400).send("이미 해당 스터디를 신청했습니다.");
    const alarm = await client.alarm.create({
      data: {
        study: {
          connect: { id: +id! },
        },
        user: {
          connect: { id: +user.id! },
        },
        receiverId: +receiverId,
        state: "CHECK",
      },
    });
    res.status(201).json(alarm);
  } catch (e) {
    res.status(400).send("스터디 신청에 실패하였습니다.");
  }
}
export default withSession(
  withHandler({ methods: ["POST"], handler, isPrivate: true })
);
