import { IPageProps } from "@allTypes/props";
import CustomHead from "@components/layout/head";
import Layout from "@components/layout/layout";
import withSessionSsr from "@utils/client/withSessionSsr";
import { NextPage } from "next";
import React from "react";

const StudyList: NextPage = ({ loginUser }: IPageProps) => {
  return (
    <Layout loginUser={loginUser}>
      <CustomHead title="스터디 게시판" />
      <div>heelo</div>
    </Layout>
  );
};

export default StudyList;

export const getServerSideProps = withSessionSsr({ isPrivate: false });
