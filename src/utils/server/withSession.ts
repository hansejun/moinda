import { withIronSessionApiRoute } from "iron-session/next";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
      avatarImg: string | null;
    };
  }
}

const cookieOptions = {
  cookieName: "Authorization",
  password: process.env.SESSION_PASSWORD!,
};

export default function withSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOptions);
}
