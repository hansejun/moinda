import { withIronSessionSsr } from "iron-session/next";

interface IProps {
  isPrivate?: boolean;
}

const withSessionSsr = ({ isPrivate = true }: IProps) =>
  withIronSessionSsr(
    async ({ req, res }) => {
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
          },
        };
      }

      return {
        props: {
          loginUser,
        },
      };
    },
    {
      password: process.env.SESSION_PASSWORD!,
      cookieName: "Authorization",
    }
  );

export default withSessionSsr;
