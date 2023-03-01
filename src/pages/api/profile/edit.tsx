import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";
import withHandler from "@utils/server/withHandler";
import withSession from "@utils/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { nickname, avatarImg } = req.body;
  console.log("nick,avatar", nickname, avatarImg);
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
    res.status(200).json(updateUser);
  } catch (e) {
    console.log(e);
    res.status(400).send("프로필 수정에 실패하였습니다.");
  }
}
export default withSession(
  withHandler({ methods: ["PUT"], handler, isPrivate: true })
);
