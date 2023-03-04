import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";
import withHandler from "@utils/server/withHandler";
import withSession from "@utils/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  try {
    const members = await client.member.findMany({
      where: { studyId: +id! },
      include: {
        user: {
          select: {
            avatarImg: true,
            id: true,
            attendance: true,
          },
        },
      },
    });
    res.status(200).json(members);
  } catch (e) {
    res.status(400).send("맴버 조회에 실패하였습니다.");
  }
}
export default withSession(
  withHandler({ methods: ["GET"], handler, isPrivate: true })
);
