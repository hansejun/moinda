import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";
import withHandler from "@utils/server/withHandler";
import withSession from "@utils/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const profile = await client.user.findUnique({
    where: { id: req.session.user?.id },
  });
  if (!profile) return res.status(401).end();
  const { id, email, avatarImg, nickname, score, totalTime } = profile;
  res.status(201).json({ id, email, avatarImg, nickname, score, totalTime });
}
export default withSession(withHandler({ methods: ["GET"], handler }));
