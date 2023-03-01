import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";
import withHandler from "@utils/server/withHandler";
import withSession from "@utils/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const myStudy = await client.study.findUnique({
    where: { id: +id! },
    include: {
      hashTagList: true,
      _count: {
        select: {
          memberList: true,
        },
      },
    },
  });

  res.status(200).json(myStudy);
}
export default withSession(
  withHandler({ methods: ["GET"], handler, isPrivate: true })
);
