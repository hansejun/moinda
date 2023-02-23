import Layout from "@components/layout/layout";
import LogoutBtn from "@components/profile/logoutBtn";
import MyStudyList from "@components/profile/myStudyList/myStudyList";
import ProfileCard from "@components/profile/profileCard";
import CurrentSituation from "@components/profile/currentSituation";
import EndStudy from "@components/profile/endStudy";
import StudyLog from "@components/profile/studyLog";
import React from "react";
import LineProgressBar from "@elements/lineProgressBar";

const Profile = () => {
  return (
    <Layout hasBgColor>
      <main className="mt-[5rem] grid grid-cols-[1fr_2fr] gap-[2.6rem]">
        <div className="flex flex-col space-y-[2.6rem]">
          <ProfileCard />
          <CurrentSituation />
          <LogoutBtn />
        </div>
        <div className=" flex flex-col space-y-[3.2rem]">
          <LineProgressBar type="PROFILE" />
          <div className="grid grid-cols-[5fr_3fr] gap-[2.6rem]">
            <div className="flex flex-col space-y-[2.6rem]">
              <MyStudyList />
              {/* <EndStudy /> */}
            </div>
            <StudyLog />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Profile;
