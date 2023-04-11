import { IPageProps } from "@allTypes/props";
import { readMemberListApi, readMyStudyApi } from "@apis/query/studyRoomApi";
import { readMeApi } from "@apis/query/userApi";
import CustomHead from "@components/layout/head";
import Layout from "@components/layout/layout";
import MyStudyHome from "@components/myStudy/home/myStudyHome";
import SideNav from "@components/myStudy/sideNav";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import loginAndPrivateValid from "@utils/client/loginAndPrivateValid";
import { withIronSessionSsr } from "iron-session/next";
import React from "react";
import { readAttendanceApi } from "@apis/query/attendance";

const MyStudy = ({ loginUser }: IPageProps) => {
  return (
    <Layout hasBgColor={true} isFullHeight loginUser={loginUser}>
      <CustomHead title="스터디 이름" />
      <div className="grid flex-1 grid-cols-[1fr_2fr_8fr_1fr] gap-[2.6rem] pt-[5rem]">
        <SideNav loginUserId={loginUser?.id!} />
        <MyStudyHome />
      </div>
    </Layout>
  );
};

export default MyStudy;

export const getServerSideProps = withIronSessionSsr(
  async ({ req, res, query }) => {
    const loginUser = loginAndPrivateValid({ req, res, isPrivate: true });
    const { id } = query;
    const queryClient = new QueryClient();
    await Promise.all([
      queryClient.prefetchQuery(["loginUser"], readMeApi),
      queryClient.prefetchQuery(["members", "14"], () =>
        readMemberListApi(id as string)
      ),
      queryClient.prefetchQuery(["attendance"], readAttendanceApi),
      queryClient.prefetchQuery(["myStudy", "14"], () =>
        readMyStudyApi(id as string)
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
