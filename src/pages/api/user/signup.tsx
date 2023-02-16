import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";
import withHandler from "@utils/server/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password, nickname } = req.body;

  const existUser = await client.user.findUnique({ where: { email } });
  if (existUser)
    res.status(401).json({ msessage: "이미 존재하는 계정입니다." });

  try {
    const user = await client.user.create({
      data: {
        email,
        password,
        nickname,
      },
    });
    res.status(201).end();
  } catch (e) {
    console.log(e);
    res.status(401).json({ message: "회원가입에 실패하였습니다." });
  }
}

export default withHandler({ method: "POST", handler, isPrivate: false });
