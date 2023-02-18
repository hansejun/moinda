import { IWrite } from "@allTypes/study";
import Layout from "@components/layout/layout";
import IconModal from "@components/study/iconModal";
import Icons from "@elements/icon";
import StudyLabel from "@elements/studyLabel";
import { withIronSessionSsr } from "iron-session/next";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

const Write = ({ loginUser }: any) => {
  const { register, handleSubmit, watch } = useForm<IWrite>({
    mode: "onChange",
  });
  const [iconMode, setIconMode] = useState(false);
  const onValid = useCallback(() => {}, []);
  return (
    <Layout loginUser={loginUser}>
      <main className="grid grid-cols-[1fr_4fr_1fr] py-[5rem]  ">
        <form
          onSubmit={handleSubmit(onValid)}
          className="col-start-2  flex flex-col space-y-[2.4rem]"
        >
          <StudyLabel
            type="iconBox"
            label="대표아이콘"
            onClick={() => setIconMode(true)}
          >
            {Icons[watch("icon")] ? (
              <span className="w-[5rem]">
                <Image
                  src={Icons[watch("icon")]}
                  alt="icon"
                  width={60}
                  height={60}
                />
              </span>
            ) : (
              <>
                아이콘
                <br /> 선택
              </>
            )}
          </StudyLabel>
          <StudyLabel
            register={{ ...register("title", { required: true }) }}
            type="input"
            label="모집글 제목"
            placeholder="오전 9시 출석! 취업을 위한 열공 스터디를 모집합니다."
          />
          <StudyLabel
            type="input"
            register={{
              ...register("studyName", { required: true, maxLength: 25 }),
            }}
            label="스터디 이름"
            placeholder="2023 취뽀 스터디 25자 제한"
          />
          <StudyLabel
            register={{ ...register("category", { required: true }) }}
            type="button"
            label="스터디 분야"
          />
          <StudyLabel
            register={{ ...register("tel", { required: true }) }}
            type="input"
            label="연락 수단"
            placeholder="링크를 붙여넣거나 휴대폰 번호를 적어주세요."
          />
          <StudyLabel
            register={{ ...register("hashTag") }}
            type="input"
            label="해시태그"
            placeholder="#취업 #출석체크 #주5회출석 "
          />
          <StudyLabel
            register={{ ...register("startDate", { required: true }) }}
            type="date"
            label="스터디 시작일"
            placeholder="2022 / 02 / 01"
          />
          <StudyLabel
            register={{
              ...register("content", { required: true, maxLength: 3000 }),
            }}
            type="textarea"
            label="스터디 내용"
            placeholder="링크를 붙여넣거나 휴대폰 번호를 적어주세요."
          />
          <div className="grid grid-cols-[1fr_3fr] gap-[2.6rem] rounded-full ">
            <button className="col-start-2 bg-primary-main text-white Sub2 py-[2rem] rounded-full">
              스터디 모집 글 작성롼료
            </button>
          </div>
        </form>
        {iconMode && (
          <IconModal
            register={{ ...register("icon", { required: true }) }}
            onClose={() => setIconMode(false)}
          />
        )}
      </main>
    </Layout>
  );
};
export default Write;

export const getServerSideProps = withIronSessionSsr(
  async ({ req, res }) => {
    const loginUser = req.session?.user;
    if (!loginUser) {
      res.setHeader("location", "/start/signin");
      res.statusCode = 302;
      res.end();
      return {
        props: {
          loginUser: {},
        },
      };
    }

    return {
      props: {
        loginUser,
      },
    };
  },
  {
    password: process.env.SESSION_PASSWORD!,
    cookieName: "Authorization",
  }
);
