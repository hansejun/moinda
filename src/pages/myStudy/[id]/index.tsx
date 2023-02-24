import { IPageProps } from "@allTypes/props";
import CustomHead from "@components/layout/head";
import Layout from "@components/layout/layout";
import MyStudyHome from "@components/myStudy/home/myStudyHome";
import SideNav from "@components/myStudy/sideNav";
import withSessionSsr from "@utils/client/withSessionSsr";
import React from "react";

const MyStudy = ({ loginUser }: IPageProps) => {
  return (
    <Layout hasBgColor={true} isFullHeight>
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