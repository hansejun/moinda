import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";
import withHandler from "@utils/server/withHandler";
import withSession from "@utils/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;
  const existUser = await client.user.findUnique({ where: { email } });
  if (!existUser) return res.status(401).send("이메일이 존재하지 않습니다.");
  if (existUser.password !== password)
    return res.status(401).send("비밀번호가 일치하지 않습니다.");
  req.session.user = {
    id: existUser?.id,
    avatarImg: existUser?.avatarImg,
  };
  await req.session.save();
  // 이메일,닉네임,비밀번호를 저장
  const { id, avatarImg } = existUser;
  res.status(201).json({
    user: {
      id,
      avatarImg,
    },
  });
}
export default withSession(
  withHandler({ methods: ["POST"], handler, isPrivate: false })
);
