import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@utils/server/withHandler";
import client from "@utils/server/client";
import withApiSession from "@utils/server/withSession";
import axios from "axios";
import { imageApi } from "@apis/axios";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    data: { result },
  } = await imageApi.post("");

  res.json(result);
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
