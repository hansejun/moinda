import { IncomingMessage, ServerResponse } from "http";

interface IProps {
  req: IncomingMessage & {
    cookies: Partial<{ [key: string]: string }>;
  };
  res: ServerResponse;
  isPrivate: boolean;
}

const loginAndPrivateValid = ({ req, res, isPrivate }: IProps) => {
  const loginUser = req.session?.user;
  if (!loginUser) {
    if (isPrivate) {
      res.setHeader("location", "/start/signin");
      res.statusCode = 302;
      res.end();
    }
  }
  return loginUser ? loginUser : {};
};

export default loginAndPrivateValid;
