import Layout from "@components/layout/layout";
import LogoutBtn from "@components/profile/logoutBtn";
import MyStudyList from "@components/profile/myStudyList/myStudyList";
import ProfileCard from "@components/profile/profileCard";
import CurrentSituation from "@components/profile/currentSituation";
import EndStudy from "@components/profile/endStudy";
import StudyLog from "@components/profile/studyLog";
import React from "react";
import LineProgressBar from "@elements/lineProgressBar";
import withSessionSsr from "@utils/client/withSessionSsr";
import { IPageProps } from "@allTypes/props";
import profileApi from "@apis/query/profile";
import { useRouter } from "next/router";

const Profile = ({ loginUser }: IPageProps) => {
  const router = useRouter();
  const { id } = router.query;
  const { data: profile } = profileApi.ReadUser(id as string);

  return (
    <Layout hasBgColor loginUser={loginUser}>
      <main className="mt-[5rem] grid gap-[2.6rem] lg:grid-cols-[1fr_2fr]">
        <div className="grid grid-cols-2 gap-[2.6rem] lg:flex lg:flex-col">
          <ProfileCard id={id + ""} />
          <CurrentSituation id={id + ""} />
          <LogoutBtn />
        </div>
        <div className=" flex flex-col space-y-[3.2rem]">
          <LineProgressBar type="PROFILE" />
          <div className="grid grid-cols-[5fr_3fr] gap-[2.6rem]">
            <div className="flex flex-col space-y-[2.6rem]">
              <MyStudyList id={id + ""} />
              <EndStudy />
            </div>
            <StudyLog />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Profile;

export const getServerSideProps = withSessionSsr({});
