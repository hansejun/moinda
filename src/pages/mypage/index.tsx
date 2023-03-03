import Layout from "@components/layout/layout";
import LogoutBtn from "@components/profile/logoutBtn";
import MyStudyList from "@components/profile/myStudyList/myStudyList";
import ProfileCard from "@components/profile/profileCard/profileCard";
import CurrentSituation from "@components/profile/currentSituation";
import EndStudy from "@components/profile/endStudy";
import StudyLog from "@components/profile/studyLog";
import React from "react";
import withSessionSsr from "@utils/client/withSessionSsr";
import { IPageProps } from "@allTypes/props";
import ProgressSection from "@components/profile/progress/progressSection";

const Mypage = ({ loginUser }: IPageProps) => {
  return (
    <Layout hasBgColor loginUser={loginUser}>
      <main className="mt-[5rem] grid gap-[2.6rem] lg:grid-cols-[1fr_2fr]">
        <div className="grid grid-cols-2 gap-[2.6rem] lg:flex lg:flex-col">
          <ProfileCard />
          <CurrentSituation />
          <LogoutBtn />
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

export const getServerSideProps = withSessionSsr({});
