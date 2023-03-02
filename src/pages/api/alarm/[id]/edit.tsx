import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";
import withHandler from "@utils/server/withHandler";
import withSession from "@utils/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user } = req.session;
  const { id } = req.query;
  const { state, receiverId } = req.body;
  if (state !== "APPROVE" && state !== "REFUSE")
    res.status(400).send("잘못된 입력입니다.");
  let updateAlarm;
  try {
    if (state === "APPROVE") {
      updateAlarm = await client.alarm.update({
        where: { id: +id! },
        data: {
          user: {
            connect: {
              id: user.id,
            },
          },
          state: "APPROVE",
          receiverId: +receiverId,
        },
      });

      await client.member.create({
        data: {
          user: {
            connect: { id: +receiverId },
          },
          study: {
            connect: { id: updateAlarm.studyId },
          },
        },
      });
      res.status(201).send("멤버가 성공적으로 추가되었습니다.");
    } else {
      updateAlarm = await client.alarm.update({
        where: { id: +id! },
        data: {
          user: {
            connect: {
              id: user.id,
            },
          },
          state: "REFUSE",
          receiverId: +receiverId,
        },
      });
      res.status(200).send("거절상태로 성공적으로 변경되었습니다.");
    }
  } catch (e) {
    res.status(400).send("멤버 추가에 실패하였습니다.");
  }
}
export default withSession(
  withHandler({ methods: ["PUT"], handler, isPrivate: true })
);
