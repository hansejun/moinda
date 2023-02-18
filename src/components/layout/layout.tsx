import { ILayoutProps } from "@allTypes/props";
import cls from "@utils/client/cls";
import Header from "./header";
import Main from "./main";

const Layout = ({
  children,
  hasBgColor,
  isFullHeight,
  loginUser,
}: ILayoutProps) => {
  return (
    <div
      className={cls(
        "min-w-max pt-[6rem]",
        hasBgColor ? "bg-bgColor-200" : "bg-bgColor-100"
      )}
    >
      <Header loginUser={loginUser} />
      <Main isFullHeight={isFullHeight}>{children}</Main>
    </div>
  );
};

export default Layout;
