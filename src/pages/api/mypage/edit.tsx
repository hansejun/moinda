import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";
import withHandler from "@utils/server/withHandler";
import withSession from "@utils/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { nickname, avatarImg } = req.body;

  const { user } = req.session;
  let updateUser;
  try {
    if (nickname && avatarImg) {
      updateUser = await client.user.update({
        where: { id: user.id },
        data: {
          nickname,
          avatarImg,
        },
      });
    } else {
      updateUser = await client.user.update({
        where: { id: user.id },
        data: {
          nickname,
        },
      });
    }

    req.session.user = {
      id: updateUser.id,
      nickname: updateUser.nickname,
      avatarImg: updateUser.avatarImg,
    };
    await req.session.save();
    res.status(200).json(updateUser);
  } catch (e) {
    res.status(400).send("프로필 수정에 실패하였습니다.");
  }
}
export default withSession(
  withHandler({ methods: ["PUT"], handler, isPrivate: true })
);
