import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";
import withHandler from "@utils/server/withHandler";
import withSession from "@utils/server/withSession";
import { CATEGORY } from "@prisma/client";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const {
        title,
        category,
        studyName,
        content,
        icon,
        tel,
        hashTagList,
        startDate,
      } = req.body;
      const { id } = req.session.user;
      // 스터디 생성

      const study = await client.study.create({
        data: {
          title,
          category,
          studyName,
          content,
          icon,
          tel,
          startDate,
          user: {
            connect: {
              id,
            },
          },
        },
      });

      // 해시태그 생성
      if (hashTagList && hashTagList?.length > 0) {
        hashTagList.forEach(async (hashTag: string) => {
          await client.hashTag.create({
            data: {
              tagName: hashTag,
              study: {
                connect: { id: study.id },
              },
            },
          });
        });
      }

      // 맴버 생성
      await client.member.create({
        data: {
          study: {
            connect: { id: study.id },
          },
          user: {
            connect: { id: id },
          },
        },
      });
      res.status(201).json({ id: study.id });
    } catch (e) {
      res.status(400).send("스터디 개설에 실패하였습니다.");
    }
  }
  if (req.method === "GET") {
    const { category, count, page } = req.query;

    try {
      let studyList;
      if (category === "TOTAL") {
        studyList = await client.study.findMany({
          take: +count!,
          orderBy: {
            createdAt: "desc",
          },
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
          where: { category: category as CATEGORY },
          take: +count!,
          orderBy: { createdAt: "desc" },
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
      res.status(400).send("스터디 조회에 실패하였습니다.");
    }

    res.status(200).end();
  }
}
export default withSession(
  withHandler({ methods: ["GET", "POST"], handler, isPrivate: false })
);
