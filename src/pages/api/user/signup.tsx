import { NextApiRequest, NextApiResponse } from "next";
import client from "@utils/server/client";

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") res.status(401).end();
  res.status(201).end();
}
