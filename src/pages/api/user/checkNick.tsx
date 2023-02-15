import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";
import withHandler from "@utils/server/withHandler";

async function checkNickname(req: NextApiRequest, res: NextApiResponse) {
  const { nickname } = req.body;
  if (!nickname || nickname.length < 2)
    res.status(401).json({ message: "닉네임을 확인해주세요" });
  res.status(201).end();
}
export default withHandler("POST", checkNickname);
