import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";
import withHandler from "@utils/server/withHandler";
import withSession from "@utils/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user } = req.session;
  const { targetTime } = req.body;
  await client.user.update({
    where: { id: user.id },
    data: { targetTime: +targetTime },
  });

  res.status(200).end();
}
export default withSession(
  withHandler({ methods: ["PUT"], handler, isPrivate: true })
);
