import cls from "@utils/client/cls";

interface IMain {
  children: JSX.Element[] | JSX.Element;
  isFullHeight?: boolean;
}

const Main = ({ children, isFullHeight }: IMain) => {
  return (
    <main
      className={cls(
        "body-height mx-auto w-full min-w-[785px]  px-[3rem] pb-[6rem] lg:w-[144rem] lg:px-0",
        isFullHeight && "flex flex-col"
      )}
    >
      {children}
    </main>
  );
};

export default Main;
