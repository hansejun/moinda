import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";
import withHandler from "@utils/server/withHandler";
import withSession from "@utils/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  try {
    const user = await client.user.findUnique({
      where: { id: +id! },
      select: {
        id: true,
        nickname: true,
        avatarImg: true,
        score: true,
        totalTime: true,
        attendance: true,
        studyList: {
          include: {
            hashTagList: true,
          },
        },
      },
    });
    res.status(200).json(user);
  } catch (e) {
    console.log(e);
    res.status(400).send("프로필 페이지 조회에 실패하였습니다.");
  }
}
export default withSession(
  withHandler({ methods: ["GET"], handler, isPrivate: false })
);