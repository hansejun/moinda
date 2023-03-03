import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";
import withHandler from "@utils/server/withHandler";
import withSession from "@utils/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user } = req.session;
  const { count } = req.query;

  const memberList = await client.member.findMany({
    where: { userId: user?.id },
    take: Number(count) ? Number(count) : undefined,
    include: {
      study: {
        include: {
          hashTagList: true,
          _count: {
            select: {
              memberList: true,
            },
          },
        },
      },
    },
  });

  console.log();
  res.status(200).json(memberList);
}
export default withSession(
  withHandler({ methods: ["GET"], handler, isPrivate: true })
);
