import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";
import withHandler from "@utils/server/withHandler";
import withSession from "@utils/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const { nickname, avatarImg } = req.body;
  const { user } = req.session;
  if (+id! !== user?.id) return res.status(403).send("수정 권한이 없습니다.");

  try {
    const updateUser = client.user.update({
      where: { id: user.id },
      data: {
        nickname,
        avatarImg,
      },
    });
    res.status(200).json(updateUser);
  } catch (e) {
    console.log(e);
    res.status(400).send("프로필 수정에 실패하였습니다.");
  }
}
export default withSession(
  withHandler({ methods: ["PUT"], handler, isPrivate: true })
);
