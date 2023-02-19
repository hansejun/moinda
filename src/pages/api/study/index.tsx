import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";
import withHandler from "@utils/server/withHandler";
import withSession from "@utils/server/withSession";

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
      res.status(201).json({ id: study.id });
    } catch (e) {
      res.status(400).send("스터디 개설에 실패하였습니다.");
    }
  }
}
export default withSession(withHandler({ methods: ["GET", "POST"], handler }));
