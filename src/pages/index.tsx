import { IPageProps } from "@allTypes/props";
import CustomHead from "@components/layout/head";
import Layout from "@components/layout/layout";
import BestStudyList from "@components/main/bestStudy/bestStudyList";
import BestTag from "@components/studyCommon/bestTag";
import CategoryBtn from "@components/studyCommon/categoryBtn";
import NewStudy from "@components/main/newStudy/newStudy";
import ParticipatingStudy from "@components/studyCommon/participatingStudy";
import Pomodoro from "@components/main/pomodoro";
import withSessionSsr from "@utils/client/withSessionSsr";
import type { NextPage } from "next";
import { useSetRecoilState } from "recoil";
import { studyCategoryAtom } from "@atoms/studyAtom";
import { useEffect } from "react";

const Home: NextPage = ({ loginUser }: IPageProps) => {
  const setCategory = useSetRecoilState(studyCategoryAtom);

  useEffect(() => {
    return () => setCategory("TOTAL");
  }, [setCategory]);
  return (
    <Layout loginUser={loginUser}>
      <CustomHead />
      <div className="grid grid-cols-1 sm:grid-cols-[3fr_1.6fr] lg:grid-cols-[1fr_3fr_2fr] gap-[4.6rem] mt-[5.4rem] ">
        <CategoryBtn />
        <div className="flex flex-col space-y-[7.2rem] sm:col-span-2 nm:col-span-1">
          <BestStudyList />
          <NewStudy />
        </div>
        <div className="hidden nm:flex nm:flex-col nm:max-w-[40rem] ">
          <div className="flex flex-col space-y-[1.8rem]">
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
