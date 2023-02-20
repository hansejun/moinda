import { IPageProps } from "@allTypes/props";
import CustomHead from "@components/layout/head";
import Layout from "@components/layout/layout";
import BestTag from "@components/studyCommon/bestTag";
import CategoryBtn from "@components/studyCommon/categoryBtn";
import ParticipatingStudy from "@components/studyCommon/participatingStudy";
import Pomodoro from "@components/main/pomodoro";
import CategoryStudyList from "@components/study/studyList/categoryStudyList";
import RecommendStudyList from "@components/study/studyList/recommendStudyList";
import ColumnCategory from "@components/studyCommon/columnCategory";
import withSessionSsr from "@utils/client/withSessionSsr";
import type { NextPage } from "next";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { studyCategoryAtom } from "@atoms/studyAtom";

const StudyList: NextPage = ({ loginUser }: IPageProps) => {
  const setCategory = useSetRecoilState(studyCategoryAtom);

  useEffect(() => {
    return () => setCategory("TOTAL");
  }, [setCategory]);
  return (
    <Layout loginUser={loginUser}>
      <CustomHead title="스터디 게시판" />
      <div className="grid sm:grid-cols-[3fr_1.6fr] lg:grid-cols-[1fr_3fr_2fr] gap-[4.6rem] mt-[5.4rem] ">
        <div className=" hidden lg:block">
          <CategoryBtn />
        </div>
        <div className="flex flex-col sm:col-span-2 nm:col-span-1">
          <div className="block lg:hidden mb-[4rem]">
            <ColumnCategory />
          </div>
          <div className="flex flex-col space-y-[7.2rem]">
            <RecommendStudyList />
            <CategoryStudyList />
          </div>
        </div>
        <div className=" hidden nm:flex nm:flex-col nm:max-w-[40rem]">
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

export default StudyList;

export const getServerSideProps = withSessionSsr({ isPrivate: false });
