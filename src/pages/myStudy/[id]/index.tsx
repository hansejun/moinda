import { IPageProps } from "@allTypes/props";
import StudyRoomApi from "@apis/query/studyRoomApi";
import CustomHead from "@components/layout/head";
import Layout from "@components/layout/layout";
import MyStudyHome from "@components/myStudy/home/myStudyHome";
import SideNav from "@components/myStudy/sideNav";
import withSessionSsr from "@utils/client/withSessionSsr";
import { useRouter } from "next/router";
import React from "react";

const MyStudy = ({ loginUser }: IPageProps) => {
  const router = useRouter();
  const { id } = router.query;
  const { data: myStudyData } = StudyRoomApi.ReadStudy(id + "");
  return (
    <Layout hasBgColor={true} isFullHeight loginUser={loginUser}>
      <CustomHead title="스터디 이름" />
      <div className="grid flex-1 grid-cols-[1fr_2fr_8fr_1fr] gap-[2.6rem] pt-[5rem]">
        <SideNav />
        <MyStudyHome />
      </div>
    </Layout>
  );
};

export default MyStudy;

export const getServerSideProps = withSessionSsr({ isPrivate: false });
