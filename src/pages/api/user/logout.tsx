import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@utils/server/withHandler";
import withSession from "@utils/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  req.session.destroy();
  res.status(200).end();
}
export default withSession(withHandler({ methods: ["POST"], handler }));
