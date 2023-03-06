import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";
import withHandler from "@utils/server/withHandler";
import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY!);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email } = req.body;
    if (!email) return res.status(401).send("이메일을 확인해주세요.");

    const user = await client.user.findUnique({ where: { email } });
    if (user) return res.status(401).send("이미 존재하는 이메일 입니다.");

    // 이메일 인증번호 생성해서 프론트로 전달.
    const payload = Math.floor(100000 + Math.random() * 900000) + "";

    console.log(process.env.SENDGRID_API_KEY);
    const response = await mail.send({
      from: "vyct7612@gmail.com",
      to: email,
      subject: "모인다 이메일 인증번호 입니다.",
      text: `인증번호는 ${payload}`,
      html: `인증번호는 <strong>${payload}</strong>`,
    });

    console.log(response, process.env.SENDGRID_API_KEY);

    return res.status(201).json({ payload });
  } catch (e) {
    return res.status(400).send("이메일 인증에 실패하였습니다.");
  }
}

export default withHandler({ methods: ["POST"], handler, isPrivate: false });
