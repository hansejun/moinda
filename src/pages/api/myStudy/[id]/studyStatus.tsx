import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";
import withHandler from "@utils/server/withHandler";
import withSession from "@utils/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const { studyStatus } = req.body;
  await client.study.update({
    where: { id: +id! },
    data: { studyStatus },
  });

  res.status(200).end();
}
export default withSession(
  withHandler({ methods: ["PUT"], handler, isPrivate: true })
);
