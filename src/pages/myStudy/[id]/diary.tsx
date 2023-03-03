import { IPageProps } from "@allTypes/props";
import CustomHead from "@components/layout/head";
import Layout from "@components/layout/layout";
import GroupDiary from "@components/myStudy/diary/groupDiary";

import SideNav from "@components/myStudy/sideNav";
import withSessionSsr from "@utils/client/withSessionSsr";
import { NextPage } from "next";

const Diary: NextPage = ({ loginUser }: IPageProps) => {
  return (
    <Layout hasBgColor={true} isFullHeight loginUser={loginUser}>
      <CustomHead title="스터디 이름" />
      <div className="grid flex-1 grid-cols-[1fr_2fr_8fr_1fr] gap-[2.6rem] pt-[5rem]">
        <SideNav loginUserId={loginUser?.id!} />
        <GroupDiary />
      </div>
    </Layout>
  );
};

export default Diary;

export const getServerSideProps = withSessionSsr({ isPrivate: false });
