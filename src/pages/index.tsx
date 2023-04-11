import { IPageProps } from "@allTypes/props";
import CustomHead from "@components/layout/head";
import Layout from "@components/layout/layout";
import BestStudyList from "@components/main/bestStudy/bestStudyList";
import BestTag from "@components/common/bestTag/bestTag";
import CategoryBtn from "@components/common/category/categoryBtn";
import NewStudy from "@components/main/newStudy/newStudy";
import Pomodoro from "@components/common/pomodoro/pomodoro";
import type { NextPage } from "next";
import { withIronSessionSsr } from "iron-session/next";
import loginAndPrivateValid from "@utils/client/loginAndPrivateValid";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { readAttendanceApi } from "@apis/query/attendance";
import { readMyStudyListApi } from "@apis/query/studyRoomApi";
import {
  readNewStudyListApi,
  readRecommendStudyListApi,
} from "@apis/query/studyApi";
import { useSetRecoilState } from "recoil";
import { studyCategoryAtom } from "@atoms/studyAtom";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const ParticipatingStudy = dynamic(
  () => import("@components/common/paricipating/studyList")
);

const Home: NextPage = ({ loginUser }: IPageProps) => {
  const setCategory = useSetRecoilState(studyCategoryAtom);

  useEffect(() => {
    setCategory("TOTAL");
  }, [setCategory]);

  return (
    <Layout loginUser={loginUser}>
      <CustomHead />
      <div className="mt-[5.4rem] grid grid-cols-[1fr_3fr_2fr] gap-[4.6rem] ">
        <CategoryBtn />
        <div className="col-span-1 flex flex-col space-y-[7.2rem]">
          <BestStudyList />
          <NewStudy />
        </div>
        <div className="flex max-w-[40rem] flex-col ">
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

export default Home;

export const getServerSideProps = withIronSessionSsr(
  async ({ req, res, query }) => {
    const loginUser = loginAndPrivateValid({ req, res, isPrivate: false });
    const queryClient = new QueryClient();
    await Promise.all([
      queryClient.prefetchQuery(["attendance"], readAttendanceApi),
      queryClient.prefetchQuery(["myStudyList"], () => readMyStudyListApi(3)),
      queryClient.prefetchQuery(["studyList", "TOTAL"], () =>
        readNewStudyListApi({ category: "TOTAL", count: 4 })
      ),
      queryClient.prefetchQuery(["recommendStudyList", "TOTAL"], () =>
        readRecommendStudyListApi({ category: "TOTAL", count: 5 })
      ),
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
