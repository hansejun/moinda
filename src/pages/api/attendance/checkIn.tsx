import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";
import withHandler from "@utils/server/withHandler";
import withSession from "@utils/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user } = req.session;
  const { checkIn } = req.body;

  try {
    const attendance = await client.attendance.findFirst({
      where: { userId: user.id },
    });
    if (attendance?.checkIn) {
      await client.attendance.update({
        where: { id: attendance.id },
        data: {
          log: checkIn,
        },
      });
    } else {
      await client.attendance.update({
        where: { id: attendance!.id },
        data: {
          checkIn,
          log: checkIn,
        },
      });
    }
    res.status(200).end();
  } catch (e) {
    res.status(400).send("출석체크에 실패하였습니다.");
  }
}
export default withSession(
  withHandler({ methods: ["POST"], handler, isPrivate: false })
);
