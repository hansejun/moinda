import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@utils/server/withHandler";
import withApiSession from "@utils/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await (
    await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/images/v1/direct_upload`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CLOUDFLARE_IMAGES_TOKEN}`,
        },
      }
    )
  ).json();
  console.log(response);
  res.json(response.result);
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
