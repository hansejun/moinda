import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";
import withHandler from "@utils/server/withHandler";
import withSession from "@utils/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  try {
    const study = await client.study.findUnique({
      where: { id: +id! },
      include: {
        user: {
          select: {
            id: true,
            nickname: true,
            avatarImg: true,
          },
        },
        hashTagList: {
          where: { studyId: +id! },
        },
      },
    });
    res.status(200).json(study);
  } catch (e) {
    res.status(400).send("스터디 상세페이지 조회에 실패하였습니다.");
  }
}
export default withSession(
  withHandler({ methods: ["GET"], handler, isPrivate: false })
);
