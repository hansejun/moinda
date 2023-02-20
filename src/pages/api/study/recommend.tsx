import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";
import withHandler from "@utils/server/withHandler";
import withSession from "@utils/server/withSession";
import { CATEGORY } from "@prisma/client";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category, count } = req.query;
  try {
    let studyList;
    if (category === "TOTAL") {
      studyList = await client.study.findMany({
        where: { studyStatus: "RECRUIT" },
        take: +count!,
        orderBy: { views: "desc" },
        include: {
          user: {
            select: {
              id: true,
              avatarImg: true,
              nickname: true,
            },
          },
        },
      });
    } else {
      studyList = await client.study.findMany({
        where: { category: category as CATEGORY, studyStatus: "RECRUIT" },
        take: +count!,
        orderBy: { views: "desc" },
        include: {
          user: {
            select: {
              id: true,
              avatarImg: true,
              nickname: true,
            },
          },
        },
      });
    }
    res.status(200).json(studyList);
  } catch (e) {
    res.status(400).send("추천 목록을 가져오는데 실패하였습니다.");
  }
  res.status(200).end();
}
export default withSession(
  withHandler({ methods: ["GET"], handler, isPrivate: false })
);
