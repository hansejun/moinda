import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";
import withHandler from "@utils/server/withHandler";
import withSession from "@utils/server/withSession";
import { CATEGORY } from "@prisma/client";

async function handler(req: NextApiRequest, res: NextApiResponse) {
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
    const { id } = req.query;

    // 스터디 수정
    const study = await client.study.update({
      where: { id: +id! },
      data: {
        title,
        category,
        studyName,
        content,
        icon,
        tel,
        startDate,
      },
    });

    // 해시태그 삭제
    await client.hashTag.deleteMany({ where: { studyId: +id! } });

    // 해시태그 수정
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

    res.status(200).json({ id: study.id });
  } catch (e) {
    res.status(400).send("스터디 수정에 실패하였습니다.");
  }
}

export default withSession(
  withHandler({ methods: ["PUT"], handler, isPrivate: true })
);
