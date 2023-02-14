import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";

export default async function signin(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") res.status(401).end();
  // 이메일,닉네임,비밀번호를 저장
  res.status(201).end();
}
