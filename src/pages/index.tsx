import { IPageProps } from "@allTypes/props";
import CustomHead from "@components/layout/head";
import Layout from "@components/layout/layout";
import BestStudy from "@components/main/bestStudy";
import BestTag from "@components/main/bestTag";
import CategoryBtn from "@components/main/categoryBtn";
import NewStudy from "@components/main/newStudy";
import ParticipatingStudy from "@components/main/participatingStudy";
import Pomodoro from "@components/main/pomodoro";
import withSessionSsr from "@utils/client/withSessionSsr";
import type { NextPage } from "next";

const Home: NextPage = ({ loginUser }: IPageProps) => {
  return (
    <Layout loginUser={loginUser}>
      <CustomHead />
      <div className="grid grid-cols-[3fr_2fr] lg:grid-cols-[1fr_3fr_2fr] gap-[4.6rem] mt-[5.4rem] ">
        <CategoryBtn />
        <div className="flex flex-col space-y-[7.2rem]">
          <BestStudy />
          <NewStudy />
        </div>
        <div className=" nm:max-w-[40rem]">
          <div className="flex flex-col space-y-[1.8rem]">
            <h2 className="H2 text-primary-600">참여 중인 스터디그룹</h2>
            <ParticipatingStudy />
          </div>
          <BestTag />
          <Pomodoro />
        </div>
      </div>
    </Layout>
  );
};

export default Home;

export const getServerSideProps = withSessionSsr({ isPrivate: false });
