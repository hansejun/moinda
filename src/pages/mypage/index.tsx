import Layout from "@components/layout/layout";
import MyStudyList from "@components/profile/myStudyList/myStudyList";
import ProfileCard from "@components/profile/profileCard/profileCard";
import CurrentSituation from "@components/profile/currentSituation";
import EndStudy from "@components/profile/endStudy";
import StudyLog from "@components/profile/studyLog";
import React from "react";
import { IPageProps } from "@allTypes/props";
import ProgressSection from "@components/profile/progress/progressSection";
import { withIronSessionSsr } from "iron-session/next";
import loginAndPrivateValid from "@utils/client/loginAndPrivateValid";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { readAttendanceApi } from "@apis/query/attendance";
import { readMypageApi } from "@apis/query/profile";
import dynamic from "next/dynamic";

const LogoutBtn = dynamic(() => import("@components/profile/logoutBtn"));

const Mypage = ({ loginUser }: IPageProps) => {
  return (
    <Layout hasBgColor loginUser={loginUser}>
      <main className="mt-[5rem] grid grid-cols-[1fr_2fr] gap-[2.6rem]">
        <div className=" flex flex-col gap-[2.6rem]">
          <ProfileCard />
          <CurrentSituation />
          {loginUser?.id && <LogoutBtn />}
        </div>
        <div className=" flex flex-col space-y-[3.2rem]">
          <ProgressSection />
          <div className="grid grid-cols-[5fr_3fr] gap-[2.6rem]">
            <div className="flex flex-col space-y-[2.6rem]">
              <MyStudyList />
              <EndStudy />
            </div>
            <StudyLog />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Mypage;

export const getServerSideProps = withIronSessionSsr(
  async ({ req, res }) => {
    const loginUser = loginAndPrivateValid({ req, res, isPrivate: true });

    const queryClient = new QueryClient();
    await Promise.all([
      queryClient.prefetchQuery(["attendance"], readAttendanceApi),
      queryClient.prefetchQuery(["mypage"], readMypageApi),
    ]);
    return {
      props: {
        loginUser,
        dehydratedState: dehydrate(queryClient),
      },
    };
  },
  {
    password: process.env.SESSION_PASSWORD!,
    cookieName: "Authorization",
  }
);
