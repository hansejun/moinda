import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";
import withHandler from "@utils/server/withHandler";
import withSession from "@utils/server/withSession";

async function me(req: NextApiRequest, res: NextApiResponse) {
  const profile = await client.user.findUnique({
    where: { id: req.session.user?.id },
  });
  res.status(201).json({ profile });
}
export default withSession(withHandler("GET", me));
