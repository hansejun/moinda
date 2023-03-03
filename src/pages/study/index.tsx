import { IPageProps } from "@allTypes/props";
import CustomHead from "@components/layout/head";
import Layout from "@components/layout/layout";
import CategoryBtn from "@components/common/category/categoryBtn";
import CategoryStudyList from "@components/study/studyList/categoryStudyList";
import RecommendStudyList from "@components/study/studyList/recommendStudyList";
import ColumnCategory from "@components/common/category/columnCategory";
import withSessionSsr from "@utils/client/withSessionSsr";
import type { NextPage } from "next";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { studyCategoryAtom } from "@atoms/studyAtom";
import dynamic from "next/dynamic";

const ParticipatingStudy = dynamic(
  () => import("@components/common/paricipating/studyList"),
  { ssr: false }
);

const Pomodoro = dynamic(() => import("@components/common/pomodoro/pomodoro"), {
  ssr: false,
});

const BestTag = dynamic(() => import("@components/common/bestTag/bestTag"), {
  ssr: false,
});

const StudyList: NextPage = ({ loginUser }: IPageProps) => {
  const setCategory = useSetRecoilState(studyCategoryAtom);

  useEffect(() => {
    return () => setCategory("TOTAL");
  }, [setCategory]);
  return (
    <Layout loginUser={loginUser}>
      <CustomHead title="스터디 게시판" />
      <div className="mt-[5.4rem] grid gap-[4.6rem] sm:grid-cols-[3fr_1.6fr] lg:grid-cols-[1fr_3fr_2fr] ">
        <div className=" hidden lg:block">
          <CategoryBtn />
        </div>
        <div className="flex flex-col sm:col-span-2 nm:col-span-1">
          <div className="mb-[4rem] block lg:hidden">
            <ColumnCategory />
          </div>
          <div className="flex flex-col space-y-[7.2rem]">
            <RecommendStudyList />
            <CategoryStudyList />
          </div>
        </div>
        <div className=" hidden nm:flex nm:max-w-[40rem] nm:flex-col">
          {loginUser?.id && (
            <div className="flex flex-col space-y-[1.8rem]">
              <ParticipatingStudy />
            </div>
          )}
          <BestTag />
          <Pomodoro />
        </div>
      </div>
    </Layout>
  );
};

export default StudyList;

export const getServerSideProps = withSessionSsr({ isPrivate: false });
