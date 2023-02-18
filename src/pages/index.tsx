import { IHomeProps } from "@allTypes/props";
import Layout from "@components/layout/layout";
import BestStudy from "@components/main/bestStudy";
import BestTag from "@components/main/bestTag";
import CategoryBtn from "@components/main/categoryBtn";
import NewStudy from "@components/main/newStudy";
import Pomodoro from "@components/main/pomodoro";
import Studing from "@components/main/studing";
import StudyCheck from "@components/main/studyCheck";
import useUser from "@hooks/useUser";
import { withIronSessionSsr } from "iron-session/next";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = ({ loginUser }: IHomeProps) => {
  return (
    <Layout loginUser={loginUser}>
      <Head>
        <title>MOINDA</title>
      </Head>
      <div className="flex">
        <CategoryBtn />
        <div className="ml-[2.6rem]">
          <BestStudy />
          <NewStudy />
        </div>
        <div className=" ml-[5.2rem]">
          <div>
            <h2 className="H2 mb-[1.8rem] mt-[5.4rem] text-primary-600">
              참여 중인 스터디그룹
            </h2>
            <Studing />
          </div>
          <StudyCheck />
          <BestTag />
          <Pomodoro />
        </div>
      </div>
    </Layout>
  );
};

export default Home;

export const getServerSideProps = withIronSessionSsr(
  async ({ req }) => {
    const loginUser = req.session?.user;

    if (!loginUser) {
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
