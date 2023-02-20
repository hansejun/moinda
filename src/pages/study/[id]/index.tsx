import { IPageProps } from "@allTypes/props";
import studyApi from "@apis/query/studyApi";
import CustomHead from "@components/layout/head";
import Layout from "@components/layout/layout";
import Icons from "@elements/icon";
import withSessionSsr from "@utils/client/withSessionSsr";
import dayjs from "dayjs";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const StudyDetail = ({ loginUser }: IPageProps) => {
  const router = useRouter();
  const { id } = router.query;
  const { data: study } = studyApi.ReadStudyDetail(id as string);

  return (
    <Layout isFullHeight>
      <CustomHead title={""} />
      <main className="mx-auto mt-[5rem] flex w-full flex-1 flex-col nm:w-[80rem]">
        <div className="flex-center mb-[2.4rem] aspect-square w-[8.8rem] rounded-[0.8rem] border border-primary-200 bg-bgColor-200">
          {study && (
            <Image
              className="w-[6.8rem]"
              src={Icons[study?.icon]}
              width={60}
              height={60}
              alt="icon"
              priority={true}
            />
          )}
        </div>
        <div className="mb-[1.4rem] flex space-x-[1rem]">
          <p className="H3">{study?.title}</p>
          <button className="Cap4 cursor-pointer text-primary-500">
            게시글 수정
          </button>
        </div>
        <div className="mb-[3.8rem] flex space-x-[1.3rem]">
          {study?.user?.avatarImg ? (
            <Image
              className="h-[4.3rem] w-[4.3rem] rounded-full"
              src={study.user.avatarImg}
              alt="icon"
              width={30}
              height={30}
              priority={true}
            />
          ) : (
            <Image
              src={`https://avatars.dicebear.com/api/identicon/${
                study?.user?.id + "" || "1"
              }/wooncloud.svg`}
              className="h-[4.3rem] w-[4.3rem] rounded-full bg-white"
              alt="icon"
              width={30}
              height={30}
              priority={true}
            />
          )}
          <div className="flex flex-col justify-center  ">
            <span className="Cap4">{study?.user?.nickname}</span>
            <ul className="flex min-h-[2rem]">
              {study?.hashTagList?.map((hashTag) => (
                <li key={hashTag?.id} className="Cap4 text-primary-500">
                  {hashTag?.tagName}
                </li>
              ))}
              {!study?.hashTagList?.length && (
                <li className="Cap4 text-primary-500">해시태그 없음</li>
              )}
            </ul>
          </div>
        </div>
        <div className="mb-[4rem] grid grid-cols-2 grid-rows-2 gap-[1.4rem]">
          <div className="flex items-center space-x-[2.2rem] ">
            <span className="Sub2 w-[9.2rem]">스터디팀 이름</span>
            <p className="Cap2 rounded-[0.4rem] bg-[#FFE7D6] p-[0.2rem_0.8rem]">
              {study?.studyName}
            </p>
          </div>
          <div className="flex items-center space-x-[2.2rem] ">
            <span className="Sub2 w-[9.2rem]">스터디 시작일</span>
            <p className="Cap2 rounded-[0.4rem] bg-[#FFE7D6] p-[0.2rem_0.8rem]">
              {dayjs(study?.startDate).format("YYYY /MM /DD")}
            </p>
          </div>
          <div className="flex items-center space-x-[2.2rem] ">
            <span className="Sub2 w-[9.2rem]">스터디 분야</span>
            <p className="Cap2 rounded-[0.4rem] bg-[#FFE7D6] p-[0.2rem_0.8rem]">
              {study?.category}
            </p>
          </div>
          <div className="flex items-center space-x-[2.2rem] ">
            <span className="Sub2 w-[9.2rem]">연락수단</span>
            <a className="Cap2 rounded-[0.4rem] bg-[#FFE7D6] p-[0.2rem_0.8rem]">
              {study?.tel}
            </a>
          </div>
        </div>
        <div className="mb-[3.4rem] flex flex-col rounded-[1rem] border border-primary-200 bg-bgColor-200 p-[2.2rem]">
          <p className="min-h-[20vh] whitespace-pre-wrap text-[1.5rem] leading-[2.6rem]">
            {study?.content}
          </p>
          <span className="Cap4 mt-[0.4rem] self-end text-primary-500">
            {dayjs(study?.updatedAt).format("YYYY.MM.DD")} 작성
          </span>
        </div>
        <button className="Sub1 rounded-[3.5rem] bg-primary-main p-[2rem] text-white">
          스터디 가입하기
        </button>
      </main>
    </Layout>
  );
};

export default StudyDetail;

export const getServerSideProps = withSessionSsr({ isPrivate: false });