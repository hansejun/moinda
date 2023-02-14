import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";

export default async function checkEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") res.status(401).end();
  console.log(req.body);
  // 이메일이 존재하는지 확인
  res.status(201).end();
}
