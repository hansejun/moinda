import { User } from "@prisma/client";

export interface ILayoutProps {
  children: JSX.Element[] | JSX.Element;
  hasBgColor?: boolean;
  isFullHeight?: boolean;
  loginUser?: User;
}

export interface IHeaderProps {
  loginUser?: User;
}

export interface IPageProps {
  loginUser?: User;
}
