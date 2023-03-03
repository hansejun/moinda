import { withIronSessionSsr } from "iron-session/next";

interface IProps {
  isPrivate?: boolean;
  callback?: () => unknown;
}

const withSessionSsr = ({ isPrivate = true, callback }: IProps) =>
  withIronSessionSsr(
    async ({ req, res }) => {
      let data;
      if (typeof callback === "function") {
        data = await callback();
      }
      const loginUser = req.session?.user;
      if (!loginUser) {
        if (isPrivate) {
          res.setHeader("location", "/start/signin");
          res.statusCode = 302;
          res.end();
        }
        return {
          props: {
            loginUser: {},
            data: data || null,
          },
        };
      }

      return {
        props: {
          loginUser,
          data: data || null,
        },
      };
    },
    {
      password: process.env.SESSION_PASSWORD!,
      cookieName: "Authorization",
    }
  );

export default withSessionSsr;
